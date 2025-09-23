// check.js
console.log("Module type:", typeof require === "undefined" ? "ESM" : "CommonJS");
console.log("Current file extension:", import.meta.url);
