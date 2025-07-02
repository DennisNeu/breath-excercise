const waitTime = 5500; // 5.5 seconds in milliseconds
circle = document.getElementById('circle');

function start() {
    toggleCircle();
    $('#text').text('Breathe in for 4 seconds');
    setInterval(toggleCircle, waitTime); // Then every 5.5 seconds

}

function toggleCircle() {
    circle.classList.toggle('open');
    circle.classList.contains('open') ? $('#text').text('Breathe in for 5,5 seconds') : $('#text').text('Breathe out for 5,5 seconds');
}