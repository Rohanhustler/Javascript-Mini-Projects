const searchInput = document.querySelector(".input");

const searchBtn = document.querySelector(".searchBar");

const destination = document.getElementById("destination");

const temp = document.getElementById("temp");

const humidity = document.getElementById("humidity");

const maxTemp = document.getElementById("max-temp");

const windSpeed = document.getElementById("wind-speed");

const getCityTemp = (name) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '36786dfbccmshc96fe06edb8d8b7p1bb76fjsnbf2b2a326fa2',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    
    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${name}`, options)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            showWeatherinfo(json);
        })
        .catch(err => console.error(err));
}

const showWeatherinfo = (weatherData) => {
    destination.innerText = `Weather in ${searchInput.value}`
    temp.innerText = `${weatherData.temp}°c`;
    humidity.innerText = `Humidity : ${weatherData.humidity}`
    maxTemp.innerText = `Maximun Temprature : ${weatherData.max_temp}`;
    windSpeed.innerText = `Wind speed : ${weatherData.wind_speed}`;

}
searchBtn.onclick = () => getCityTemp(searchInput.value);