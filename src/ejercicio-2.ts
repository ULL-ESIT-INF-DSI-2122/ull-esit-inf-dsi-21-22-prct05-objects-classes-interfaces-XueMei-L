import { NamedTupleMember } from "typedoc";

/**
 * _Funcion que convierte array a un rango_
 * @param num [number[]] an array of number
 * @return an array of number contain numbers or
 * o caracter with number consecutive numbers where the 2 number is replaced by "_"
 */
export function fromArrayToRanges(num:number[]): string[] {
    if(num.length < 0) return ["-1"]
    if(num.length == 1) return Array.from(num[0].toString());

    let result:string[] = [];
    let concat1 = "";

    num.forEach((value, index) => {
        if(index != 0 && index!= num.length-1){
            if((num[index] == num[index-1]+1) && (num[index] == num[index+1]-1)) {
                concat1 = "";
                concat1 += num[index-1].toString();
                concat1 += "_";
                concat1 += num[index+1].toString();
                result.push(concat1);

            }else if((num[index] == num[index+1]-1) || (num[index] == num[index-1]+1)) {

            }else{
                result.push(value.toString());
            }
        }
    })

    return result;
}


/**
 * _Convert Range to Arrays_
 * @param str [string[]] aan array of number contain numbers or
 * o caracter with number consecutive numbers where the 2 number is replaced by "_"
 * @return an array of number
 */
export function fromRangesToArray(str:string[]):number[]{
    if(str.length < 0) return [-1]
    if(str.length == 1) return Array.from([parseInt(str[0])]);

    let num:number[] = [];
    let ValorMedio:number = 0;
    str.forEach((value, index) => {
        if(str[index].includes("_")){
            let Array = value.split("_");
            ValorMedio = (parseInt(Array[0]) + parseInt(Array[1])) / 2;
            num.push(parseInt(Array[0]));
            num.push(ValorMedio);
            num.push(parseInt(Array[1]));
        }else{
            num.push(parseInt(value));
        }
    })
    return num;
}
