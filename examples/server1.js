console.log("hello");

const path = require("path");
const math = require("./math1");

// console.log(add(1, 2));
// console.log(sub(10, 2));
// console.log(mul(10, 2));
// console.log(div(30, 2));

// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());

// console.log(__dirname);
// console.log(__filename);
// console.log("-------------");
console.log(path.parse(__filename));
