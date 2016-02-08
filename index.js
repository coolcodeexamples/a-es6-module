"use strict";
function NamedFunc() {
    console.log('(ES6) Named Function');
}
exports.NamedFunc = NamedFunc;
function DefaultFunc() {
    console.log('(ES6) Default Function');
}
exports.__esModule = true;
exports["default"] = DefaultFunc;
