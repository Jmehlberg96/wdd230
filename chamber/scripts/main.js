const dateUK = document.querySelector("#date");
const now = new Date();
const day = now.getDay();
const fullDateUK = new Intl.DateTimeFormat("en-UK",{
    dateStyle: "full"}).format(now);
    if (day == 1 || day == 2){
        document.querySelector(".banner-wrapper").style.display = "block";
    }
    else { document.querySelector(".banner-wrapper").style.display = "none";
    
    }

dateUK.innerHTML = `<em>${fullDateUK}</em>`;

const options = {year: 'numeric'};
        document.querySelector('#year').innerHTML = new Date().toLocaleDateString('en-US', options);
        document.getElementById('last-update').textContent = document.lastModified

// navigation button
function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");

}
const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu

document.querySelector(".banner-button").addEventListener('click', function() {
    this.closest(".banner-wrapper").style.display = "none";
});

// number of visits to page 
const todayDisplay = document.querySelector(".today");
const visitsDisplay = document.querySelector(".visits");


let numVisits = Number(window.localStorage.getItem("visits-ls"));

if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `_`;
}
numVisits++;
localStorage.setItem("visits-ls", numVisits);
// because the number of visits modifies the page, I used lastmodified to fix the day since user has been to the page.
var lastTime = new Date(document.lastModified).getTime();
let daysSince = (Date.now() - lastTime) / 84600000;
let rounded = Math.round(daysSince);
todayDisplay.textContent = rounded;



