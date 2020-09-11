// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", function catchedChar() {
  var amountOfChar = prompt("how many characters in password? 8-120");
if (amountOfChar < "8" && amountOfChar > "120");{
  alert("must be between 8-120 characters")
  amountOfChar();
} else {
  alert("go head")
}

confirmedNumbers = confirm("would you like to include numbers");

var confirmedUpperCase = confirm("do you want to use upper case letters");

 var confirmedLowercase = confirm("do you want to use lowercase letters"); //dummy prompt

 var specialCharecter = confirm("do you want to use special characters"); //dummy prompt
 
 var characterHolder = []; //holds charcters created by

//number generator
 if (confirmedNumbers == true) {
   var numToGen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
   var randomPick = Math.floor(Math.random() * numToGen.length);

  var ranNum = numToGen[randomPick];
   characterHolder.push(ranNum);
 }

 for (i = 0; i < characterHolder; i++) {
   var createdrandom = Math.floor(Math.random() * characterHolder);
  var password = createdrandom[i]
  }
  password.push.generatePassword()


// was able to recreate random specialcharacter/upper and lowercase same as the number Genarater
// if (confirmedUpperCase == confirm) {
//      var uperCaseLetters = ["A", "B", "C", "D", "E", "f" ];
//      var ranUpperCase = Math.floor(Math.random() * numToGen);
//      ranUpperCase.push("charecterHolder");
//     }

//     if ( confirmedLowercase == confirm) {
//       var lowerCaseLetters = ["a", "b", "c", "d", "e", "f" ];
//       var ranUpperCase = Math.floor(Math.random() * numToGen);
//       ranUpperCase.push("charecterHolder");
//      }
 
// if ( specialCharecters == confirm) {
//       var lowerCaseLetters = ["*", "%", "@", "!", "^", "-" ];
//       var ranUpperCase = Math.floor(Math.random() * numToGen);
//       var madeRanUpper = numToGen[ranUpperCase]
//      }
