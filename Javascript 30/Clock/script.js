const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
    const date = new Date();
    const seconds = date.getSeconds();
    const handSecondDegree = ((seconds/60)*360) + 90;
    secondHand.style.transform = `rotate(${handSecondDegree}deg)`

    const min = date.getMinutes();
    const minHandDegee = ((min/60)*360) + 90;
    minHand.style.transform = `rotate(${minHandDegee}deg)`

    const hour = date.getMinutes();
    const hoursDegree = ((hour/12)*360) + 90;
    hourHand.style.transform = `rotate(${hoursDegree}deg)`

}
setInterval(setDate , 1000);

