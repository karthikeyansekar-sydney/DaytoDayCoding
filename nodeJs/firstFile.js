let hello = "Hello World From node js";
console.log(hello);

console.log(__dirname);
console.log(__filename);

console.log("Hello World");
const path = require("path"); //here we are loading external module
console.log(`The file name is ${path.basename(__filename)}`);


