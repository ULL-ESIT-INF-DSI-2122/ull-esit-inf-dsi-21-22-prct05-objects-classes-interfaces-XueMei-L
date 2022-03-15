import "mocha";
import {expect} from "chai";
import { meanAndConcatenate } from "../src/ejercicio-5";

describe(' Tests for exercise 05', () => {
    
    it("meanAndConcatenate[`u`, `6`, `d`, `1`, `i`, `w`, `6`, `s`, `t`, `4`, `a`, `6`, `g`, `1`, `2`, `w`, `8`, `o`, `2`, `0`]) returns value [`3.6`,`udiwstagwo`]", () => {
      expect(meanAndConcatenate(["u", "6", "d", "1", "i", "w", "6", "s", "t", "4", "a", "6", "g", "1", "2", "w", "8", "o", "2", "0"])).to.be.deep.equal(["3.6","udiwstagwo"]);
    });

    it("meanAndConcatenate[`d`, `1`, `s`, `9`, `i`, `u`, `9`, `9`, `l`, `20`, `l`, `21`]) returns value [`11.5`,`dsiull`]", () => {
      expect(meanAndConcatenate(["d", "1", "s", "9", "i", "u", "9", "9", "l", "20", "l", "21",])).to.be.deep.equal(["11.5","dsiull"]);
    });
});