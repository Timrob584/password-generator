// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria


// I have gotten it to have an alert window pop up but there is no text in it?
function prompt() {
  var criteria = prompt("Please designate criteria");
  alert (criteria);
}

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

function prompt() {
  var included = prompt("Include  ")
}

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters

function Length() {
  var length = prompt("Desired Character Length", length)
}

generateBtn.addEventListener("click", okay, cancel);

// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

function prompt() {
var lowercase = prompt("Include Lowercase?")
var uppercase = prompt("Include Uppercase?")
var numeric = prompt("Include Numbers?")
var special = prompt("Include Special Characters?")
}

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected



// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

var password = generatePassword(
  if (lowercase = yes) {
    include lowercase
  } else {
    do not include lowercase
  }

  if (uppercase = yes) {
    include uppercase
  } else {
    do not include uppercase
  }

  if (number = yes) {
    include number
  } else {
    do not include number
  }

  if (special = yes) {
    include special
  } else {
    do not include special
  }
);

resultDOM.innerText = password;


// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page