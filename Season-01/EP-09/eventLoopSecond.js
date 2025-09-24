import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __fileName = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__fileName);
const a = 100;

setImmediate(() => {
    console.log("setImmediate");
});

fs.readFile(path.join(__dirname, "gossip.txt"), "utf8", (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("File read CB data: ", data);
});

setTimeout(() => {
    console.log("Set Timeout");
}, 0);

function printA() {
    console.log("a = ", a);
}

printA();
console.log("Last line of the file");
