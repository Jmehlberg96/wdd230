let imagesToLoad = document.querySelectorAll("img[data-src]");

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {image.removeAttribute("data-src");};
};

if('IntersectionObserver' in window)
{
    const observer = new IntersectionObserver((items, observer) =>
    {
        items.forEach((item) => 
        {
            if(item.isIntersecting)
            {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    }, imgOptions);
    imagesToLoad.forEach((img) =>
    {
        observer.observe(img);
    });
}
else{
    imagesToLoad.forEach((img) =>
    {
        loadImages(img);
    });
}

//---------------for the date in the footer-------------
document.querySelector('#year').innerHTML = new Date().toLocaleDateString('en-US', {year: 'numeric'});
document.getElementById('last-update').textContent = document.lastModified

function toggleMenu()
{
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}
const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;
