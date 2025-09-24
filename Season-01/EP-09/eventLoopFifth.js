import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __fileName = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__fileName);

setImmediate(() => console.log("setImmediate"));
setTimeout(() => console.log("setTimout"), 0);
process.nextTick(() => {
    process.nextTick(() => {
        console.log("inner next tick");
    });

    console.log("next tick");
});

Promise.resolve("Promise resolved").then(console.log);

fs.readFile(path.join(__dirname, "gossip.txt"), "utf8", (err, data) => {
    console.log("File reading CB");
});



console.log("The last line of the code");

/*  Output
The last line of the code
next tick
inner next tick
Promise resolved
setTimout
setImmediate
File reading CB

*/
