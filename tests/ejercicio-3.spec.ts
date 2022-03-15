import 'mocha';
import { expect } from 'chai';
import { decodeResistor } from "../src/ejercicio-3";

describe(' Tests for exercise 03', ()=>{

    it('decodeResistor(marron, verde, azul) = 15', ()=>{
        expect(decodeResistor('marron', 'verde', 'azul')).to.be.equal("15");
    });

    it('decodeResistor(negro, blanco) = "09"', ()=>{
        expect(decodeResistor('negro', 'blanco')).to.be.equal("09");
    });

    it('decodeResistor(azul, azul, azul) = "66"', ()=>{
        expect(decodeResistor('azul', 'azul', 'azul')).to.be.equal("66");
    });
});
