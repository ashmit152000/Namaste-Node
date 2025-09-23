// require calls one module into another. Here it is calling index.js in this module/file app.js
// require("./index.js"); 

// CommonJS syntax to import specific functions or variables from a module
// const { calculateSum, varsInSum } = require("./sum.js"); 

import { products, calculateSum  } from "./calculate/index.js"; // ES module syntax to import specific functions or variables from a module
import data from "./data.json" with { type: "json" }; // Importing JSON file  
console.log("Hello, World");
var i = 10;
const a = 20;
const b = 30;

// Throws an error in strict mode ("Reference Error") but not in non-strict mode
//  z = "Hello, World"; 

products(a, b);
calculateSum(a, b);
console.log(JSON.stringify(data));
// calculateSum(a, b);
// const {a: first, b: second} = varsInSum;
// console.log(first, second);
