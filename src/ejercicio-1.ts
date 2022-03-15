/**
 * Make the multiplication table of N number.
 * @param num the number that is going to make the multiplication table
 * @return array of array containing the result of the multiplication table num
 */
export function productTable(num: number):number[][] {

    if(num < 1) return [[-1]]
    let result:number[][] = [];
    let array:number[] = [];
    let multiple = 0;
    for(let i:number = 1; i <= num; i++) {
        array = [];
        for(let j:number = 1; j <= num; j++) {
            multiple = i * j;
            array.push(multiple)
        }
        result.push(array);
    }

    return result;
}