
function toCelsius (fahrenheit) {
// (F-32)*5/9
var C=(fahrenheit-32)*(5/9)
console.log(C);
return C;
}

function toFahrenheit (celsius) {
// (C*1.8)+32
var F=(celsius*1.8)+32;
console.log(F);
return F;
}

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");
button.onclick = determineConverter;

// This function should determine which conversion should
// happen based on which radio button is selected.
var radios = document.getElementsByName("conversionType")
var selectedRadio="";
var newTemp="";
function determineConverter (clickEvent) {
	// console.log("event", clickEvent);
	var userInput=document.getElementById("temp").value;
	// console.log(userInput);
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
  	} else if(selectedRadio==="FtoC"){
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
  	} else {
  		output.innerHTML="Please select a conversion type";
  	}
  	console.log(newTemp);
}
// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);
userInput.addEventListener("keyup", whichKey);
radios.addEventListener("keyup", whichKey);
function whichKey() {
  if(event.keyCode===13) {
    event.preventDefault();
    document.getElementById("convert").click();
  }
}

// Add event listener to input fields
