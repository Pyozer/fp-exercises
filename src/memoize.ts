/*
Create a function memoize take takes a function and memoizes it,
i.e. it returns a function that does the same thing that the given function, but caches its results in a map.
*/
type MemoFunc<T> = (...args: any[]) => T;

const memoize = <T>(fn: MemoFunc<T>): MemoFunc<T> => {
    const cache: Record<string, T> = {};

    return (...args: any[]): T => {
        const jsonArgs = JSON.stringify(args);
        const result = cache[jsonArgs] || fn(...args);
        cache[jsonArgs] = result;
        return result;
    };
}

const fibonacci = (num: number): number => {
    if (num <= 1) return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

const calcPerf = (cb: () => void): void => {
    const start = new Date().getTime();
    cb();
    console.log(`Duration: ${new Date().getTime() - start} ms`);
}

// Without memoize
calcPerf(() => fibonacci(40));

// Memoize example
const fiboMemo = memoize(fibonacci);

calcPerf(() => fiboMemo(40));
calcPerf(() => fiboMemo(40));
