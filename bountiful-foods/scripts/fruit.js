
    // Get the form and the order summary div
    const orderForm = document.getElementById('order-form');
    const orderSummary = document.getElementById('order-summary');
  
    // Populate the select elements with fruit options from the JSON data source
    async function populateSelectElements() {
      try {
        const response = await fetch('https://brotherblazzard.github.io/canvas-content/fruit.json');
        const data = await response.json();
        const fruits = data;
        const selectElements = document.getElementsByTagName('select');
        for (let i = 0; i < selectElements.length; i++) 
        {
          for (let j = 0; j < fruits.length; j++) 
          {
            const option = document.createElement('option');
            option.text = fruits[j].name;
            option.value = fruits[j].name;
            selectElements[i].add(option);
          }
        }
      } catch (error) 
      {
        console.error(error);
      }
    }
    populateSelectElements();
  
    // Add a submit event listener to the form
    orderForm.addEventListener('submit', function(event) 
    {
      event.preventDefault(); // prevent the form from submitting normally
  
      // Get the input values from the form
      const firstName = document.getElementById('first-name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const fruit1 = document.getElementById('fruit1').value;
      const fruit2 = document.getElementById('fruit2').value;
      const fruit3 = document.getElementById('fruit3').value;
      const specialInstructions = document.getElementById('special-instructions').value;
  
      // Calculate the total amount of carbohydrates, protein, fat, sugar, and calories
      async function populateSummary() {
        try {
            const response = await fetch('https://brotherblazzard.github.io/canvas-content/fruit.json');
            const data = await response.json();
            console.log(response);
            let totalCarbs = 0;
            let totalProtein = 0;
            let totalFat = 0;
            let totalSugar = 0;
            let totalCalories = 0;
            const fruits = data;
            for (let i = 0; i < fruits.length; i++) 
            {
                if (fruits[i].name === fruit1 || fruits[i].name === fruit2 || fruits[i].name === fruit3) 
                {
                totalCarbs += fruits[i].nutritions.carbohydrates;
                totalProtein += fruits[i].nutritions.protein;
                totalFat += fruits[i].nutritions.fat;
                totalSugar += fruits[i].nutritions.sugar;
                totalCalories += fruits[i].nutritions.calories;
                }
            }
            const orderSummary = document.getElementById('order-summary');
      
            // Create the order summary message
            let orderSummaryMessage = '<p><strong>Name: </strong> ' + firstName + '</p>' +
                                      '<p><strong>Email: </strong> ' + email + '</p>' +
                                      '<p><strong>Phone: </strong> ' + phone + '</p>' +
                                      '<p><strong>Fruits: </strong> ' + fruit1 + ', ' + fruit2 + ', ' + fruit3 + '</p>' +
                                      '<p><strong>Special Instructions: </strong> ' + specialInstructions + '</p>' +
                                      '<p><strong>Total Carbs: </strong> ' + totalCarbs.toFixed(2) + 'g</p>' +
                                      '<p><strong>Total Protein: </strong> ' + totalProtein.toFixed(2) + ' g</p>' +
                                      '<p><strong>Total Fat: </strong> ' + totalFat.toFixed(2) + ' g</p>' +
                                      '<p><strong>Total Sugar: </strong> ' + totalSugar.toFixed(2) + ' g</p>' +
                                      '<p><strong>Total Calories: </strong>' + totalCalories.toFixed(2) + '</p>';

                                        orderSummary.innerHTML = orderSummaryMessage;
            } catch (error) 
            {
            console.error(error);
            }
        }populateSummary();
        
        let formCount = localStorage.getItem('formCount') || 0;
        localStorage.setItem('formCount', ++formCount);
    })
    
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

