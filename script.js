// Assignment Code
var generateBtn = document.querySelector("#generate");
var posiblePassword = [];
var empty = [];
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

// Write password to the #password input
function writePassword() {
  var amountOfChar = parseInt(
    prompt("choose betweem 8-120 characters for password?")
  );
  if (amountOfChar < 8 || amountOfChar > 120 || isNaN(amountOfChar) === true) {
    alert(
      "password must be between 8-120 characters or amount of characters enterd must be a number "
    );
    writePassword();
  }

  var confirmedNumbers = confirm("Would you like to include numbers?");
  if (confirmedNumbers == true) {
    for (var i = 0; i < num.length; i++) {
      empty = empty + num[i];
    }
    console.log(empty);
  }

  var confirmedUperCaseLetters = confirm(
    "would you like upper case letters in passoword"
  );
  if (confirmedUperCaseLetters == true) {
    for (var i = 0; i < letters.length; i++) {
      empty = empty + letters[i];
    }
    console.log(empty);
  }
  var confirmedLowercaseLetter = confirm(
    "would you like lower case letters in passoword"
  );
  if (confirmedLowercaseLetter == true) {
    for (var i = 0; i < lowerLetters.length; i++) {
      empty = empty + lowerLetters[i];
    }
    console.log(empty);
  }
  if (
    confirmedNumbers == true ||
    confirmedLowercaseLetter == true ||
    confirmedUperCaseLetters == true
  ) {
    for (var i = 0; i < amountOfChar; i++) {
      randomNum = Math.floor(Math.random() * empty.length);
      console.log(randomNum);
      posiblePassword = posiblePassword + empty[randomNum];
      console.log(posiblePassword);
    }
    passwordText.value = posiblePassword;
  }
  if (
    confirmedNumbers == false &&
    confirmedLowercaseLetter == false &&
    confirmedUperCaseLetters == false
  ) {
    alert("password must have numbers or letters");
    writePassword();
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", function () {
  writePassword();
});

// var confirmedUpperCase = confirm("do you want to use upper case letters");

// var confirmedLowercase = confirm(
//   "Would you like to include lowercase letters"
// ); //dummy prompt

// var specialCharecter = confirm("do you want to use special characters"); //dummy prompt

// var characterHolder = []; //holds charcters created by

// pushes randomcharacters from character holder to password variable
//   for (i = 0; i < parseInt(amountOfChar); i++) {
//     var createdrandom = Math.floor(Math.random() * characterHolder.length);
//     var password = password.concat(createdrandom[i]);
//   }
//   password.push.generatePassword();
//   alert(password + "Sorry only able to generate random number password");
// });
// recreated random specialcharacter/upper and lowercase same as the number Genarater
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
// }
