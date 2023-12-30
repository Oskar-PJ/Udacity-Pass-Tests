import nums from '../utilities/numbers';
import arrs from '../utilities/arrays';
import strings from '../utilities/strings';

describe('testing of sum function', () => {
    it('expects the sum 1+2 to be 3', () => {
        expect(nums.sum(1,2)).toEqual(3);
    });
}); 
describe('testing of divide function', () => {
    it('expects the null devision to be inf', () => {
        expect(nums.divide(10,0)).toBePositiveInfinity();
    });
    it('expects the null devision to be 5', () => {
        expect(nums.divide(10,2)).toEqual(5);
    });
}); 

describe('testing of lgNum array function', ()=>{
    it('expects the largest not to be NaN', () => {
        const arr = [1,2,3,4,5,NaN]
        expect(arrs.lgNum(arr)).not.toBeNaN();
    });
})
describe('testing of cut3 array function', ()=>{
    it('expects returned arr to have the same location in memory', () => {
        const arr = [1,2,3,4,5]
        const arr2 = arrs.cut3(arr);
        expect(arr2).toBe(arr);        
    });
    it('expects the number 3 to be spliced from the arr', () => {
        const arr = [1,2,3,4,5]
        const arr2 = arrs.cut3(arr);
        expect(arr2).not.toContain(3);        
    });
})

describe('testing of strings concat function', ()=>{
    it('expects a string to be truthy', ()=>{
        expect(strings.concat('a','')).toBeTruthy()
    })
})