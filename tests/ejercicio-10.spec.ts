import 'mocha';
import { expect } from 'chai';
import { shortWalk } from '../src/ejercicio-10';

describe(' Tests for exercise 10', ()=>{
    
    it('ShortWalk["n", "n", "n", "o", "s", "o", "s", "e", "s", "e"])', () => {
        expect( shortWalk(['n', 'n', 'n', 'o', 's', 'o', 's', 'e', 's', 'e'])).to.eq(true);
    })

    it('ShortWalk["s", "s", "n", "o", "s", "e", "s", "e", "s", "e"])', () => {
        expect( shortWalk(["s", "s", "n", "o", "s", "e", "s", "e", "s", "e"])).to.eq(false);
    })
});
