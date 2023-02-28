const player = document.querySelector(".player");
const video = document.querySelector(".viewer");
const progress = document.querySelector(".progress");
const progressFilled = document.querySelector(".progress_filled");
const toggle = document.querySelector(".toggle");
const skip = document.querySelectorAll("[data-skip]")
const slideRange = document.querySelectorAll(".player__slider");


function togglePlay() {
    if(video.paused) {
        video.play();
        toggle.textContent = '>>';
    }
    else {
        video.pause();
        toggle.textContent = "►"
    }
}

function skipVideo(e) {
    video.currentTime += parseFloat(this.dataset.skip);
}

function slidingVideo() {
    video[this.name] = this.value;
}

function scrub (e) {
    const scrubTime = (e.offsetX /progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime
}

function handleTimeUpdate() {
    const percent = (video.currentTime/video.duration)*100;
    progressFilled.style.flexBasis = `${percent}%`
}

video.addEventListener("click" , togglePlay);
toggle.addEventListener("click" , togglePlay);
skip.forEach(btn => {
    btn.addEventListener("click" , skipVideo);
})
video.addEventListener("timeUpdate" , handleTimeUpdate);

slideRange.forEach(slide => slide.addEventListener("change" , slidingVideo));
slideRange.forEach(slide => slide.addEventListener("mousemove" , slidingVideo));


let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);