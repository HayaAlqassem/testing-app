import { it, expect } from 'vitest'; 
import { add } from './math'

it('should add up all number values in an array', () => {
    const numbers = [1, 2];
    
    const result = add(numbers);

    const expectedResult = numbers.reduce(
        (prevValue, curValue) => prevValue + curValue,
        0
    );
    expect(result).toBe(expectedResult); 
});

it('should yield NaN if at least one invalid number is provided', () => {
    const inputs = ['invalid', 1];

    const result = add(inputs); 

    expect(result).toBeNaN();
});

it('should yield a correct sum if an array of numeric string values is provided', () => {
    const numbers = ['1', '2']; 

    const result = add(numbers);

    const expectedResult = numbers.reduce(
        (prevValue, curValue) => +prevValue + +curValue,
        0
    );
    expect(result).toBe(expectedResult);
});

it('should yield 0 if an empty array is provided', () => {
    const numbers = [];

    const result = add(numbers);

    expect(result).toBe(0);
});

it('should throw an error if no value is passed into the add function', () => {
    // "result" is storing an error function (() => {})
    const result = () => {
        add();
    };

    expect(result).toThrow(/is not iterable/); 
});

it('should throw an error if provided with multiple arguments instead of an array', () => {
    const num1 = 1;
    const num2 = 2;

    const result = () => {
        add(num1, num2);
    };

    expect(result).toThrow(/is not iterable/); 
});

