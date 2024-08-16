//callStackDemo
console.log("One");
console.log("Two");

const logThree = () => {
    console.log("Three");
}

const logThreeAndFour = () =>{
    logThree();
    console.log("Four");
}

logThreeAndFour();