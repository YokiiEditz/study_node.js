exports.add = (a, b) => a + b;

exports.sub = (a, b) => {
  return a - b;
};

exports.mul = (a, b) => a * b;
exports.div = (a, b) => a / b;

const path = require("path");
console.log(path.parse(__filename));
