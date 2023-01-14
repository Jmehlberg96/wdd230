const options = {year: 'numeric'};

document.querySelector('#year').innerHTML = new Date().toLocaleDateString('en-US', options);
document.getElementById('last-update').textContent = document.lastModified