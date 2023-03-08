
//-----------------weather-api---------------//
//select HTML elements in the document
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#figcaption');
const currentTemp = document.getElementById("temperature");
const wind = document.getElementById("#wind-speed");
const chill = document.querySelector("#wind-chill");

async function apiFetch(zip) {
  const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=8052974fdc75183c15540c95265ac39b&units=imperial`;
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // this is for testing the call
      displayResults(data);
      GetWindChill(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}


apiFetch('84770');

function displayResults(weatherData){
  //set current Temp in the DOM
  currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

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

//set wind speed in the DOM
  let wind = `<strong>${weatherData.wind.speed.toFixed(0)}</strong>`;
  document.querySelector("#wind-speed").innerHTML = wind;

}
//-----------------Wind Chill----------------------//
function GetWindChill(windData){
  let temp = `${windData.main.temp.toFixed(0)}`;
  let wind = `${windData.wind.speed.toFixed(0)}`;
  if(temp <= 50 && wind > 3){

        let chill = 35.74 + (0.6215 * temp) - (35.75 * (wind ** 0.16)) + (0.4275 * temp * (wind ** 0.16));
    
        chill = Math.round(chill);
        let text = chill.toString();
        let text2 = "℉";
        let result = text.concat(text2);

        document.querySelector("#wind-chill").textContent = result;
    }
    else{
        document.getElementById("wind-chill").textContent = "N/A";
    }
}

