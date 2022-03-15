import 'mocha';
import { expect } from 'chai';
import { palindromeCount } from '../src/mod-2';

describe(' Tests for exercise mod-2.ts', ()=>{

    it('palindromeCount(["aba", "abcd","aabc"]) = 3', () => {
        expect(palindromeCount(["aba", "abcd","aabc"])).to.be.equal(3);
    })

    it('palindromeCount(["abba", "acbde","abdccdba"]) = 8', () => {
        expect(palindromeCount(["abba", "acbde","abdccdba"])).to.be.equal(8);
    })

    it('palindromeCount(["abcd"]) = undefined', () => {
        expect(palindromeCount(["abcd"])).be.undefined;
    })

});
