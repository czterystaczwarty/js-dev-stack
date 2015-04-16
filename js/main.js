var jQuery, $;
// npm module
// private binding - this module only
jQuery = $ = require("jquery");
// global binding form dev tools
window.jQuery = window.$ = jQuery;

// Bower module
var lodash = require("../bower_components/lodash/lodash");
var _ = lodash;

var module1 = require("./module1");

// ES6 feature - see result in bundle.js
var arrowFunc = (x) => 1/x;

// lodash usage
var arrayDiff = _.difference([1, 2, 3], [4, 2]);
console.log("arrayDiff:", arrayDiff);

console.log("public function from module1", module1.someFunction(20));
console.log("public var from module1", module1.publicVar);
