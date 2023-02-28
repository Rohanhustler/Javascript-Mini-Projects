const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

const getRandomNum = () => {
    return Math.floor(Math.random()*hex.length);
}

btn.addEventListener('click' ,() => {
    let count = "#";
    for(let i = 0; i < 6; i++) {
        count = count + hex[getRandomNum()];
    }
    document.body.style.backgroundColor = count;
    color.textContent = count;
})