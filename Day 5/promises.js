let p = new Promise((resolve, reject) => {
    let x = 1 + 1;
    if (x === 2) {
        resolve("Success, the value is " + x);
    } else {
        reject("Error occured");
    }
});

// console.log("test")

p.then((message) => {
    console.log("succ " + message);
}).catch((message) => {
    console.log("fail" + message);
})