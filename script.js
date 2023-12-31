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

var charLength = window.prompt("How many characters?");
var lowerCase = window.prompt("Do you want lower cases? Type true or false");
var upperCase = window.prompt("Do you want upper cases? Type true or false");
var numChar = window.prompt("Do you want numbers? Type true or false");
var specChar = window.prompt("Do you want special characters? Type true or fasle");

lowerCase=(lowerCase==="true");
upperCase=(upperCase==="true");
numChar=(numChar==="true");
specChar=(specChar==="true");

  var tryAgain = "Character length must be between 8-128 characters. Please try again by refreshing";
  
  var valueOfCharLength = Number(charLength);

  function generatePassword() {
   
    var availableCharacters = [
      ...(lowerCase ? lettersLower: []),
      ...(upperCase ? lettersUpper: []),
      ...(numChar ? numbers: []),
      ...(specChar ? special: []),
    ];
    var generatedPassword="";
    
    if(charLength< 8 || charLength>128){
       
      return tryAgain
    }
    for(var i=0; i<valueOfCharLength;i++){
      var randomCharacter= Math.floor(Math.random()*availableCharacters.length);
      generatedPassword+= availableCharacters[randomCharacter];
    }
    return generatedPassword;
     }
     generatePassword()
