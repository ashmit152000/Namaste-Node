import fs from "fs";
import https from "https";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__filename);
console.log(__dirname);
var a = 1078698;
var b = 20986;

https.get("https://dummyjson.com/product/1", (res) => {
    console.log("Fetched data successfully");
})

setTimeout(() => {
    console.log("setTimeout");
}, 5000);

fs.readFile(path.join(__dirname, "gossip.txt"), "utf8", (err, data) => {
    if (err) {
    console.error("Error reading file:", err);
    return;
}
    console.log("File data: ", data);
});

function multiplyFn(a,b) {
    const result = a * b;
    return result;
}

var c = multiplyFn(a,b);
console.log("Multiplication result is: ", c);