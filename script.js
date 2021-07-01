// declare variable
var generateBtn = document.querySelector("#generate");
var posiblePassword = [];
var characterHolder = [];
var specialCharacters = ["!", ">", "*", "#", "%", "~", "_", "^", ":", ")"];
var letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowerLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var num = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

var passwordText = document.querySelector("#password");

// main function
function writePassword() {
  passwordText.value = "";
  posiblePassword = [];
  characterHolder = [];

  var amountOfChar = parseInt(
    prompt("choose betweem 8-120 characters for password?")
  );
  if (amountOfChar == false) {
    return;
  }
  if (amountOfChar < 8 || amountOfChar > 120 || isNaN(amountOfChar) === true) {
    alert(
      "password must be between 8-120 characters or amount of characters enterd must be a number "
    );
    return;
  }

  var confirmedNumbers = confirm("click ok to include numbers?");
  if (confirmedNumbers == true) {
    for (var i = 0; i < num.length; i++) {
      characterHolder = characterHolder + num[i];
    }
  }

  var confirmedUperCaseLetters = confirm(
    "click ok to include uppercase letters in passoword"
  );
  if (confirmedUperCaseLetters == true) {
    for (var i = 0; i < letters.length; i++) {
      characterHolder = characterHolder + letters[i];
    }
  }
  var confirmedLowercaseLetter = confirm(
    "click ok to include lowercase letters in passoword"
  );
  if (confirmedLowercaseLetter == true) {
    for (var i = 0; i < lowerLetters.length; i++) {
      characterHolder = characterHolder + lowerLetters[i];
    }
  }
  var confirmSpecialChar = confirm(
    "click ok to include special characters in password?"
  );
  if (confirmSpecialChar == true) {
    for (var i = 0; i < specialCharacters.length; i++) {
      characterHolder = characterHolder + specialCharacters[i];
    }
  }
  if (
    confirmedNumbers == true ||
    confirmedLowercaseLetter == true ||
    confirmedUperCaseLetters == true ||
    confirmSpecialChar == true
  ) {
    for (var i = 0; i < amountOfChar; i++) {
      randomNum = Math.floor(Math.random() * characterHolder.length);
      console.log(randomNum);
      posiblePassword = posiblePassword + characterHolder[randomNum];
    }
    passwordText.value = posiblePassword;
  }
  if (
    confirmedNumbers == false &&
    confirmedLowercaseLetter == false &&
    confirmedUperCaseLetters == false &&
    confirmSpecialChar == false
  ) {
    alert("password must have numbers, letters, or special characters");
    writePassword();
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", function () {
  writePassword();
});
