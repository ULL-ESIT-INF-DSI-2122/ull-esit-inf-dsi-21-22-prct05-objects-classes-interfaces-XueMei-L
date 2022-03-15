/**
 * _A array multiple with a number_
 * @param array: array containing multiple numbers
 * @returns a new function that receive number and return a new array
 */

export function multiplyAll(array:number[]) {
    return function(num:number):number[] {
        let newArray:number[] = [];
        array.forEach((value)=>{
            newArray.push(value * num);
        })
        return newArray;
    }
}