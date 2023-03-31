const options = {year: 'numeric'};
document.querySelector('#year').innerHTML = new Date().toLocaleDateString('en-US', options);
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
