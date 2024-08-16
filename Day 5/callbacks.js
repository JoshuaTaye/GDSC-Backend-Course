 const isCold = false
 const isBusy = false

 function canGoSwimming(callback, errorCallback){
    if (isCold){
        errorCallback({
            name:"Too Cold to swim",
            message:"No"
        })
    } else if (isBusy){
        errorCallback({
            name: "Too Busy to swim",
            message: "No"
        })
    } else{
        callback("Yes")
    }
 }

 // canGoSwimming((message) =>{
 //     console.log("Success " + message );
 // }, (error) =>{
 //     console.log(error.name + " " + error.message)
 // })


 function doSomethingAsync(callback) {
     setTimeout(() => {
         console.log("Operation complete");
         callback();
     }, 1000);
 }

 doSomethingAsync(() => {
     console.log("Callback executed");
 });

console.log("Doing Something else")

