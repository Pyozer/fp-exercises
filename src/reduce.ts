/*
Create a function reduce that reproduce the well-used reduce function :)
*/

type ReduceCallback<T> = (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T

const reduce = <T>(arr: T[], cb: ReduceCallback<T>, initialValue: T): T => {
    let prev = initialValue;
    for (let i = 0; i < arr.length; i++) {
        prev = cb(prev, arr[i], i, arr);
    }
    return prev;
}

console.log(reduce([1, 2, 3, 4, 5], (p, c) => p + c, 0));
