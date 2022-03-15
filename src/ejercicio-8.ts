// Define a type of pointer;
type pointer2D = [number, number];

/**
 * _The addtion of two points (2 dimensions)_
 * @param p1 is a point with number x and y 
 * @param p2 is a point with number x and y
 * @returns the addtion of two points
 */
export function add(punto1_2D:pointer2D, punto2_2D:pointer2D):pointer2D{
    return [punto1_2D[0] + punto2_2D[0], punto1_2D[1] + punto2_2D[1]];
}

/**
 * _The subtraction of two points (2 dimensions)_
 * @param p1 is a point with number x and y
 * @param p2 is a point with number x and y
 * @returns the subtraction of two points
 */
export function subtraction(punto1_2D:pointer2D, punto2_2D:pointer2D):pointer2D {
    return [punto2_2D[0] - punto1_2D[0], punto2_2D[1] - punto1_2D[1]];
}

/**
 * _The product of two points (2 dimensions)_
 * @param p1 is a point with number x and y
 * @param p2 is a point with number x and y
 * @returns the product of two points
 */
export function product(punto1_2D:pointer2D, prod:number):pointer2D {
    return [punto1_2D[0] * prod, punto1_2D[1] * prod]
}

/**
 * _The euclideanDistance of two points (2 dimensions)_
 * @param p1 is a point with number x and y
 * @param p2 is a point with number x and y
 * @returns the euclideanDistance of two points
 */
export function euclideanDistance(punto1_2D:pointer2D, punto2_2D:pointer2D) {
    let d_XeY = Math.pow((punto1_2D[0]-punto2_2D[0]),2) + Math.pow((punto1_2D[1]-punto2_2D[1]),2);
    return Math.sqrt(d_XeY).toFixed(2);
}