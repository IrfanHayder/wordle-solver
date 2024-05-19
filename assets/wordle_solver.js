let container = document.getElementById('inputFields');
  let blackcontainer = document.getElementById('blackinputs');
  let yellowcontainer = document.getElementById('yellowinput');
  let buttons_div = document.getElementById('buttons_div');
  var solve = document.getElementById('solve');
  var reset = document.getElementById('reset');
  const enter = document.getElementById('enter');
  const yellowWord = document.getElementById('yellowWord');

  
  //reset page
reset.addEventListener('click', function() {
    location.reload();
});








// Variable to store the value corresponding to the button clicked
let selectedValue = 5; // Set default value to 5

// Variable to keep track of the highest button clicked
let highestClicked = 5;

// Variable to store filtered words based on selected length
 let limit_words = [];

// Loop to create buttons for selecting word lengths
    for (let i = 5; i <= 11; i++) {
        // Create a new button element
        let button = document.createElement('button');

        // Set attributes for the button element
        button.type = 'button'; // Set type to 'button'
        button.className = 'inputField';
        button.value = i;
        button.id = 'button_' + i;
        // Set the button text to display the value
        button.textContent = i;

        buttons_div.appendChild(button);

        buttons_div.appendChild(document.createElement('br'));

        button.addEventListener('click', function() {
            selectedValue = i;

            // Get the corresponding input fields
            for (let j = 5; j <= i; j++) {
                let inputField = document.getElementById('value_' + j);
                let inputyellow = document.getElementById('inputyellow' + j);
                if (inputField || inputyellow) {
                    // Toggle the display property
                    inputField.style.display = 'inline-block';
                    inputyellow.style.display = 'inline-block';
                }
            }

            // Hide input fields beyond the highest button clicked
            for (let k = i + 1; k <= highestClicked; k++) {
                let inputField = document.getElementById('value_' + k);  
                let inputyellow = document.getElementById('inputyellow' + k);
                if (inputField  || inputyellow) {
                    // Toggle the display property
                    inputField.style.display = 'none';
                    inputyellow.style.display = 'none';
                }
            }

                // Toggle the button_color class on the clicked button
                button.classList.toggle('button_color');

                // Remove the button_color class from all other buttons if they have it
                let buttons = document.getElementsByClassName('inputField');
                for (let i = 0; i < buttons.length; i++) {
                    if (buttons[i] !== button && buttons[i].classList.contains('button_color')) {
                        buttons[i].classList.remove('button_color');
                    }
                }



            // Filter words according to the selected limit (5, 6, 7, ...)
            limit_words = words.filter(word => word.length === selectedValue);
            // Update the highest button clicked
            highestClicked = i;;
        });
    }

// Display input fields for words of length 5 by default
for (let j = 5; j <= 11; j++) {
    let inputField = document.getElementById('value_' + j);
    if (inputField) {
        // Toggle the display property
        inputField.style.display = j === 5 ? 'inline-block' : 'none';
    }
}


limit_words = words.filter(word => word.length === selectedValue);









 
// Loop to create green input fields
for (let i = 1; i <= 11; i++) {
    // Create a new input element
    let input = document.createElement('input');

    // Set attributes for the input element
    input.type = 'text';
    input.className = 'inputField';
    input.id = 'value_' + i;
    input.maxLength ="1"
    //  inputfileds = input
    // Append the input element to the container
    container.appendChild(input);
}



// Loop to create yellow input fields
for (let i = 1; i <= 11; i++) {
    // Create a new input element
    let input = document.createElement('input');

    // Set attributes for the input element
    input.type = 'text';
    input.className = 'inputyellow';
    input.id = 'inputyellow' + i;
    input.maxLength ="1"
    //  inputfileds = input
    // Append the input element to the container
    yellowcontainer.appendChild(input);
}



//Loop to create black input fields
for (let i = 1; i <= 20; i++) {
    // Create a new input element
    let input = document.createElement('input');

    // Set attributes for the input element
    input.type = 'text';
    input.className = 'inputblack';
    input.id = 'inputblack' + i;
    input.maxLength ="1";
    //  inputfileds = input
    // Append the input element to the container
    blackcontainer.appendChild(input);
}




//click on solve button
solve.addEventListener('click' ,  function (){
    
    
    //get the values of input fields
    var inputs = [];
    for (let i = 1; i <=11; i++) {
        
        var inputfileds = document.getElementById('value_' +i).value;
        inputs.push(inputfileds);        
    }

    //Yellow Input Values
    var yellowvalues = [];
    for (let i = 1; i <=11; i++) {
        
        var yellowinputs = document.getElementById('inputyellow' +i).value;
        yellowvalues.push(yellowinputs); 
    }

    //black Input Values
    var blackvalues = [];
    for (let i = 1; i <=20; i++) {
        
        var blackinputs = document.getElementById('inputblack' +i).value;
        if (blackinputs != '') {
            
            blackvalues.push(blackinputs); 
        }
    }

  




    // Key words and words into characters
  var multidimensionalArray = {}; // Use curly braces for an object

    limit_words.forEach(word => {
        var charactersArray = word.split('');
        multidimensionalArray[word] = charactersArray; // Assign to object using string keys
    });

        
        

   //match the characters with input words
        
    var matchingKeys = [];
    if (inputs.length > 0 && !inputs.every(element => element === '')) {
        
        for (var key in multidimensionalArray) {           
        //var inputValues = [oneValue, twoValue, threeValue, fourValue, fiveValue];
            for (let match = 0; match < inputs.length; match++) {

                if (multidimensionalArray[key][match] == inputs[match] || inputs[match] == '') {
                    // enter.innerHTML = key;
                }else{
                    break;
                }
                if (inputs.length -1 == match ) {
                    matchingKeys.push(key);
                }

                if (matchingKeys == inputs[match]) {
                    
                }

            }

        }
    }


     //yellow inputs check
     
    var yellowWords = [];
    if (yellowvalues.length > 0 && !yellowvalues.every(element => element === '')) {

        // Example array of yellow values
       

        // Function to check if a word contains all characters from the yellowvalues array
        function wordMatchesYellowValues(word, yellowvalues) {
            return yellowvalues.every(char => char === '' || word.includes(char));
        }

        // Array to store matching words
        const matchingWords = [];

        // Loop through the multidimensional array and check for matches
        if (matchingKeys.length > 0) {

            matchingKeys.forEach(word => {
            if (wordMatchesYellowValues(word, yellowvalues)) {
                    matchingWords.push(word);
                }
            });
            //yellowWords.push(matchingWords);
            //this is use in black for filter words
            matchingWords.forEach(element => {
                yellowWords.push(element);
            }); 

            
        }else{

            limit_words.forEach(word => {
                if (wordMatchesYellowValues(word, yellowvalues)) {
                    matchingWords.push(word);
                }
            });
           // yellowWords.push(matchingWords);
            //this is use in black for filter words
            matchingWords.forEach(element => {
                yellowWords.push(element);
            });  
        }
    }

    
    
    //black inputs values
    var blackWords = [];
    if (blackvalues.length > 0 && !blackvalues.every(element => element === '')) {
        
        if (yellowWords.length > 0) {
            
            // Function to check if a word contains any character from the input array
            function containsAnyCharacter(word, blackvalues) {
                return blackvalues.some(char => word.includes(char));
            }       
            // Filter out the matching keys that contain any character from the input array
            const filteredMatchingKeys = yellowWords.filter(key => !containsAnyCharacter(key, blackvalues));
            filteredMatchingKeys.forEach(element => {
                    
                    blackWords.push(element);
            });
        }else if(matchingKeys.length > 0){
            function containsAnyCharacter(word, blackvalues) {
                return blackvalues.some(char => word.includes(char));
            }       
            // Filter out the matching keys that contain any character from the input array
            const filteredMatchingKeys = matchingKeys.filter(key => !containsAnyCharacter(key, blackvalues));
            filteredMatchingKeys.forEach(element => {
                    
                    blackWords.push(element);
            });
        }
        else{
             // Function to check if a word contains any character from the input array
             function containsAnyCharacter(word, blackvalues) {
                return blackvalues.some(char => word.includes(char));
            }
        
            // Filter out the matching keys that contain any character from the input array
            const filteredMatchingKeys = limit_words.filter(key => !containsAnyCharacter(key, blackvalues));
            filteredMatchingKeys.forEach(element => {
                    
                    blackWords.push(element);
            });
        }
    
    }
    
     // Output: []


     console.log(blackWords);
     console.log(blackWords.length);

    if (yellowWords.length > 0 && blackWords.length == '') {
         
        enter.textContent = yellowWords.join(' ');
    }else if(blackWords.length > 0){
        if (blackWords.length > 250) {
            alert('There are to many possiblities and that is too much, try to narrow down!');
        }else{

            enter.textContent = blackWords.join(' ');
        }

    }
    else{

        enter.textContent = matchingKeys.join(' ');
    }

    



    // Alternatively, you can print the keys in a formatted way
            


    
});