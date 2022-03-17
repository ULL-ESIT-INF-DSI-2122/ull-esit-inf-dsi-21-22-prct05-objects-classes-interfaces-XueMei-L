import 'mocha';
import { expect } from 'chai';
import { Hexadecimal } from "../../src/modificacion/modificacion";


describe('Tests for POKEMON GAME', ()=>{
    


    let  objHexadecimal = new Hexadecimal(30);

    describe('Tests for the class Hexadecimal', () => {

        it('Existe una clase Pokedex', () => {
            expect(objHexadecimal).not.to.be.null;
        });
    });
        
});