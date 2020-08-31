/*
Create a compose function that can take N arguments, and that returns a function that can take N arguments.
*/

type FuncCompose<T> = (a: T) => T;

const composeN = <T>(fA: FuncCompose<T>, ...fN: FuncCompose<T>[]) => {
    return fN.reduce((prevFn, nextFn) => {
        return (a: T) => nextFn(prevFn(a));
    }, fA);
}

const fA = (input: string): string => input.trim();
const fB = (input: string): string => input.split('').reverse().join('');
const fC = (input: string): string => `==> ${input} <==`;
const fD = (input: string): string => `# ${input} #`;

console.log('Compose N :', composeN(fA, fB, fC, fD)('    330    '))
