import 'mocha';
import { expect } from 'chai';
import { Hexadecimal } from "../../src/modificacion/modificacion";


describe('Tests for the class Hexadecimal', ()=>{
    
    let  objHexadecimal = new Hexadecimal(30);

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
    });
        
});