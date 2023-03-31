document.querySelector('#year').innerHTML = new Date().toLocaleDateString('en-US', {year: 'numeric'});
document.getElementById('last-update').textContent = document.lastModified

function toggleMenu()
{
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}
const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;