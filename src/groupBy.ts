/*
Create a function groupBy that takes a function Fn and an array
and groups the elements of the sequence based on the result of Fn.
*/

type GroupByCallback<T, U> = (value: T) => U;

// remove any type
const groupBy = <T, U>(arr: T[], cb: GroupByCallback<T, U>): any => {
    const groups: any = {};
    for (const value of arr) {
        const key = cb(value);
        if (!groups[key]) {
            groups[key] = []
        }
        groups[key].push(value);
    }
    return groups;
}

const baseArr = [
    { name: "Jean", age: 22 },
    { name: "Robert", age: 43 },
    { name: "Bernard", age: 55 },
    { name: "Charles", age: 22 },
    { name: "Didier", age: 43 },
    { name: "Max", age: 22 },
]

console.log(groupBy(baseArr, (value) => value.age));
