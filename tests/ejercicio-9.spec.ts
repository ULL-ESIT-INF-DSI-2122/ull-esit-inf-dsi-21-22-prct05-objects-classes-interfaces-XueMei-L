import 'mocha';
import { expect } from 'chai';
import { add, subtraction, product, euclideanDistance } from "../src/ejercicio-9";

describe(' Tests for exercise 09', ()=>{

    type pointerND = [number, number, number,...number[]];

    let point1: pointerND = [1, 2, 3];
    let point2: pointerND = [2, 3, 4];
    
    it('Function add([1, 2, 3], [2, 3, 4]) = [3, 5, 7]', () =>{
        expect(add(point1, point2)).to.eql([3, 5, 7])
    })

    it('Function subtraction([1, 2, 3], [2, 3, 4]) = [1, 1, 1]', () =>{
        expect(subtraction(point1, point2)).to.eql([1, 1, 1])
    })

    it('Function add([1, 2, 3], 2) = [2, 4, 6]', () =>{
        expect(product(point1, 2)).to.eql([2, 4, 6])
    })

    it('euclideanDistance([1, 2, 3], [2, 3, 4]) = 1.73', () =>{
        expect(euclideanDistance([1, 2, 3], [2, 3, 4])).to.be.equal(1.73)
    })

});
