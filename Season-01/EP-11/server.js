import http from "http";

// The createServer method returns you back with an instance of a http server
const server = http.createServer((req, res) => {
    // Reply to all the user with Hello, World
    if(req.url === "/get-secret-data") {
        res.end("There is no secret data");
        return;
    }
    res.end("Hello, World!"); // Sending the data back to the user
});

server.listen(3001, () => {
    console.log("Server is listening on port 3001");
});