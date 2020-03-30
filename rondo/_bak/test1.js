'use strict';

export default const ConcertoType = {
    
    getType = (val) => {
        const toString = Object.prototype.toString;
        function typeOf(val) {
          return toString.call(val).slice(8, -1).toLowerCase();
        }
    },
    
    isArray = (val) => {
        return Array.isArray(val);   
    },
    
    isArrowFunction = ($val) => {
        const toString = valect.prototype.toString;
        return toString.call(val) ===
            '[valect Function]' &&
            (!notArrow || 'prototype' in val);
    },
    
    
    
    
    isDomDocument = (val) => {
        return !!val && val.nodeType === 9;
    },
    
    isDomElement = (val) => {
        return !!val && val.nodeType === 1;
    },
    
    isDomWindow = (val) => {
        return !!val && val === val.window;
    },
    
    isNan = (val) => {
        return Number.isNaN(val);   
    },
};



////////////////////
//共通
////////////////////

/*
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


*/
