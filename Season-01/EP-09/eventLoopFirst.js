// All of them are examples to understand the event loop and their execution order. Notes about it in the copy
process.nextTick(cb); // To be executed first in the process.nextTick phase of the event loop
Promise.resolve(cb); // To be executed second in the promise callbacks phase of the event loop
setTimeout(cb, 0); // This is executed third in the timer phase of the event loop
setImmediate(cb); // This is executed at the last in the check phase of the event loop
// The two I/O operations are executed next in the poll phase
fstat.readFile("./file.txt", cb); 
https.get("https://dummyjson.com/products/1", cb);

// Note: Between every phase, the internal phase is executed once. Internal phase is the process.nextTick and the promise callbacks phase. 

// At the last close phase is executed. Since there is no code here to be executed in the close phase it again starts it's process from the internal phase and goes on.