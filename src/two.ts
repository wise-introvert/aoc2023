export const two = (input: string): number => {
  const ref: Record<string, number> = {
    A: 1,
    B: 2,
    C: 3,
    X: 1,
    Y: 2,
    Z: 3,
    loss: 0,
    draw: 3,
    win: 6,
  };

  const points: Record<string, number> = {
    "A X": ref.draw,
    "A Y": ref.win,
    "A Z": ref.loss,

    "B X": ref.loss,
    "B Y": ref.draw,
    "B Z": ref.win,

    "C X": ref.win,
    "C Y": ref.loss,
    "C Z": ref.draw,
  };

  const listOfPairs: string[] = input.trim().split(`\n`);

  return listOfPairs.reduce((acc: number, pair: string): number => {
    const split: string[] = pair.split(" ");
    const yourMove: string = split[1];

    const score = points[pair] + ref[yourMove];
    return acc + score;
  }, 0);
};

export const two_partTwo = (input: string): number => {
  const ref: Record<string, number> = {
    A: 1,
    B: 2,
    C: 3,
    X: 1,
    Y: 2,
    Z: 3,
    loss: 0,
    draw: 3,
    win: 6,
  };

  const pairs: Record<string, string> = {
    "A X": "Z",
    "A Y": "X",
    "A Z": "Y",

    "B X": "X",
    "B Y": "Y",
    "B Z": "Z",

    "C X": "Y",
    "C Y": "Z",
    "C Z": "X",
  };

  const points: Record<string, number> = {
    "A X": ref.draw,
    "A Y": ref.win,
    "A Z": ref.loss,

    "B X": ref.loss,
    "B Y": ref.draw,
    "B Z": ref.win,

    "C X": ref.win,
    "C Y": ref.loss,
    "C Z": ref.draw,
  };

  const listOfPairs: string[] = input.trim().split(`\n`);

  return listOfPairs.reduce((acc: number, pair: string): number => {
    const split: string[] = pair.split(" ");
    const yourMove: string = pairs[pair];

    const score = points[`${split[0]} ${yourMove}`] + ref[yourMove];
    return acc + score;
  }, 0);
};
