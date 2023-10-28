const { generateColumn, transposeMatrix } = require("../src/bingo/bingoCard");

describe("generateColumn", () => {
  it("generates a column of unique numbers within the range", () => {
    const column = generateColumn(1, 15);
    expect(column.length).toBe(5);

    const isUnique = new Set(column).size === column.length;
    expect(isUnique).toBe(true);
  });
});

describe("transposeMatrix", () => {
  it("transposes a matrix", () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
    ];
    const transposed = transposeMatrix(matrix);
    expect(transposed).toEqual([
      [1, 4],
      [2, 5],
      [3, 6],
    ]);
  });
});
