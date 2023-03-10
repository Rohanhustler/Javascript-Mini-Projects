let timer = document.getElementById("stopwatch")
let sec = 0;
let min = 0;
let hr = 0;

let stopTime = true;

const startTimer = () => {
    if(stopTime == true) stopTime = false;
    cycle();
}

const stopTimer = () => {
    if(stopTime == false)
    stopTime = true;
}

const resetTimer = () => {
    stopTime == true;
    timer.innerHTML = "00:00:00"
    min = 0;
    hr = 0;
    sec = 0;
}

const cycle = () => {
    if(stopTime == false) {

        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);
    
        sec = sec + 1;
        if(sec == 60) {
            min = min + 1;
            sec = 0;
        }
        
        if(min == 60) {
            hr = hr + 1;
            min = 0;
            sec = 0;
        }
    
        if(sec < 10) {
            sec = "0" + sec;
        }
    
        if(min < 10) {
            min = "0" + min;
        }
    
        if(hr < 10) {
            hr = "0" + hr;
        }

        timer.innerHTML = hr + ":" + min + ":" + sec;
    
        setTimeout("cycle()" , 1000);
    }
}


