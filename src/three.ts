const ref: string[] = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const getPriority = (char: string): number => {
  const index: number =
    ref.findIndex((value: string): boolean => char == value) + 1;
  console.log("index: ", index);
  return index;
};

export const three = (input: string): number => {
  const rucksacks: string[] = input.trim().split(`\n`);
  return rucksacks.reduce((priorityScore: number, sack: string): number => {
    const secondCompList: string[] = sack.split("").splice(sack.length / 2);
    const firstCompList: string[] = sack.split("").splice(0, sack.length / 2);

    const common = new Set(
      firstCompList.filter((item: string): boolean =>
        secondCompList.includes(item)
      )
    );

    return getPriority([...common][0]) + priorityScore;
  }, 0);
};

export const three_partTwo = (input: string): number => {
  let a: string[][] = [];
  input
    .trim()
    .split(`\n`)
    .reduce((acc: string[], current: string, index: number): string[] => {
      acc.push(current);
      if ((index + 1) % 3 == 0) {
        a.push(acc);
        return [];
      }

      return acc;
    }, []);

  return a.reduce((score: number, sacks: string[]): number => {
    const firstSack: string[] = sacks[0].split("");
    const secondSack: string[] = sacks[1].split("");
    const thirdSack: string[] = sacks[2].split("");

    const common: Set<string> = new Set(
      firstSack.filter(
        (item: string): boolean =>
          secondSack.includes(item) && thirdSack.includes(item)
      )
    );

    return score + getPriority([...common][0]);
  }, 0);

  /*
  return groupRucksacks.reduce((score: number, rucksacks: string): any => {
    const sacks: string[] = rucksacks.split("\n");
    const firstSack: string[] = sacks[0].split("");
    const secondSack: string[] = sacks[1].split("");
    const thirdSack: string[] = sacks[2].split("");

    const common: Set<string> = new Set(
      firstSack.filter(
        (item: string): boolean =>
          secondSack.includes(item) && thirdSack.includes(item)
      )
    );

    return score + getPriority([...common][0]);
  }, 0);
  */
};
