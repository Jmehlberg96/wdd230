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

var lastTime = new Date(document.lastModified).getTime();
let daysSince = (Date.now() - lastTime) / 84600000;
let rounded = Math.round(daysSince);
todayDisplay.textContent = rounded;

function showDetails() {
    var npDetails = document.getElementById("np-details");
    var bronzeDetails = document.getElementById("bronze-details")
    var silverDetails = document.getElementById("silver-details")
    var goldDetails = document.getElementById("gold-details")
   if (document.getElementById("show-np").checked) {
        npDetails.style.display = "block";
    } else {
        npDetails.style.display = "none";
    }
    if (document.getElementById("show-bronze").checked){
        bronzeDetails.style.display = "block";
    } else{
        bronzeDetails.style.display = "none";    }
    if (document.getElementById("show-silver").checked){
        silverDetails.style.display = "block";
    } else{
        silverDetails.style.display = "none";    }
    if (document.getElementById("show-gold").checked){
        goldDetails.style.display = "block";
    } else{
        goldDetails.style.display = "none";    }
}

document.getElementById("load_time").textContent = new Date().toISOString();

