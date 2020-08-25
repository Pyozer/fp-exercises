/*
Create a function map that reproduce the well-used map function :)
*/

type MapCallback<T, U> = (value: T, index: number, array: T[]) => U;

const map = <T, U>(arr: T[], cb: MapCallback<T, U>): U[] => {
    const newArray: U[] = [];
    arr.forEach((value, index, array) => {
        newArray.push(cb(value, index, array));
    });
    return newArray;
}

const map2 = <T, U>(arr: T[], cb: MapCallback<T, U>): U[] => {
    const newArray: U[] = [];
    for (let i = 0; i < arr.length; i++) {
        newArray.push(cb(arr[i], i, arr));
    }
    return newArray;
}

const baseMapArray = [1, 2, 3, 4, 5];

console.log(baseMapArray);

console.log(map(baseMapArray, (value, i) => value + i));
console.log(map(baseMapArray, (value, i) => value + i)); // Should return same, because baseMapArray not touched

console.log(map2(baseMapArray, (value) => `Number ${value}`));