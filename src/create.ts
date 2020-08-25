/*
Create a function create that takes an arbitrary number of arguments and creates an array of the arguments given.
*/

const create = <T>(...values: T[]) => new Array<T>(...values);

console.log('Create number array :', create(1, 2, 3, 6));
console.log('Create string array', create('Yo', 'Hello', 'Hi', 'What\'s up'));
// console.log(create(1, 2, 'Yo', 'Hello')); // ==> Not working because mixed types
