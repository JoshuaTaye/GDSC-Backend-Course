// Synchronous Blocking
// console.log("Before Delay");
// function delayed(sec){
//     let now;
//     let start = now = Date.now();
//     while (now - start < sec* 1000){
//         now = Date.now();
//     }
// }
// delayed(5);
// console.log("After Delay");

// The event loop with delayed setTimeout
// console.log("Before Delay");
// setTimeout(()=> {
//     console.log("here!")}, 3000);
// console.log("Important Task!!!");
// function delayed(sec){
//     let now;
//     let start = now = Date.now();
//     while (now - start < sec* 1000){
//         now = Date.now();
//     }
// }
// delayed(5);

// The event loop with 0s delayed setTimeout
// console.log("start");
// setTimeout(()=>{
//     console.log("callback");
// },0);
// console.log("End");


// Task queue vs Micro task queue
// console.log("start");
// setTimeout(()=>{
//     console.log("callback");
// },0);
//
// Promise.resolve().then(() =>{
//     console.log("Promise");
// });
//
// console.log("End");


//Call stack can be seen on error messages
// function three(){
//     throw new Error("Oops!");
// }
// function two(){
//     three();
// }
//
// function one(){
//     two();
// }
// one();

//Adding a function to the sck indefinitely shows error:
// function loop(){
//     return loop();
// }
// loop();



