let count = 0;
const btn = document.querySelectorAll('.btn');
const value = document.getElementById('value');
btn.forEach(btns => btns.addEventListener('click' , (e) => {
    const jalwa = e.target.classList;
    if(jalwa.contains('increase')) {
        count++;
    }
    else if(jalwa.contains('reset')) {
        count = 0;
    }
    else if (jalwa.contains('decrease')) {
        count --;
    }
    value.innerText = count;
    if(count < 0) {
        value.style.color = 'red';
    }
    else if (count == 0) {
        value.style.color = 'black';
    }
    else {
        value.style.color = 'green';
    }
}))