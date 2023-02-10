export const four = (input: string): number => {
  return input
    .trim()
    .split("\n")
    .filter((value: string): boolean => value.length > 0)
    .reduce((acc: number, pair: string): number => {
      const split = pair.split(",");
      const firstPair: string = split[0];
      const secondPair: string = split[1];

      const firstPairFirstNumber: Number = parseInt(firstPair.split("-")[0]);
      const firstPairSecondNumber: Number = parseInt(firstPair.split("-")[1]);

      const secondPairFirstNumber: Number = parseInt(secondPair.split("-")[0]);
      const secondPairSecondNumber: Number = parseInt(secondPair.split("-")[1]);

      if (
        (firstPairFirstNumber >= secondPairFirstNumber &&
          firstPairSecondNumber <= secondPairSecondNumber) ||
        (secondPairFirstNumber >= firstPairFirstNumber &&
          secondPairSecondNumber <= firstPairSecondNumber)
      ) {
        return acc + 1;
      }
      return acc;
    }, 0);
};

export const four_partTwo = (input: string): number => {
  return input
    .trim()
    .split("\n")
    .filter((value: string): boolean => value.length > 0)
    .reduce((acc: number, pair: string): number => {
      const split = pair.split(",");
      const firstPair: string = split[0];
      const secondPair: string = split[1];

      const firstPairFirstNumber: Number = parseInt(firstPair.split("-")[0]);
      const firstPairSecondNumber: Number = parseInt(firstPair.split("-")[1]);

      const secondPairFirstNumber: Number = parseInt(secondPair.split("-")[0]);
      const secondPairSecondNumber: Number = parseInt(secondPair.split("-")[1]);

      if (
        (firstPairFirstNumber >= secondPairFirstNumber &&
          firstPairSecondNumber <= secondPairSecondNumber) ||
        (secondPairFirstNumber >= firstPairFirstNumber &&
          secondPairSecondNumber <= firstPairSecondNumber) ||
        firstPairFirstNumber == secondPairFirstNumber ||
        firstPairFirstNumber == secondPairSecondNumber ||
        firstPairSecondNumber == secondPairFirstNumber ||
        firstPairSecondNumber == secondPairSecondNumber ||
        (firstPairFirstNumber >= secondPairFirstNumber &&
          firstPairFirstNumber <= secondPairSecondNumber) ||
        (secondPairFirstNumber >= firstPairFirstNumber &&
          secondPairFirstNumber <= firstPairSecondNumber)
      ) {
        return acc + 1;
      }
      return acc;
    }, 0);
};
