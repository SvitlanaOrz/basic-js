const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  throw new NotImplementedError("Not implemented");
  const rows = matrix.length;
  const cols = matrix[0].length;
  const res = [];

  for (let row = 0; row < rows; row++) {
    res.push([]);
    for (let col = 0; col < cols; col++) {
      let count = 0;
      for (let r = row - 1; r <= row + 1; r++) {
        for (let c = col - 1; c <= col + 1; c++) {
          if (
            r >= 0 &&
            r < rows &&
            c >= 0 &&
            c < cols &&
            !(r === row && c === col)
          ) {
            count += matrix[r][c] ? 1 : 0;
          }
        }
      }
      res[row][col] = count;
    }
  }

  return res;
}

module.exports = {
  minesweeper,
};
