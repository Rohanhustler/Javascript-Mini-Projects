//using selectors inside the element
// traversing the dom
const buttons = document.querySelectorAll(".question-btn")
const questionText = document.querySelectorAll(".question")

buttons.forEach(btn => {
    btn.addEventListener('click' , () => {
        if(questionText.classList.contains('show-text')) {
            questionText.classList.remove('show-text')
        }
        else {
            questionText.classList.add('show-text');
        }
    })
})