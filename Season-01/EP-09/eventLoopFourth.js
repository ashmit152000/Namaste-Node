import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __fileName = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__fileName);

setImmediate(() => console.log("setImmediate"));
setTimeout(() => console.log("setTimout"), 0);
Promise.resolve("Promise resolved").then(console.log);

fs.readFile(path.join(__dirname, "gossip.txt"), "utf8", (err, data) => {
    setTimeout(() => console.log("2nd timer"), 0);
    process.nextTick(() => console.log("2nd process.nextTick"));
    setImmediate(() => console.log("2nd setImmediate"));
    console.log("File Reading CB");
});

process.nextTick(() => console.log("nextTick"));

console.log("The last line of the code");

/* Output
1) The last line of the code
2) nextTick
3) Promise resolved
4) setTimeout
5) setImmediate
6) File Reading CB
7) 2nd process.nextTick
Here there is a decrepency in the execution order of the set Immediate and setTimeout because when the file reading is completed the event loop was waiting in the "poll" phase when this phase completed it will go to the "check" phase where the setImmediate will be already waiting before the execution of setTimout in the "timer" phase.
8) 2nd setImmediate
9) 2nd timer


*/

