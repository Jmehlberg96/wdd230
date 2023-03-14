async function getStaffData() {
    const response = await fetch('json/staff.json');
    const data = await response.json();
    console.log(data);
    displayStaff(data.staff);
  }
  
  getStaffData();

  const displayStaff = (staff) => {
    const cards = document.querySelector('div.grid'); // select the output container element
  
    staff.forEach((staff) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let info = document.createElement('div');
      let h3 = document.createElement('h3');
      let headshot = document.createElement('img'); 
      let p1 = document.createElement('p');
      let p2 = document.createElement('p');
      let p3 = document.createElement('p');

      
       // Build the image logo by setting all the relevant attribute
       headshot.setAttribute('src', staff.imglink);
       headshot.setAttribute('alt', `${staff.name}`);
       headshot.setAttribute('loading', 'lazy');
       headshot.setAttribute('width', '300');
       headshot.setAttribute('height', '300');
       info.setAttribute('class', 'info');
       p1.setAttribute('class','title' );
       p2.setAttribute('class', 'phone');
       p3.setAttribute('class', 'email');

      // Build the h2 content out to show the prophet's full name - finish the template string
      h3.textContent = `${staff.name}`;
      p1.textContent = `${staff.title}`;
      p2.textContent = `${staff.phone}`;
      p3.textContent = `${staff.email}`;
  
      // Append the section(card) with the created elements
      card.appendChild(headshot);
      info.appendChild(h3);
      info.appendChild(p1);
      info.appendChild(p2);
      info.appendChild(p3);
      cards.appendChild(card);
      card.appendChild(info);
    }) // end of forEach loop
  } // end of function expression
