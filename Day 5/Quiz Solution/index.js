const countDown = document.getElementById("seconds");
const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let second = document.getElementById("InputSecond").value;
    let countDownInterval = setInterval(() => {
        countDown.textContent = second;
        second--;
        if (second < 0){
            countDown.textContent = "Done!";
            clearInterval(countDownInterval);
        }
    }, 1000);
});




