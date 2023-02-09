export const one = (input: string): number => {
  const toList = input.split(`\n`);
  let totalList: number[] = [];

  toList.reduce((acc: number, curr: string): number => {
    if (isNaN(parseInt(curr))) {
      totalList.push(acc);
      return 0;
    }
    return acc + parseInt(curr);
  }, 0);
  totalList.sort((a: number, b: number) => a - b);
  return totalList[totalList.length - 1];
};

export const one_partTwo = (input: string): number => {
  const toList = input.split(`\n`);
  let totalList: number[] = [];

  toList.reduce((acc: number, curr: string): number => {
    if (isNaN(parseInt(curr))) {
      totalList.push(acc);
      return 0;
    }
    return acc + parseInt(curr);
  }, 0);
  totalList.sort((a: number, b: number) => a - b);
  return totalList
    .splice(totalList.length - 3, 3)
    .reduce((acc: number, curr: number): number => acc + curr, 0);
};
