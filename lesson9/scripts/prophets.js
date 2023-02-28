const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
async function getProphetData(){
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets); //note that we reference the prophet array of the data object given the structure of the json file.
    displayProphets(data.prophets);
}
getProphetData();

const displayProphets = (prophets) => {
    const cards = document.querySelector('div.cards'); // select the output container element
  
    prophets.forEach((prophet) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let p1 = document.createElement('p');
      let p2 = document.createElement('p');
      let p3 = document.createElement('p');
      let p4 = document.createElement('p');
      let portrait = document.createElement('img');

        //change the date string into a new Date object and then subtract them from each other to get the age at death.
    
        const birthDateString = prophet.birthdate;
        const deathDateString = prophet.death;
        
        const birthDate = new Date(birthDateString);
        const deathDate = new Date(deathDateString);
        
        const death = (deathDate.getTime() - birthDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
        let ageAtDeath = Math.floor(death);
        if (prophet.death == null){
            const death = (new Date().getTime() - birthDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
            ageAtDeath = Math.floor(death);
        }
        

      // Build the h2 content out to show the prophet's full name - finish the template string
      h2.textContent = `${prophet.name} ${prophet.lastname}`;
      p1.textContent = `Birth: ${prophet.birthdate}`;
      p2.textContent = `Place: ${prophet.birthplace}`;
      p3.textContent = `Death: ${prophet.death}`;
      p4.textContent = `Age: ${ageAtDeath}`;

      //Iterate through the prophet list and get the order and add the appropriate ending to the number.
      let number = prophet.order + "";
      if (prophet.order >= 4){
        number = prophet.order + "th"
      }
      else if (prophet.order == 3){
        number = prophet.order + "rd"
      }
      else if (prophet.order == 2){
        number = prophet.order + "nd"
      }
      else if (prophet.order == 1){
        number = prophet.order + "st"
      }

      // Build the image portrait by setting all the relevant attribute
      portrait.setAttribute('src', prophet.imageurl);
      portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname} - ${number} Latter-day President`);
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');
  
      // Append the section(card) with the created elements
      card.appendChild(h2);
      card.appendChild(p1);
      card.appendChild(p2);
      card.appendChild(p3);
      card.appendChild(p4);
      card.appendChild(portrait);
      cards.appendChild(card);
    }) // end of forEach loop
  } // end of function expression