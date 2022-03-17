/**
 * Class Hexadecimal to represents a value in hexadecimal.
 */
export class Hexadecimal {
    private numeroEntero:number = 0;

    constructor(numEntero:number) {
        this.numeroEntero = numEntero;
    }

    /**
     * _Method that return own number_
     * @returns own number.
     */
    public valueOf() { return this.numeroEntero; }

    
    /**
     * _Method that return a number to hexadecimal in string_
     */
    public toString():string {
        let hex = this.numeroEntero.toString(16);
        if (hex.length < 2) {
            hex = "0" + hex;
        }else{
            hex = "0x" + hex;
        }
        return hex;
    }
}


const myHexNumber = new Hexadecimal(38)
myHexNumber.toString() // returns the string "0x26"
let a = myHexNumber.toString();
console.log(`${a}`);
myHexNumber.valueOf() // returns the number 38


let myFirstHexValue = new Hexadecimal(23)
let mySecondHexValue = new Hexadecimal(15)
myFirstHexValue.add(mySecondHexValue).valueOf() // returns the number 38
myFirstHexValue.add(mySecondHexValue).toString() // returns the string "0x26"