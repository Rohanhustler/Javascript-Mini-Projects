window.addEventListener("keydown" , (e) => {
    const audio = document.querySelector(`audio[id="${e.key}"]`)
    if(!audio) return;
    audio.currentTime = 0;

    const key = document.querySelector(`.key[id="${e.key}"]`);

    audio.play();
    key.classList.add("playing");
})

window.addEventListener("keyup" , (e) => {
    const key = document.querySelector(`.key[id="${e.key}"]`);
    key.classList.remove("playing");
})

// function removeTransition (e) {

//     if(e.propertyName !== "transform") return;
//     this.classList.remove("playing");
// }

// const keys = document.querySelectorAll(".key");

// keys.forEach(key => key.addEventListener("transitionend" , removeTransition));