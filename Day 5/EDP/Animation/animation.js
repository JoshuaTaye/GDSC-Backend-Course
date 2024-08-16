const box = document.getElementById('box');
let position = 0;
const speed = 10;
function moveBox() {
    position += speed;
    box.style.left = position + 'px';
    if (position > window.innerWidth) {
        position = -box.offsetWidth;
    }
}
const intervalId = setInterval(moveBox, 100);
setTimeout(() => {
    clearInterval(intervalId);
}, 10000);
