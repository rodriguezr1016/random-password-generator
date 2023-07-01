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

var lettersLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var lettersUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var special = ["!", "@", "#", "$", "%", "&", "*", "+"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var possibleCharacters = [lettersLower, lettersUpper, special, numbers];
var charLength = window.prompt("How many characters?");
var lowerCase = window.prompt("Do you want lower cases? Type Yes or No");
var upperCase = window.prompt("Do you want upper cases? Type Yes or No");
var numChar = window.prompt("Do you want numbers? Type Yes or No");
var specChar = window.prompt("Do you want special characters? Type Yes or No");
lowerCase.toUpperCase();
upperCase.toUpperCase();
numChar.toUpperCase();
specChar.toUpperCase();
function generatePassword() {
  var tryAgain = "Character length must be between 8-128 characters. Please try again by refreshing";
  if(charLength< 8 || charLength>128){
   
    return tryAgain
  }
  // if(lowerCase="YES"){
  //   for(var i=0; i< charLength;i++) {
  //     var lowerPassword=lettersLower[Math.floor(Math.random() * charLength)]
  //   }
  //   return tryAgain
  // }
 
  }
  var randomLowerletter=lettersLower[Math.floor(Math.random() * lettersLower.length)];
  var randomUpperLetter=lettersUpper[Math.floor(Math.random()*lettersUpper.length)];
  var randomNumber= numbers[Math.floor(Math.random()*numbers.length)];
  var randomSpecial= special[Math.floor(Math.random()*special.length)];
  console.log(randomSpecial);
  