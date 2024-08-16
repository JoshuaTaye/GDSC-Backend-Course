// const fs = require("fs/promises");
const http = require("http");
// (async() => {
//     try{
//         const data = await fs.readFile("files.txt", "utf-8")
//         console.log(data)
//     } catch (err){
//         console.log(err)
//     }
// })()

function executeMiddleware(req, res, middlewareStack, index = 0){
    if (index < middlewareStack.length){
        middlewareStack[index](req, res, (err) => {
            if (err) {
                handleErrorMiddleware(err, req, res, middlewareStack, index + 1);
            }
            executeMiddleware(req, res, middlewareStack, index + 1);
        })
    }
}

function handleErrorMiddleware(err, req, res, middlewareStack, index = 0){
    if (index < middlewareStack.length){
        middlewareStack[index](err, req, res, (err) =>{
            handleErrorMiddleware(err, req, res, middlewareStack, index + 1);
        })
    } else {
        res.statusCode = 500;
        res.end("Internal error occurred");
    }
}

function loggingMiddleware(req, res, next) {
    console.log(`${req.method}, ${req.url}`);
    next();
}

function routingMiddleware(req, res, next){
    if(req.url === "/"){
        res.end("Hello world");
    } else if (req.url === "/error"){
        next(new Error("A simulated error occurred"));
    } else {
        res.statusCode = 400
        res.end("Page Not Found");
    }
}

function errorHandlingMiddleware(err, req, res) {
    console.error("Error Occurred " + err.message);
    res.statusCode = 500;
    res.end("Internal Server Error");
}

const middlewareStack = [loggingMiddleware, routingMiddleware, errorHandlingMiddleware];

const server = http.createServer((req, res) => {
    executeMiddleware(req, res, middlewareStack);
});

server.listen(3000, () =>{
    console.log("Server running on port 3000");
})



