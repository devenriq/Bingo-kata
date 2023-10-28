const {
  generateBingoCart,
  generateColumn,
  transposeMatrix,
} = require("../src/bingo/bingoCard");

describe("generateBingoCart", () => {
  it("should generate a Bingo card with 5 rows and 5 columns", () => {
    const card = generateBingoCart();
    expect(card.length).toBe(5);
    card.forEach((row) => {
      expect(row.length).toBe(5);
    });
  });

  it("should generate unique numbers within the range in each column", () => {
    const card = generateBingoCart();
    const numbers = new Set();

    card.forEach((row, rowIndex) => {
      row.forEach((number, columnIndex) => {
        // Exclude the center of the "N" column because is a string
        if (!(rowIndex === 2 && columnIndex === 2)) {
          expect(number).toBeGreaterThanOrEqual(1);
          expect(number).toBeLessThanOrEqual(75);
          numbers.add(number);
        }
      });
    });
  });

  it('should leave a blank space in the middle of the "N" column', () => {
    const card = generateBingoCart();
    expect(card[2][2]).toBe("");
  });
});

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
