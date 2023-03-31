document.querySelector('#year').innerHTML = new Date().toLocaleDateString('en-US', {year: 'numeric'});
document.getElementById('last-update').textContent = document.lastModified

function toggleMenu()
{
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}
const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;

// Get the form count from localStorage and display it on the home page
var formCount = localStorage.getItem('formCount') || 0;
var formCountElement = document.getElementById('form-count');
formCountElement.textContent = formCount;


//-----------------weather-api---------------//
//select HTML elements in the document
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#figcaption');
const currentTemp = document.getElementById("temperature");
const wind = document.getElementById("wind-speed");
const info = document.querySelector(".weather-info");
const humidity = document.querySelector("#humidity");


async function apiFetch() {
  const url = `https://api.openweathermap.org/data/2.5/weather?zip=92008&appid=8052974fdc75183c15540c95265ac39b&units=imperial`;

  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // this is for testing the call
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch('92008');


function displayResults(weatherData)
{
  //set current Temp in the DOM
  currentTemp.innerHTML = `<strong> ${weatherData.main.temp.toFixed(0)}</strong>`;

  //set icon image and description in variables
  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;

  //capitalize first letter of each word of description
  const capitalizedDesc = desc.split(' ').map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');

  //set attributes of icon image in the DOM
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', capitalizedDesc);

  //set capitalized description in the DOM
  captionDesc.textContent = capitalizedDesc;

  //set humidity
  humidity.innerHTML = `<strong>${weatherData.main.humidity.toFixed(0)} %</strong>`;

  //set wind speed
  wind.innerHTML = `<strong>${weatherData.wind.speed.toFixed(0)}</strong>`;

}

//create a list that includes the days of the week
const daysOfWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
async function getWeatherForecast() {
  const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=33.1581&lon=-117.3506&appid=8052974fdc75183c15540c95265ac39b&units=imperial';

  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);

      // Get the forecast list from the data
      const forecastList = data.list;

      // Loop through the forecast list and populate the HTML with the day of the week and its corresponding temperatures
      for (let i = 0; i < 4; i++) {
        const forecast = forecastList[i * 8]; // Get the forecast for a particular day
        const date = new Date(forecast.dt_txt);
        const dayOfWeek = daysOfWeek[date.getDay()]; // Get the day of the week from the date
      
        // Populate the HTML with the day of the week and its corresponding temperatures
        const dayElement = document.querySelector(`#day${i + 1}`);
        const tempElement = document.querySelector(`#temp${i + 1}`);
        dayElement.textContent = dayOfWeek;
        tempElement.innerHTML = `${forecast.main.temp_min.toFixed(0)}°F / ${forecast.main.temp_max.toFixed(0)}°F`;
      }

    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}
getWeatherForecast();






