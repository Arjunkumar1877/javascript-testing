import { describe, test, it, expect } from "vitest";
import { fizzBuzz, max } from "../src/intro";


describe('max', ()=>{
    it('should return the first argument if it is greater', ()=>{
        expect(max(2, 1)).toBe(2);
    })

    it('should return the second argument if it is greater', ()=>{
        expect(max(1, 2)).toBe(2);
    })

    it('should return the first argument if arguments are equal', ()=>{
        expect(max(1, 2)).toBe(2);
    })
})


describe('fizzBuzz', ()=>{
    it('should return FizzBuzz if arg is divisible by 3 and 5', ()=> {
        expect(fizzBuzz(60)).toBe('FizzBuzz'); 
    })

    it('should return Fizz if arg is only divisible by 3', ()=> {
        expect(fizzBuzz(9)).toBe('Fizz'); 
    })

    it('should return Buzz if arg is oly divisible by 5', ()=>{
        expect(fizzBuzz(5)).toBe('Buzz')
    })

    it('should return arg as a string if it isnot dicisible by 5 or 3', ()=>{
        expect(fizzBuzz(1)).toBe('1');
    })
})