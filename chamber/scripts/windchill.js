const temp1 = document.getElementById("temperature");
const wind1 = document.getElementById("wind-speed");

let temp = parseInt(temp1);
let wind = parseInt(wind1);
let chill = 0;
//calculate wind chill
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