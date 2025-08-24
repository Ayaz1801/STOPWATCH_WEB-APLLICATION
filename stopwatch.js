let startTime;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;

const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

function formatTime(ms) {
    let hours = Math.floor(ms / 3600000);
    ms %= 3600000;
    let minutes = Math.floor(ms / 60000);
    ms %= 60000;
    let seconds = Math.floor(ms / 1000);
    let milliseconds = ms % 1000;

    return (
        String(hours).padStart(2, '0') + ':' +
        String(minutes).padStart(2, '0') + ':' +
        String(seconds).padStart(2, '0') // You can add milliseconds if desired: + '.' + String(milliseconds).padStart(3, '0')
    );
}

function startStopwatch() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(updateDisplay, 10); // Update every 10ms for smoother display
        isRunning = true;
    }
}

function stopStopwatch() {
    clearInterval(timerInterval);
    isRunning = false;
}

function resetStopwatch() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    display.textContent = '00:00:00';
    isRunning = false;
}

function updateDisplay() {
    elapsedTime = Date.now() - startTime;
    display.textContent = formatTime(elapsedTime);
}

startBtn.addEventListener('click', startStopwatch);
stopBtn.addEventListener('click', stopStopwatch);
resetBtn.addEventListener('click', resetStopwatch);