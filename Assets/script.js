// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add each letter to array. Add array for uppercase, numeric, & special
var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", ":", ";", "<", "=", ">", "?", "@", "[", "^"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

function generatePassword(length, lowercase, uppercase, numeric, special) {



  var allChar = lowerChar.concat(upperChar).concat(numberChar).concat(specialChar);
  var lowAndUpp = lowerChar.concat(upperChar);
  var lowAndUppAndNum = lowerChar.concat(upperChar).concat(numberChar);
  var lowAndUppAndSpecial = lowerChar.concat(upperChar).concat(specialChar);
  var lowAndNumAndSpecial = lowerChar.concat(numberChar).concat(specialChar);
  var lowAndNum = lowerChar.concat(numberChar);
  var lowAndSpecial = lowerChar.concat(specialChar);
  var uppAndNumAndSpecial = upperChar.concat(numberChar).concat(specialChar);
  var uppAndNum = upperChar.concat(numberChar);
  var uppAndSpecial = upperChar.concat(specialChar);
  var numAndSpecial = numberChar.concat(specialChar);

  var result = []
  var possibleChar = lowerChar.concat(upperChar).concat(numberChar).concat(specialChar);
  var guaranteedChar = lowerChar.concat(upperChar).concat(numberChar).concat(specialChar);

function getRandom(characterArray) {
  return Math.floor(Math.random()*characterArray.length);
}

function getRandomLowerChar() {
  return getRandom(lowerChar);
}

function getRandomUpperChar() {
  return getRandom(upperChar);
}

function getRandomNumberChar() {
  return getRandom(numberChar);
}

function getRandomSpecialChar() {
  return getRandom(specialChar);
}
}

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page



// COLLECTIVE USER INPUT FUNCTION

function userPrompts() {
  var length = prompt("Desired Character Length")

if (length < 8 || length > 128) {
alert ("Please choose a character length between 8-128");
return;
}

var lowercase = confirm("Include Lowercase?")
var uppercase = confirm("Include Uppercase?")
var numeric = confirm("Include Numbers?")
var special = confirm("Include Special Characters?");

console.log(lowercase, uppercase, numeric, special);

if (lowercase === false && uppercase === false && numeric === false && special === false) {
  alert ("Please designate a character type for the password");
  return;
}

var userInput = {
  length:length,
  lowercase:lowercase,
  uppercase:uppercase,
  numeric:numeric,
  special:special
}

return userInput;

}
