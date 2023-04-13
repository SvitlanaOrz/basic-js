const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    // throw new NotImplementedError("Not implemented");

    if (Array.isArray(arr)) {
      let depth = 1;
      let maxDepth = 0;
      for (let i = 0; i < arr.length; i++) {
        maxDepth = Math.max(maxDepth, this.calculateDepth(arr[i]));
      }
      depth += maxDepth;
      return depth;
    } else {
      return 0;
    }
  }
}

module.exports = {
  DepthCalculator,
};
