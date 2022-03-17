import 'mocha';
import { expect } from 'chai';
import { Hexadecimal } from "../../src/modificacion/modificacion";


describe('Tests for the class Hexadecimal', ()=>{
    
    // Objetos para la clase Hexadecimal para realizar transformacion del numero
    let objHexadecimal = new Hexadecimal(38);

    // Objetos para la clase Hexadecimal para realizar la suma y la resta
    let myFirstHexValue = new Hexadecimal(23)
    let mySecondHexValue = new Hexadecimal(15)

    describe('Tests for the class Hexadecimal', () => {

        it('Existe una clase Hexadecimal', () => {
            expect(objHexadecimal).not.to.be.null;
        });
        
        it('Existe un metodo llamado .toString()', () => {
            expect(objHexadecimal.toString()).not.to.be.null;
        });

        it('Existe un metodo llamado .toString()', () => {
            expect(objHexadecimal.valueOf()).not.to.be.null;
        });

        it('Existe un metodo llamado .add()', () => {
            expect(objHexadecimal.add()).not.to.be.null;
        });

        it('Existe un metodo llamado .sub()', () => {
            expect(objHexadecimal.sub()).not.to.be.null;
        });


        it('objHexadecimal.toString() retorna 0x26', () => {
            expect(objHexadecimal.toString()).to.eq("0x26");
        });
    });
        
});