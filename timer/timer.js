const input = document.querySelector("#input");
const time = document.querySelector("#time");
const startBtn = document.querySelector("#start-btn");
const reloadBtn = document.querySelector("#reload-btn");

input.addEventListener("keyup", ()=> {
    time.textContent = `${input.value}:00`;
    if(input.value < 10) {
        time.textContent = `0${input.value}:00`;
    }

    if(isNaN(input.value) || input.value == "") {
        time.textContent = "00:00";
        input.value = "";
    }
});

let timerID;

startBtn.addEventListener("click", ()=> {
    if(input.value > 0) {
        startBtn.disabled = true;
        input.disabled = true;
        let timer;
        timer = input.value;

        let amountTime = timer*60;
        timerID = setInterval(calculateTime, 1000);
        input.value = "";

        function calculateTime() {
            let minutes = Math.floor(amountTime/60);
            let seconds = amountTime%60;
    
            if(seconds < 10) {
                seconds = "0" + seconds;
            }
    
            if(minutes < 10) {
                minutes = "0" + minutes;
            }
        
            time.textContent = `${minutes}:${seconds}`;
            amountTime--;
        
            if(amountTime < 0) {
                amountTime = 0;
                stopTimer();
            }
        }
    }
});

function stopTimer() {
    clearInterval(timerID);
    document.querySelector("#myAudio").play();
}

reloadBtn.addEventListener("click", () => {
    location.reload();
})










