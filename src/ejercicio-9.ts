// Puntos n-dimensionales

// user assert function
import { assert } from "chai";

type pointerND = [number, number, number,...number[]];

/**
 * _The addtion of two points (2 dimensions)_
 * @param p1 is a point n dimensions 
 * @param p2 is a point n dimensions
 * @returns the addtion of two points
 */
export function add(p1:pointerND, p2:pointerND):pointerND {
    assert(p1.length == p2.length)
    let resultAddPoints:pointerND = [0, 0, 0];

    p1.forEach((value, index)=>{
        resultAddPoints[index] = value + p2[index];
    })

    return resultAddPoints;
}

/**
 * _The subtraction of two points (2 dimensions)_
 * @param p1 is a point n dimensions
 * @param p2 is a point n dimensions
 * @returns the subtraction of two points
 */
export function subtraction(p1:pointerND, p2:pointerND):pointerND {
    assert(p1.length == p2.length)
    let resultSubPoints:pointerND = [0, 0, 0];

    p2.forEach((value, index) => {
        resultSubPoints[index] = value - p1[index];
    })

    return resultSubPoints;
}


/**
 * _The product of two points (2 dimensions)_
 * @param p1 is a point n dimensions
 * @param p2 is a point n dimensions
 * @returns the product of two points
 */
export function product(p1:pointerND, prod:number):pointerND {
    let resultProPoints:pointerND = [0, 0, 0];

    p1.forEach((value, index)=> {
        resultProPoints[index] = value * prod;
    })

    return resultProPoints;
}

/**
 * _The euclideanDistance of two points (2 dimensions)_
 * @param p1 is a point n dimensions
 * @param p2 is a point n dimensions
 * @returns the euclideanDistance of two points
 */
export function euclideanDistance(p1:pointerND, p2:pointerND) {
    assert(p1.length == p2.length)

    let sum = 0;
    p1.forEach((value, index) => {
        sum += Math.pow(value - p2[index], 2);
    })
    return parseFloat(Math.sqrt(sum).toFixed(2));
}