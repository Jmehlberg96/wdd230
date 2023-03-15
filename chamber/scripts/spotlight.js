async function getDirectoryData() {
    const response = await fetch('json/data.json');
    const data = await response.json();
    //console.log(data);
    displaySpotlight(data.directory);
}
  
getDirectoryData();

const spotlight = document.querySelector(".spotlight"); // output container element
  const displaySpotlight = (directory) =>{

    // Filter the items with membership value as 'gold'
    const goldItems = directory.filter(item => item.membership === "Gold");
    
    // Shuffle the array randomly
    const shuffledItems = goldItems.sort(() => 0.5 - Math.random());

    // Select the first 3 items from the shuffled array
    const selectedItems = shuffledItems.slice(0, 3);


    selectedItems.forEach((directory) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('div');
      let h2 = document.createElement('h2');
      let logo = document.createElement('img'); 
      let p1 = document.createElement('p');
      let p2 = document.createElement('p');
      let hr = document.createElement('hr');
      let p3 = document.createElement('p');
      let a = document.createElement('a');

      // Build the image logo by setting all the relevant attribute
       logo.setAttribute('src', directory.spotImg);
       logo.setAttribute('alt', `${directory.company}`);
       logo.setAttribute('loading', 'lazy');
       logo.setAttribute('width', '350');
       logo.setAttribute('height', '150');
       p1.setAttribute('class', 'motto');
       p2.setAttribute('class', 'phone');
       a.setAttribute('href', directory.website);
       p3.setAttribute('class', 'website');
       h2.setAttribute('class','company');
       card.setAttribute('class', 'small-card');

       // Build the h2 content out to show the company's full name - finish the template string
      h2.textContent = `${directory.company}`;
      p1.textContent = `${directory.motto}`;
      p2.textContent = `${directory.phone}`;
      a.textContent = `${directory.website}`;

      // Append the section(card) with the created elements
      card.appendChild(logo);
      card.appendChild(h2);
      card.appendChild(p1);
      card.appendChild(p2);
      card.appendChild(p3);
      p3.appendChild(a);
      spotlight.appendChild(card);
      card.appendChild(hr);
  })
}