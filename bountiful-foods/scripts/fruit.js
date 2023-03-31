// Wait for the DOM to finish loading
// document.addEventListener('DOMContentLoaded', function() 
// {
    // Get the form and the order summary div
    var orderForm = document.getElementById('order-form');
    var orderSummary = document.getElementById('order-summary');
  
    // Populate the select elements with fruit options from the JSON data source
    async function populateSelectElements() {
      try {
        var response = await fetch('https://brotherblazzard.github.io/canvas-content/fruit.json');
        var data = await response.json();
        var fruits = data;
        var selectElements = document.getElementsByTagName('select');
        for (var i = 0; i < selectElements.length; i++) 
        {
          for (var j = 0; j < fruits.length; j++) 
          {
            var option = document.createElement('option');
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
      var firstName = document.getElementById('first-name').value;
      var email = document.getElementById('email').value;
      var phone = document.getElementById('phone').value;
      var fruit1 = document.getElementById('fruit1').value;
      var fruit2 = document.getElementById('fruit2').value;
      var fruit3 = document.getElementById('fruit3').value;
      var specialInstructions = document.getElementById('special-instructions').value;
  
      // Calculate the total amount of carbohydrates, protein, fat, sugar, and calories
      async function populateSummary() {
        try {
            var response = await fetch('https://brotherblazzard.github.io/canvas-content/fruit.json');
            var data = await response.json();
            var totalCarbs = 0;
            var totalProtein = 0;
            var totalFat = 0;
            var totalSugar = 0;
            var totalCalories = 0;
            var fruits = data;
            for (var i = 0; i < fruits.length; i++) 
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
            var orderSummary = document.getElementById('order-summary');
      
            // Create the order summary message
            var orderSummaryMessage = '<h2>Order Summary</h2>' +
                                        '<p><strong>Name: </strong> ' + firstName + '</p>' +
                                        '<p><strong>Email: </strong> ' + email + '</p>' +
                                        '<p><strong>Phone: </strong> ' + phone + '</p>' +
                                        '<p><strong>Fruits: </strong> ' + fruit1 + ', ' + fruit2 + ', ' + fruit3 + '</p>' +
                                        '<p><strong>Special Instructions: </strong> ' + specialInstructions + '</p>' +
                                        '<p><strong>Total Carbs: </strong> ' + totalCarbs.toFixed(2) + ' g</p>' +
                                        '<p><strong>Total Protein: </strong> ' + totalProtein.toFixed(2) + ' g</p>' +
                                        '<p><strong>Total Fat: </strong> ' + totalFat.toFixed(2) + ' g</p>' +
                                        '<p><strong>Total Sugar: </strong> ' + totalSugar.toFixed(2) + ' g</p>' +
                                        '<p><strong>Total Calories: </strong>' + totalCalories.toFixed(2) + ' g</p>';

                                        orderSummary.innerHTML = orderSummaryMessage;
            } catch (error) 
            {
            console.error(error);
            }
        }populateSummary();
        
        var formCount = localStorage.getItem('formCount') || 0;
        localStorage.setItem('formCount', ++formCount);
    })
    
// })  