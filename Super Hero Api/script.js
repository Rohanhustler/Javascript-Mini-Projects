const superHeroToken = 737374557989198
const input = document.querySelector(".input");
const searchBtn = document.getElementById("btn");
const heroImageDiv = document.getElementById("heroImage");
const randomHeroBtn = document.getElementById("randomBtn")

const Url = `https://superheroapi.com/api.php/${superHeroToken}`;


// random hero
const getSuperHero =  (id) => {
    fetch(`${Url}/${id}`)
    .then(heroData => heroData.json())
    .then(json => {
        const data = json;
        console.log(data.powerstats);
        showHeroInfo(data);
    })
}

const statToEmoji = {
    intelligence: '🧠',
    strength: '💪',
    speed: '⚡',
    durability: '🏋️‍♂️',
    power: '📊',
    combat: '⚔️',
}

const showHeroInfo = (character) => {
    const name = `<h1>${character.name}</h1>`
  
    const img = `<img src="${character.image.url}" height=300 width=400/>`
    
    const stats = Object.keys(character.powerstats).map(stat => {
      return `<p>${statToEmoji[stat]} ${stat.toUpperCase()}: ${character.powerstats[stat]}</p>`
    }).join('') 
    // object.keys(character.powerstats) ==> keys ko array ke andar convert kar deta
    
    heroImageDiv.innerHTML = `${name}${img}${stats}`
}
function randomId() {
    // total number of ids is 
    let num = Math.floor(Math.random()*732) + 1;
    return num;
}


randomHeroBtn.onclick = () => {
    getSuperHero(randomId());
}

searchBtn.onclick = () => getSearchedhero(input.value)

// search heroes
const getSearchedhero = async (name) => {
    const nameData = await fetch(`${Url}/search/${name}`)
    const data = await nameData.json();
    console.log(data.results[0]);
    showHeroInfo(data.results[0]);
}