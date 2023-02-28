const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const randomNumber = () => {
    return Math.floor(Math.random()*colors.length);
} 

const color = document.querySelector('.color');
const btn = document.getElementById('btn');

btn.addEventListener('click' , () => {
    const randomNum = randomNumber();
    document.body.style.backgroundColor = colors[randomNum];
    color.innerText = colors[randomNum];
})