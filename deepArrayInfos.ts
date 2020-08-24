/*
Write a functions that :

calculate the sum of a deep array
calculate the depth of the array
find the largest value in a tree
find the smallest value in a tree
Example of an array : [1, [[2], 3], [4], 5, [6, 42, [[86], [[12]], 1337]], 1]
*/
type RecursiveArray = Array<RecursiveArray | number>;

const sumDeepArray = (arr: RecursiveArray): number => {
    return arr.reduce<number>((total, value) => {
        if (typeof value === 'number') return total + value;
        return total + sumDeepArray(value);
    }, 0);
}

const depthArray = (arr: RecursiveArray): number => {
    return Array.isArray(arr)
        ? 1 + Math.max(...arr.map(depthArray))
        : 0;
}

const findExtremInArray = (arr: RecursiveArray, isMax: boolean): number => {
    const compare = isMax ? Math.max : Math.min;
    return arr.reduce<number>((current, value) => {
        return compare(
            current,
            (typeof value === 'number') ? value : findExtremInArray(value, isMax)
        );
    }, isMax ? -Infinity : Infinity);
}

const findLargestInArray = (arr: RecursiveArray): number => findExtremInArray(arr, true);
const findSmallestInArray = (arr: RecursiveArray): number => findExtremInArray(arr, false);

const array: RecursiveArray = [1, [[2], 3], [4], 5, [6, 42, [[86], [[12]], 1337]], 1];

console.log('Deep array sum :', sumDeepArray(array));
console.log('Depth array :', depthArray(array));
console.log('Largest value in array :', findLargestInArray(array));
console.log('Smallest value in array :', findSmallestInArray(array));
