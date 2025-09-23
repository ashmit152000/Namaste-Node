import crypto from "crypto";

// pbkdf2 - Password based key derivative function
// Async function
crypto.pbkdf2("password", "salt", 10000000, 64, "sha512", (err, derivedKey) => {
    console.log("From async");
    console.log(derivedKey.toString("hex"));
})

// Sync functions - These block the main thread therefore, don't use them.
const keyFromSync = crypto.pbkdf2Sync("password", "salt", 100000000, 64, "sha512");

console.log(keyFromSync.toString("hex"));

var a = 1000;
var b = 9875;
function multiplyFn(a,b) {
    const result = a * b;
    return result;
}

var c = multiplyFn(a,b);
console.log("Multiplication result is: ", c);