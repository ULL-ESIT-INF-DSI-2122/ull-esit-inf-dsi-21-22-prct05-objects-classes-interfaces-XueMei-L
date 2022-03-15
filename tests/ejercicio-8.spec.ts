import 'mocha';
import { expect } from 'chai';
import { add, subtraction, product, euclideanDistance } from "../src/ejercicio-8";

describe(' Tests for exercise 08', ()=>{
    type pointer2D = [number, number];

    let point1: pointer2D = [2,5];
    let point2: pointer2D = [3,6];
    
    it('Function add([2, 5], [3, 6]) = [5, 11]', () =>{
        expect(add(point1, point2)).to.eql([5, 11])
    })

    it('Function subtraction([2, 5], [3, 6]) = [1, 1]', () =>{
        expect(subtraction(point1, point2)).to.eql([1, 1])
    })

    it('Function add([2, 5], 2) = [4, 10]', () =>{
        expect(product(point1, 2)).to.eql([4, 10])
    })

    it('Function add([2, 5], [3, 6]) = 1.41', () =>{
        expect(euclideanDistance(point1, point2)).to.be.equal('1.41')
    })

});
