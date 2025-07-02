const waitTime = 5500; // 5.5 seconds in milliseconds
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
}