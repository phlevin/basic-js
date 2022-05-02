const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let catsStr = matrix.toString();
  let cats = catsStr.split(",");
  return cats.filter(x => x === "^^").length;  // -> 3
}

module.exports = {
  countCats
};

// console.log( countCats([
//     [0, 1, '^^'],
//     [0, '^^', 2],
//     ['^^', 1, 2]
//    ]));