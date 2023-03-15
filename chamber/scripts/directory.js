const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".grid");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}

async function getDirectoryData() {
    const response = await fetch('json/data.json');
    const data = await response.json();
    //console.log(data);
    displayDirectory(data.directory);
  }
  
  getDirectoryData();

  const displayDirectory = (directory) => {
    const cards = document.querySelector('div.grid'); // select the output container element
  
    directory.forEach((directory) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let info = document.createElement('div');
      let h3 = document.createElement('h3');
      let logo = document.createElement('img'); 
      let p1 = document.createElement('p');
      let p2 = document.createElement('p');
      let p3 = document.createElement('p');
      let a = document.createElement('a');
      let p4 = document.createElement('p');
      let p5 = document.createElement('p');

      
       // Build the image logo by setting all the relevant attribute
       logo.setAttribute('src', directory.imglink);
       logo.setAttribute('alt', `${directory.company}`);
       logo.setAttribute('loading', 'lazy');
       logo.setAttribute('width', '500');
       logo.setAttribute('height', '200');
       info.setAttribute('class', 'info');
       p1.setAttribute('class','address' );
       p2.setAttribute('class', 'phone');
       a.setAttribute('href', directory.website);
       p3.setAttribute('class', 'website');
       p5.setAttribute('class', 'membership');
       p4.setAttribute('class', 'email');

      // Build the h2 content out to show the company's full name - finish the template string
      h3.textContent = `${directory.company}`;
      p1.textContent = `${directory.address},${directory.city},${directory.state} ${directory.zip}`;
      p2.textContent = `${directory.phone}`;
      a.textContent = `${directory.website}`;
      p4.textContent = `${directory.email}`;
      p5.textContent = `${directory.membership}`;
  
      // Append the section(card) with the created elements
      card.appendChild(logo);
      info.appendChild(h3);
      info.appendChild(p1);
      info.appendChild(p2);
      info.appendChild(p3);
      p3.appendChild(a);
      info.appendChild(p4);
      info.appendChild(p5);
      cards.appendChild(card);
      card.appendChild(info);
    }) // end of forEach loop
  } // end of function expression
