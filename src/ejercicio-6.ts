/**
 * _Move all 0 at the end of array_
 * @param arrayEje4 array containing multiple numbers
 * @returns a new array where all 0 are at the end of array
 */

export function moveZeros(array:number[]):number[]{
    let count: number = 0;
    let newArray: number[] = [];
    array.forEach((number) => {
        if(number == 0) {
            count++;
        }else{
            newArray.push(number);
        }
    })

    for(let i:number = 0; i < count; i++) {
        newArray.push(0);
    }
    
    return newArray;
}