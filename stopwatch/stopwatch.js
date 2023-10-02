const stopwatch = document.querySelector("#stopwatch");
const startBtn = document.querySelector("#startBtn");
const pausetBtn = document.querySelector("#pauseBtn");
const reloadBtn = document.querySelector("#reloadBtn");

let sec = 0;
let min = 0;
let hour = 0;

let timerID;

startBtn.addEventListener("click", ()=> {
    startBtn.disabled = true;
    timerID = setInterval(start, 1000);
});

function start() {
    document.querySelector("#myAudio").play();
    sec++;
    if(sec >= 60) {
        min++;
        sec = sec - 60;
    }

    if(min >= 60) {
        h++;
        min= min - 60;
    }

    let s =  sec < 10 ? "0" + sec : sec;
    let m = min < 10 ? "0" + min : min;
    let h = hour < 10 ? "0" + hour : hour;

    stopwatch.textContent = `${h}:${m}:${s}`;
}

pausetBtn.addEventListener("click", ()=> {
    startBtn.disabled = false;
    clearInterval(timerID)
    document.querySelector("#myAudio").pause();
})

reloadBtn.addEventListener("click", ()=> {
    location.reload();
})