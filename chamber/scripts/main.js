const dateUK = document.querySelector("#date");
const now = new Date();
const fullDateUK = new Intl.DateTimeFormat("en-UK",{
    dateStyle: "full"}).format(now);

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