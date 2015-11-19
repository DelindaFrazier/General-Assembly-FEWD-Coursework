var total = 0;

function currencyFormat(number) {
    // Turn the currency into a number
    number = parseFloat(number);
        //pasrseFloat can be used to return a decimal.

    // Set the correct decimal places
    number = number.toFixed(2);
        //Tell the computer we only want two decimal places because we are talking money.

    // Add the currency symbol
    number = "$" + number;
        //Concatenation. Places the string $ before our number.

    // Return the value
        return number;
            //Stops the execution of the function and specifies the value to be returned.
}

function addvalue() {
    // Create our variables and populate them with values from the document elements
    var entryElement = document.getElementById('newEntry'), 
            //finds the html element with the ID newEntry in the index.html
            //Location of ID: this is the text field on the screen where user inputs price
        
        entriesElement = document.getElementById('entries'),
            //finds the html element with the ID entries in the index.html
            //Location of ID: this is the receipt area on the screen
        
        totalElement = document.getElementById('total');
            //finds the html element with the ID total in the index.html
            //Location of ID: this is the total amount of bill shown in the receipt area

    var entry = entryElement.value;
        //entryElement is the variable we just defined.
        //value property sets or returns the value of the value attribute of a text field.
        //So we have created a new variable whose value will be whatever is entered into the text input field (#newEntry) on the screen

    // Convert the entry from a string to a number
    entry = parseFloat(entry);
        //We convert the entry to a number so that we can do math on it. It also validates that the input is indeed a number.

    // Format the number as currency
    var currency = currencyFormat(entry);
        //We create a variable so that we can run the function we created above called currencyFormat. The function will be run on whatever value is stored in the variable entry.


    // Get the html of the current entries and put it in a variable
    var entriesHTML = entriesElement.innerHTML;
        //entriesElement is a is variable defined above which contains whatever has been entered into div #entries
        //innerHTML property is returning the HTML content (inner HTML) of the div #entries
        //This line defines a variable called entriesHTML and sets its value to    what ever value is entered into the Div #entries, which is whatever shows up on the screen.

    // Add the new entry to the variable
    entriesHTML = entriesHTML + "<div>" + currency + "</div>";
        //We are adding lines of HTML to the div #entries each time the user inputs a value into the text field.

    // Replace the content of the entries document element with the updated variable
    entriesElement.innerHTML = entriesHTML;
        //Write the lines of HTML to the screen.

    // Update the total variable
    
    //var total = totalElement.innerHTML;

        //The variable total is now equal to whatever is inside of the <span>
        // #total.
        //This is a global variable. Does not need to be defined.

    //total = parseFloat(total); Not needed, since this already a number.

    total = total + entry;
    
    // Update the document element with the total
    totalElement.innerHTML = currencyFormat(total);
        //Now we are formatting the value of the total variable as currency.

    // Empty the entry element
    entryElement.value = "0";



    //document.getElementById("entry").reset();

}

// Set total value to 0.

    var total = 0;

// Listen for a click.

document.getElementById('entryBtn').onclick = addvalue;