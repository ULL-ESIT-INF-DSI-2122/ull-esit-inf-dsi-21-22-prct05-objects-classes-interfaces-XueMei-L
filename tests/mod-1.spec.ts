import 'mocha';
import { expect } from 'chai';
import { performNichomachusClassification } from '../src/mod-1';

describe(' Tests for exercise mod-1.ts', ()=>{

    enum typeNumber { perfecto, abundante, deficiente} ;

    type arrayTypeNum = [...typeNumber[]]

    it('(performNichomachusClassification([4, 6, 8]) = [2, 0, 2])', () => {
        expect(performNichomachusClassification([4, 6, 8])).to.eql([typeNumber.deficiente, typeNumber.perfecto, typeNumber.deficiente]);
    })
});
