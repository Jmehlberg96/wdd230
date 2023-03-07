
//-----------------weather-api---------------//
//select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

async function apiFetch(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8052974fdc75183c15540c95265ac39b&units=imperial`;
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

apiFetch('Fairbanks');
//apiFetch('Seattle');
//apiFetch('New York');

function displayResults(weatherData){
  currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;

  const capitalizedDesc = desc.split(' ').map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ');

  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', capitalizedDesc);

  captionDesc.textContent = capitalizedDesc;

  const weatherContainer = document.documentElement('figure');
  weatherContainer.appendChild(currentTemp);
  weatherContainer.appendChild(weatherIcon);
  weatherContainer.appendChild(captionDesc);

  document.body.appendChild(weatherContainer);
}

