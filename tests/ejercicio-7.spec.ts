import 'mocha';
import { expect } from 'chai';
import { multiplyAll } from "../src/ejercicio-7";

describe(' Tests for exercise 07', ()=>{
    
    it('multiplyAll([2, 6, 8])(3)) = [6, 18, 24])', ()=>{
        expect(multiplyAll([2, 6, 8])(3)).to.eqls([6, 18, 24]);
    });

    it('multiplyAll([1, 2, 3])(2)) = [2, 4, 6])', ()=>{
        expect(multiplyAll([1, 2, 3])(2)).to.eqls([2, 4, 6]);
    });

});
