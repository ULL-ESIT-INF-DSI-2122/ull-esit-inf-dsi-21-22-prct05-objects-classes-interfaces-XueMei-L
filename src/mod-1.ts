import { assert } from "chai";

enum typeNumber { perfecto, abundante, deficiente} ;

type arrayTypeNum = [...typeNumber[]]

/**
 * _Identificar el tipo de numero_
 * @param nums un array que contiene numeros natulares
 * @returns retorna un tipo arrayTypeNum.
 */
export function performNichomachusClassification(nums:number[]): arrayTypeNum{
    let result:arrayTypeNum = [];
    let divisores:number[] = [];
    let sum:number = 0;

    nums.forEach((value, index) =>{
        divisores = [];
        sum = 0;

        for(let i:number = 1; i < value; i++){
            if(value % i == 0){
              divisores.push(i);
            }
        }

        divisores.forEach((value) => {
            sum += value;
        })

        if(sum > value) {
            result.push(typeNumber.abundante);
        }else if(sum == value) {
            result.push(typeNumber.perfecto);
        }else{
            result.push(typeNumber.deficiente);
        }
    })

    return result;
}

console.log(performNichomachusClassification([4, 6, 8]))