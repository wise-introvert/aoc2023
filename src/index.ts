const a: number = 1;
const b: number = 10;

export const add = (...numbers: number[]): number =>
  numbers.reduce((acc: number, curr: number): number => acc + curr, 0);

console.log(`add(${a}, ${b}): ${add(a, b)}`);
