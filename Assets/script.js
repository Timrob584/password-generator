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


// Add each letter to array. Add array for uppercase, numeric, & special
var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", ":", ";", "<", "=", ">", "?", "@", "[", "^"];

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

  var allChar = lowerChar.concat(upperChar).concat(numberChar).concat(specialChar);
  var lowAndUpp = lowerChar.concat(upperChar);
  var lowAndUppAndNum = lowerChar.concat(upperChar).concat(numberChar);
  var lowAndUppAndSpecial = lowerChar.concat(upperChar).concat(specialChar);
  var lowAndNumAndSpecial = lowerChar.concat(numberChar).concat(specialChar);
  var lowAndNum = lowerChar.concat(numberChar);
  var lowAndSpecial = lowerChar.concat(specialChar);
  var lowOnly = lowerChar;
  var uppAndNumAndSpecial = upperChar.concat(numberChar).concat(specialChar);
  var uppAndNum = upperChar.concat(numberChar);
  var uppAndSpecial = upperChar.concat(specialChar);
  var uppOnly = upperChar;
  var numAndSpecial = numberChar.concat(specialChar);
  var numOnly = numberChar;
  var specOnly = specialChar;

  var length = prompt("Desired Character Length")  

  function generatePassword() {
    var charSet = "";
  
    if (length < 8 || length > 128) {
      alert ("Please choose a character length between 8-128");
      return;
      }
    
  var lowercase = confirm("Include Lowercase?")
  var uppercase = confirm("Include Uppercase?")
  var numeric = confirm("Include Numbers?")
  var special = confirm("Include Special Characters?");

  if (lowercase === false && uppercase === false && numeric === false && special === false) {
    alert ("Please designate a character type for the password");
    return;
  }

    if(lowercase === true && uppercase === true && numeric === true && special === true) {
      charSet = allChar;
    } else if(lowercase === true && uppercase === false && numeric === true && special === true) {
      charSet = lowAndNumAndSpecial;
    } else if(lowercase === true && uppercase === true && numeric === false && special === true) {
      charSet = lowAndUppAndSpecial;
    } else if(lowercase === true && uppercase === true && numeric === true && special === false) {
      charSet = lowAndUppAndNum;
    } else if(lowercase === true && uppercase === false && numeric === false && special === true) {
      charSet = lowAndSpecial
    } else if(lowercase === true && uppercase === false && numeric === true && special === false) {
      charSet = lowAndNum
    } else if(lowercase === true && uppercase === true && numeric === false && special === false) {
      charSet = lowAndUpp
    } else if(lowercase === true && uppercase === false && numeric === false && special === false) {
      charSet = lowOnly
    } else if(lowercase === false && uppercase === true && numeric === true && special === true) {
      charSet = uppAndNumAndSpecial;
    } else if(lowercase === false && uppercase === true && numeric === true && special === false) {
      charSet = uppAndNum;
    } else if(lowercase === false && uppercase === true && numeric === false && special === true) {
      charSet = uppAndSpecial;
    } else if(lowercase === false && uppercase === true && numeric === false && special === false) {
      charSet = uppOnly;
    } else if(lowercase === false && uppercase === false && numeric === true && special === true) {
      charSet = numAndSpecial;
    } else if(lowercase === false && uppercase === false && numeric === true && special === false) {
      charSet = numOnly;
    } else if(lowercase === false && uppercase === false && numeric === false && special === true) {
      charSet = specOnly;
    }

    var returnValue = "";
    for (var i = 0; i < length; i++) {
      returnValue += charSet.charAt(Math.floor(Math.random() * charSet.length));
    }
    return returnValue;
  }

  // var result = []
  // var possibleChar = lowerChar.concat(upperChar).concat(numberChar).concat(specialChar);
  // var guaranteedChar = lowerChar.concat(upperChar).concat(numberChar).concat(specialChar);

// function getRandom(characterArray) {
//   return Math.floor(Math.random()*characterArray.length);
// }

// function getRandomLowerChar() {
//   return getRandom(lowerChar);
// }

// function getRandomUpperChar() {
//   return getRandom(upperChar);
// }

// function getRandomNumberChar() {
//   return getRandom(numberChar);
// }

// function getRandomSpecialChar() {
//   return getRandom(specialChar);
// }

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
alert(generatePassword());