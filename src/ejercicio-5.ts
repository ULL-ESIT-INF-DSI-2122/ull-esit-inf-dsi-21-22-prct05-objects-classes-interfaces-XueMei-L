/**
 * _find all the numbers that are in an array and a string that is formed by all the letters of the array_
 * @param arrayNyC  array containing multiple numbers and mixed letters
 * @returns array containing the mean found of all numbers and a string found in arrayNyC
 */

export function meanAndConcatenate(arrayNyC: string[]):string[]{
    let sum: number = 0;
    let count: number = 0;
    let newArrayEje3: string[] = [];
    let newstring: string = "";
    let result: string[] = [];
    for(let i :number = 0; i < arrayNyC.length; i++) {
        if((/[0-9]/g).test(arrayNyC[i])){
            sum += parseInt(arrayNyC[i]);
            count++;
        }else{
            newstring += arrayNyC[i];
        }
    }
    sum = sum /count;
    let media: string = sum.toString();
    result.push(media);
    result.push(newstring);
    
    return result;
}