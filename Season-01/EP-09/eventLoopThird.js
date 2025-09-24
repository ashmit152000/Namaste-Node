import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __fileName = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__fileName);

setImmediate(() => console.log("setImmediate"));

Promise.resolve("Promise").then(() => console.log("Promise Resolved"));

const a = 100;
fs.readFile(path.join(__dirname, "gossip.txt"), "utf8", (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("File read CB data: ", data);
});

setTimeout(() => console.log("setTimout"), 0);

process.nextTick(() => console.log("Process Next Tick"));

function printA() {
    console.log("a = ", a);
}

printA();
console.log("The last line of the code");

/* Output:
    1) a = 100
    2) The last line of the code
    3) Process Next Tick
    4) Promise Resolved
    5) setTimout
    6) setImmediate
    7) File read CB data:  Ashmit is learning Node.js

*/