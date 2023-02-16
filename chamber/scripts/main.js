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

function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");

}
const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu

document.querySelector(".banner-button").addEventListener('click', function() {
    this.closest(".banner-wrapper").style.display = "none";
});

// initialize display elements
const todayDisplay = document.querySelector(".today");
const visitsDisplay = document.querySelector(".visits");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `_`;
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);
// show todays date.

let d = new Date();
let lastTime = d.setTime(Date.now());
let daysSince = (lastTime - Date.now()) / 84600000;

todayDisplay.textContent = daysSince;

// You can view the localStorage data using the Applications panel in the browsers's DevTools.
