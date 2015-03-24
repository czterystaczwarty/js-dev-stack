var module1 = require("./module1");

console.log(module1.someFunction(20));
console.log(module1.publicVar);

var arrowFunc = (x) => 1/x;