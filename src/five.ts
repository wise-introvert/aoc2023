/*
export const five = (input: string): void => {
  const lines: string[] = input.split("\n");

  // Split the input into the stack configuration and the instructions
  const stackConfigLine: string | undefined = lines.shift();
  const instructionLines: string[] = lines;

  // Parse the stack configuration
  const stacks: number[] = stackConfigLine!
    .trim()
    .split(" ")
    .map((crate) => parseInt(crate, 10));
  console.log("stacks: ", stacks);

  // Parse the instructions
  const instructions: [number, number][] = [];
  for (const line of instructionLines) {
    // Split the line into tokens
    const tokens = line.trim().split(" ");

    // Extract the source and destination stacks
    const source = parseInt(tokens[1], 10);
    const destination = parseInt(tokens[3], 10);

    // Add the instruction to the list
    instructions.push([source, destination]);
  }
  console.log("instructions: ", instructions);
};
*/

export const five = (input: string) => {
  const steps: string = input.split(/\n\n/)[1];
  const stack: string = input.split(/\n\n/)[0];
  console.log("steps: ", steps);

  const split: string[] = stack.replace(/\n/, " ").split(" ");
  const length: number = stack
    .split(/\n/)
    .slice(-1)[0]
    .trim()
    .split(/\s/)
    .filter((value: string): boolean => /\d/.test(value)).length;

  let grid: string[][] = Array.from({ length }, () => []);
  let result: string[] = [];
  for (let i: number = 0; i < split.length; i++) {
    const current: string = split[i];
    const next: string = split[i + 1];
    const parso: string = split[i + 2];
    if (!current) {
      if (!next) {
        if (!parso) {
          result.push("-");
          i = i + 2;
        } else {
          result.push("*");
          i = i + 1;
        }
      } else {
        result.push(" ");
      }
    } else {
      result.push(current);
    }
  }

  let a: string[] = [];

  result.forEach((value: string): any =>
    /\n/.test(value) ? a.push(...value.split(/\n/)) : a.push(value)
  );

  a = a.filter(
    (value: string): boolean =>
      // value.length > 0 && /[^\*\d \n]{1,}/gi.test(value)
      value.length > 0 && /[^\*\d ]{1,}/gi.test(value)
  );

  Array.from({ length }).forEach((_, index: number): void => {
    a.splice(0, 9).forEach((current: string, i: number): void => {
      console.log(`Inserting ${current} in stack #${i + 1}...`);

      grid[i].push(current);
    });
    console.log("\n\n");
  });

  printGrid(grid);

  steps
    .trim()
    .split(/\n/)
    .forEach((step: string): void => {
      step = step.replace(/(move|from|to)/gi, "").replace(/\s/, "");
      const variables: string[] = step
        .split(" ")
        .filter((value: string): boolean => value.length > 0);
      console.log("variables: ", variables.join("_"));
      const quantity: number = parseInt(variables[0]);
      const from: number = parseInt(variables[1]);
      const to: number = parseInt(variables[2]);

      console.log(`moving ${quantity} boxes from ${from} to ${to}...`);

      const valuesToMove: string[] = grid[from - 1].slice(0, quantity);

      console.log(
        `moving \n\t${valuesToMove.join(", ")}\nfrom\n\t${
          grid[from - 1]
        }\nto\n\t${grid[to - 1]}...`
      );

      console.log(`boxes moved successfully!!\n`);
      grid[to - 1].unshift(...grid[from - 1].splice(0, quantity));
      console.log("to: ", grid[to - 1]);
      console.log("from: ", grid[from - 1]);
      printGrid(grid);
      console.log("===========================================\n\n");

      /*
      grid[to - 1].unshift(...valuesToMove);
      grid[from - 1] = grid[from - 1].splice(
        0,
        quantity + 1,
        ...Array.from({ length: quantity }, (): string => "-")
      );
      */
    });

  console.log(
    grid
      .map((subarray: string[]): string[] =>
        subarray.filter((value: string): boolean => /\[\W\]/.test(value))
      )
      .map(([first]) => first)
      .join("")
  );

  console.log("grid: ", grid);
};

function printGrid(grid: string[][]): void {
  Array.from({ length: grid.length - 1 }).forEach((_, index: number): void => {
    console.log(
      grid.map((arr) => (arr[index] == "-" ? " - " : arr[index])).join(" ")
    );
  });
  console.log(
    ` ${Array.from(
      { length: grid.length },
      (_, index: number): number => index + 1
    ).join("   ")}`
  );
}
