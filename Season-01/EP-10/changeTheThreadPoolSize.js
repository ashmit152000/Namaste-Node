import  THREAD_POOL_SIZE  from "./config.js"; // Thread pool size using import
import crypto from "crypto";
// process.env.UV_THREADPOOL_SIZE = 2; // This is the way to change the thread pool size. Maximum value is 128
// // To set this batch size to 2 you will have to import the file in another file.

// Here the output will come in the batches of 2
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


crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, derivedKey) => {
    console.log("9 - crypto pbkdf2 done");
});
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, derivedKey) => {
    console.log("10 - crypto pbkdf2 done");
});