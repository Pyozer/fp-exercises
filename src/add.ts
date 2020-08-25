/*
Create a function add that takes an arbitrary number of arguments, and adds them all to an array.
*/

const add = <T>(arr: T[], ...values: T[]) => [...arr, ...values];

const baseArray1 = [1, 2, 3, 4];
const baseArray2 = ['Hi', 'Hello'];

console.log('Add to number array :', add(baseArray1, 5, 6, 7, 8));
console.log('Add to string array :', add(baseArray2, 'Yo', 'What\'s up'));
// console.log(add(baseArray2, 2, 3, 5, 6)); // ==> Not working because different types
