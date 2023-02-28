const imageDiv = document.getElementById("image");
const btn = document.getElementById("btn");

const getNewDog = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(json => {
        imageDiv.innerHTML = `<img src='${json.message}' height=300 width=300/>`
      })
  }
getNewDog();
btn.onclick = () => getNewDog();