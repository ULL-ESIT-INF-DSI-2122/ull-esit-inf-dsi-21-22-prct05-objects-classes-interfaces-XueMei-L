export class Hexadecimal {
    private numeroEntero:number = 0;

    constructor(numEntero:number) {
        this.numeroEntero = numEntero;
    }

}


const myHexNumber = new Hexadecimal(38)
myHexNumber.toString() // returns the string "0x26"
myHexNumber.valueOf() // returns the number 38