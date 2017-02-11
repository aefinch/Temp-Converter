// Get a reference to the elements in the DOM
var button = document.getElementById("converter");
var textInput=document.getElementById("temp");
var radios = document.getElementsByName("conversionType")
var selectedRadio="";
var newTemp="";
var userInput=textInput.value;

// Create the conversion functions
function toCelsius (fahrenheit) {
// (F-32)*5/9
var C=(fahrenheit-32)*(5/9)
return C;
}

function toFahrenheit (celsius) {
// (C*1.8)+32
var F=(celsius*1.8)+32;
return F;
}


// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
  for (var i=0; i< radios.length; i++) {
  	if (radios[i].checked) {
	  	selectedRadio=radios[i].value;
  	}
  }
	if (selectedRadio==="CtoF") {
		newTemp=toFahrenheit(userInput);
		if (newTemp > 90) {
			output.innerHTML="The converted temperature is " + newTemp.toFixed(2).fontcolor("red");
		}
		else if(newTemp < 32) {
			output.innerHTML="The converted temperature is " + newTemp.toFixed(2).fontcolor("blue");
		}
		else {
			output.innerHTML="The converted temperature is " + newTemp.toFixed(2).fontcolor("green");
		}
	} 
  else if(selectedRadio==="FtoC"){
		newTemp=toCelsius(userInput);
		if (newTemp > 32) {
			output.innerHTML="The converted temperature is " + newTemp.toFixed(2).fontcolor("red");
		}
		else if(newTemp < 0) {
			output.innerHTML="The converted temperature is " + newTemp.toFixed(2).fontcolor("blue");
		}
		else {
			output.innerHTML="The converted temperature is " + newTemp.toFixed(2).fontcolor("green");
		}
	} 
  else {
		output.innerHTML="Please select a conversion type";
	}
}
// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);
function whichKey(event) {
  if(event.keyCode===13) {
    event.preventDefault();
    determineConverter();
  }
}


// Add event listener to input fields
window.addEventListener("keyup", whichKey);
textInput.addEventListener("keydown", whichKey);
