var jQuery, $;
// private binding - this module only
jQuery = $ = require("jquery");
// global binding form dev tools
window.jQuery = window.$ = jQuery;

var module1 = require("./module1");

console.log(module1.someFunction(20));
console.log(module1.publicVar);

var arrowFunc = (x) => 1/x;