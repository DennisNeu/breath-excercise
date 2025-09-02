const waitTime = 5500; // 5.5 seconds in milliseconds
const inhale = document.getElementById('inhale');
const exhale = document.getElementById('exhale');

circle = document.getElementById('circle');
isStarted = false;

function start() {
    if (isStarted) {
        return; // Prevent starting again if already started
    }
    toggleCircle();
    setInterval(toggleCircle, waitTime); // Then every 5.5 seconds
    isStarted = true;

}

function toggleCircle() {
    circle.classList.toggle('open');
    circle.classList.contains('open') ? circle.innerHTML = "in" : circle.innerHTML = "out";

    if (circle.classList.contains('open')) {
        inhale.play();
    } else {
        exhale.play();
    }
}