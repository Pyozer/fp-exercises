/*
Create a function filter that reproduce the well-used filter function :)
*/

type FilterCallback<T> = (value: T, index: number, array: T[]) => boolean;

const filter = <T>(arr: T[], cb: FilterCallback<T>): T[] => {
    const newArray: T[] = [];
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i], i, arr)) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

const baseFilterArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(baseFilterArr);
console.log(filter(baseFilterArr, (v) => v % 2 === 0));

