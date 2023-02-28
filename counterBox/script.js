let boxes = document.querySelectorAll(".box");

const timesClicked = {
    'red' : 0 , 
    'blue' : 0 , 
    'green' : 0
}

boxes.forEach(boxs => {
    boxs.addEventListener('click' , (e) => {
        timesClicked[boxs.value] += 1;
        boxs.innerText = timesClicked[boxs.value];
    })
})

const button = document.querySelector('.btn');

const clearScore = () => {
    timesClicked.red = 0;
    timesClicked.blue = 0;
    timesClicked.green = 0;
    boxes.forEach(boxs => {
        boxs.innerText = '';
    })
}
button.onclick = () => clearScore();