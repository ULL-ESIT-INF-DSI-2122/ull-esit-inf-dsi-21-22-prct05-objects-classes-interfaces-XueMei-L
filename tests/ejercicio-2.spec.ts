import 'mocha';
import { expect } from 'chai';
import { fromArrayToRanges,fromRangesToArray } from '../src/ejercicio-2';

describe(' Tests for exercise 02', () => {
    let str0:string[] = [ '5_7', '9', '12_14' ];

    it('fromArrayToRanges([5, 6, 7, 9, 12, 13, 14]) = [ "5_7", "9", "12_14" ]', () => {
    expect(fromArrayToRanges([5, 6, 7, 9, 12, 13, 14])).to.eql(str0);
    });

    let str1:string[] = [ '-3_-1', '3', '5_7' ];

    it('fromArrayToRanges([-3, -2, -1, 3, 5, 6, 7]) = [ "-3_-1", "3", "5_7"]', () => {
        expect(fromArrayToRanges([-3, -2, -1, 3, 5, 6, 7])).to.eql(str1);
    });

    let num0:number[] = [5, 6, 7, 9, 12, 13, 14];

    it('fromArrayToRanges(["5_7", "9", "12_14"]) = [5, 6, 7, 9, 12, 13, 14]', () => {
        expect(fromRangesToArray(['5_7', '9', '12_14'])).to.eql(num0);
    });

    let num1:number[] = [-3, -2, -1, 3, 5, 6, 7];

    it('fromArrayToRanges([ "-3_-1", "3", "5_7"]) = [-3, -2, -1, 3, 5, 6, 7]', () => {
        expect(fromRangesToArray([ "-3_-1", "3", "5_7"])).to.eql(num1);
    });
});