import 'mocha';
import { expect } from 'chai';
import { meshArray } from "../src/ejercicio-4";

describe(' Tests for exercise 04', ()=>{

    let ary1: string[] = ["allow", "lowering", "ringmaster", "terror"];
 
    it('meshArray(["allow", "lowering", "ringmaster", "terror"]) = lowringter', ()=>{
        expect(meshArray(ary1)).to.be.equal("lowringter");
    });


});
