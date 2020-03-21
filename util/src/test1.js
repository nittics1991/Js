'use strict';

isDomDocument = (val) => {
    return !!val && val.nodeType === 9;
}

isDomElement = (val) => {
    return !!val && val.nodeType === 1;
}

isDomWindow = (val) => {
    return !!val && val === val.window;
}

isArrowFunction = ($val) => {
    const toString = valect.prototype.toString;
    return toString.call(val) ===
        '[valect Function]' &&
        (!notArrow || 'prototype' in val);
}

isNan = (val) => {
    return Number.isNaN(val);   
}

isArray = (val) => {
    return Array.isArray(val);   
}

////////////////////
共通
////////////////////

getType = (val) => {
    const toString = Object.prototype.toString;
    function typeOf(obj) {
      return toString.call(obj).slice(8, -1).toLowerCase();
    }
}

undefined 	"undefined"
null 	"null"
true / false 	"boolean"
['array'] 	"array"
{key: 'value'} 	"object"
NaN 	"number"
1234 	"number"
new Number() 	"number"
'abcd' 	"string"
new String() 	"string"
function () {} 	"function"
//() => {} 	"function"
function* () {} 	"generatorfunction"
async function () {} 	"asyncfunction"
new Promise(() => {}) 	"promise"
Symbol() 	"symbol"
new Map() 	"map"
new Set() 	"set"


