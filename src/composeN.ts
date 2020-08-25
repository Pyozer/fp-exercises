/*
Create a compose function that can take N arguments, and that returns a function that can take N arguments.
*/

type UnaryFunc<T> = (a: T) => T;

const composeN = <T>(f: UnaryFunc<T>, ...funcs: Array<UnaryFunc<T>>) => {
    return funcs.reduce((prevFn, nextFn) => {
        return (a: T) => prevFn(nextFn(a))
    }, f);
}

console.log('Compose :', compose(trim, lowerCase)('    330    '))

