import 'mocha';
import { expect } from 'chai';
import { productTable } from "../src/ejercicio-1";

describe(' Tests for exercise 01', ()=>{
  describe('productTable function test', () => {
    
    it('productTable(2) = [[1, 2], [2, 4]]', () => {
      expect(productTable(2)).to.eql([ [ 1, 2 ], [ 2, 4 ] ]);
    });
  });
});