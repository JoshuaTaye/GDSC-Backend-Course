const fs = require("fs");
const path = require("path");
////readFile Synchronous
// const file = fs.readFileSync('./files/newTest.txt', "utf-8");
// console.log(file);

////readFile Callbacks
// fs.readFile("./files/newTest.txt", "utf-8", (err, data) => {
//     if (err) throw err;
//     console.log(data)
// });

////readFile Promise async
// (async () => {
//     try{
//         const data = await fs.readFile("./files/newTest.txt", "utf-8");
//         console.log(data);
//     } catch (err) {
//         console.log(err)
//     }
// })();

//writeFile Callback
// fs.writeFile("./files/test.txt", "new", (err) =>{
//     if (err) console.log(err);
// });fs.writeFile("./files/test.txt", "new", (err) =>{
//     if (err) console.log(err);
// });

//writeFileSync
// try {
//     fs.writeFileSync("./files/test.txt", "new");
// }catch (err){
//     console.log(err)
// }

//writeFiles Async
// (async () => {
//     try{
//         await fs.writeFile("./files/text.txt", "new data");
//     } catch (err){
//         console.log(err)
//     }
// })();

//writeFile Promise
// (() => {
//     fs.writeFile("files/test.txt", "new Data")
//         .then(() => console.log("write Successful"))
//         .catch((err) => console.log(err))
// })()


// Using fs.open() to read from and write to a file
// fs.open(path.join(__dirname, "files", "newTest.txt"), "r"
//     , (err, fd) => {
//     if (err) console.log(err);
//     fs.stat("./files/newTest.txt", (err, stats) => {
//         const size = stats.size;
//         const buf = Buffer.alloc(size);
//         fs.read(fd, buf, 0, size, 0, (err, bytesRead, buffer) => {
//             if (err) console.log(err)
//             console.log(buffer.toString());
//         });
//     });
// });


// Creating a directory
// fs.mkdir('./files/newDir', {recursive: true}, (err) =>{
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log("Dir created Successfully")
// })


//reading a directory
// fs.readdir("./files", (err, files) => {
//     if (err){
//         console.log(err);
//     }
//     console.log(files)
// });


 //removing a directory
// fs.rmdir('./files/newDir', (err) => {
//     if (err) {
//         console.error('Error removing directory:', err);
//         return;
//     }
//     console.log('Directory removed successfully');
// });

//watching changes
// fs.watch('./files', (eventType, filename) => {
//     if (filename) {
//         console.log(`File ${filename} changed. Event type: ${eventType}`);
//     }
// });


//streams

//readStream
// const readStream = fs.createReadStream('files/dummyTxt.txt', {encoding:'utf8', highWaterMark: 100});
// readStream.on('data', (chunk) => {
//     console.log('Read chunk:', chunk);
//     console.log("break")
// });
// readStream.on('end', () => {
//     console.log('Finished reading file');
// });
// readStream.on('error', (err) => {
//     console.error('Error reading file:', err);
// });


//writeStream
// const writableStream = fs.createWriteStream('./files/test.txt');
//
// writableStream.write('Hello, World!\n');
// writableStream.write('Writing more data...\n');
//
// writableStream.end();
//
// writableStream.on('finish', () => {
//     console.log('All data written.');
// });
// writableStream.on('error', (err) => {
//     console.error('An error occurred:', err);
// });

//piping
// const readStream = fs.createReadStream("./files/lorem.txt");
// const writeStream = fs.createWriteStream("./files/newTest.txt");
//
// readStream.pipe(writeStream);
// writeStream.on("finish", () =>{
//     console.log("Done");
// });

