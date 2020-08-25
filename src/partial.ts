/*
Create a function partial that takes a function Fn and N arguments,
and returns a new function that is Fn partially applied to the arguments.
*/
type FuncPartial<T> = (...args: any[]) => T

const partial = <T, U>(func: FuncPartial<T>): T => {
    // TODO
    return null;
}