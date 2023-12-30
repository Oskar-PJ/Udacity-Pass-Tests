"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var numbers_1 = __importDefault(require("../utilities/numbers"));
var arrays_1 = __importDefault(require("../utilities/arrays"));
var strings_1 = __importDefault(require("../utilities/strings"));
describe('testing of sum function', function () {
    it('expects the sum 1+2 to be 3', function () {
        expect(numbers_1.default.sum(1, 2)).toEqual(3);
    });
});
describe('testing of divide function', function () {
    it('expects the null devision to be inf', function () {
        expect(numbers_1.default.divide(10, 0)).toBePositiveInfinity();
    });
    it('expects the null devision to be 5', function () {
        expect(numbers_1.default.divide(10, 2)).toEqual(5);
    });
});
describe('testing of lgNum array function', function () {
    it('expects the largest not to be NaN', function () {
        var arr = [1, 2, 3, 4, 5, NaN];
        expect(arrays_1.default.lgNum(arr)).not.toBeNaN();
    });
});
describe('testing of cut3 array function', function () {
    it('expects returned arr to have the same location in memory', function () {
        var arr = [1, 2, 3, 4, 5];
        var arr2 = arrays_1.default.cut3(arr);
        expect(arr2).toBe(arr);
    });
    it('expects the number 3 to be spliced from the arr', function () {
        var arr = [1, 2, 3, 4, 5];
        var arr2 = arrays_1.default.cut3(arr);
        expect(arr2).not.toContain(3);
    });
});
describe('testing of strings concat function', function () {
    it('expects a string to be truthy', function () {
        expect(strings_1.default.concat('a', '')).toBeTruthy();
    });
});
