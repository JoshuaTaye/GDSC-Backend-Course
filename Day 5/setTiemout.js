setTimeout(() => {
    console.log('Executed after 1 second');
}, 1000);

let count = 0;
let intervalId = setInterval(() => {
    count++;
    console.log('Executed every 2 seconds, count:', count);
    if (count === 5) {
        clearInterval(intervalId);
    }
}, 2000);
