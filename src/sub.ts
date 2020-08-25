/*
Create a function sub that subtracts all the arguments but the first from the first
*/

const sub = <T>(arr: T[], ...values: T[]): T[] => {
    return arr.filter((value) => values.indexOf(value) === -1);
}

const baseArray = [1, 2, 3, 4, 5];

console.log('Remove values in array', sub(baseArray, 2, 4, 5));
console.log('Base array not touched', baseArray);