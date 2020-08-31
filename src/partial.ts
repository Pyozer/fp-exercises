/*
Create a function partial that takes a function Fn and N arguments,
and returns a new function that is Fn partially applied to the arguments.
*/
type FuncPartial<T> = (...args: any[]) => T

const partial = <T>(f: FuncPartial<T>, ...inputArgs: any[]): FuncPartial<T> => {
    return f.bind(null, ...inputArgs);
}

const sum = (...numbers: number[]): number => numbers.reduce((p, c) => p + c, 0)
const concatSpaced = (a: string, b: string): string => `${a} ${b}`;

console.log(partial(sum, 1, 2, 3, 6)(12, 24)); // 1 + 2 + 3 + 6 + 12 + 24 = 48
console.log(partial(concatSpaced, 'Bye')('bye'));
console.log(partial(concatSpaced)('Bye', 'bye'));