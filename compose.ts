/*
Create a function compose that takes 2 functions and does function composition

compose(g, f) should return a function that first calls f and then g on its argument.
*/

type Func<T, U> = (x: T) => U;

const compose = <T, U, V>(f: Func<T, U>, g: Func<U, V>) => (x: T) => g(f(x))
 
// Example 1
const trim = (str: string): string => str.trim();
const lowerCase = (str: string): string => str.toLowerCase();

console.log('Compose :', compose(trim, lowerCase)(' HeLLO    '))

// Example 2
const stringToInt = (str: string): number => parseInt(str);
const intLength = (value: number): number => `${value}`.split('').length;

console.log('Compose :', compose(stringToInt, intLength)('330'))

