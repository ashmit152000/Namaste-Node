import  THREAD_POOL_SIZE  from "./config.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import crypto from "crypto";
const __fileName = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__fileName);

// fs.readFile(path.join(__dirname, "../EP-09/gossip.txt"), "utf8", (err, data) => {
//     console.log("File reading CB");
// });
// The console.log of the first four calls will be done simultaneously
// But the console.log of the fifth call to eight will take place in the next cycle and the calls after that in the next cycle and so forth. Operations more than 4 will happen only when there are threads available out of the 4. These operations will happen in the batched of 4. (For similar kind of operations).

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, derivedKey) => {
    console.log("1 - crypto pbkdf2 done");
}); 

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, derivedKey) => {
    console.log("2 - crypto pbkdf2 done");
});

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, derivedKey) => {
    console.log("3 - crypto pbkdf2 done");
});

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, derivedKey) => {
    console.log("4 - crypto pbkdf2 done");
});

// The console.log of 5 to 8 in the next batch of 4
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, derivedKey) => {
    console.log("5 - crypto pbkdf2 done");
});
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, derivedKey) => {
    console.log("6 - crypto pbkdf2 done");
});

crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, derivedKey) => {
    console.log("7 - crypto pbkdf2 done");
});
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, derivedKey) => {
    console.log("8 - crypto pbkdf2 done");
});

// The console.log of 9 and 10 in the next batch of 4
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, derivedKey) => {
    console.log("9 - crypto pbkdf2 done");
});
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, derivedKey) => {
    console.log("10 - crypto pbkdf2 done");
});
