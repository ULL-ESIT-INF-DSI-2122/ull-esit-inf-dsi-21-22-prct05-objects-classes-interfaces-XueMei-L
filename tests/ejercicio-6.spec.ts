import "mocha";
import { expect } from "chai";
import { moveZeros } from "../src/ejercicio-6";

describe(" Tests for exercise 06", () => {
    it("moveZeros([1, 0, 1, 2, 0, 1, 3]) returns value [1, 1, 2, 1, 3, 0, 0]", () => {
      expect(moveZeros([1, 0, 1, 2, 0, 1, 3])).to.be.deep.equal([1, 1, 2, 1, 3, 0, 0]);
    });


    it("moveZeros([2, 0, 2, 0, 2, 0, 2, 1]) returns value [2, 2, 2, 2, 1, 0, 0, 0]", () => {
      expect(moveZeros([2, 0, 2, 0, 2, 0, 2, 1])).to.be.deep.equal([2, 2, 2, 2, 1, 0, 0, 0]);
    });
});