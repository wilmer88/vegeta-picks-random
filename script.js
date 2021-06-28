// Assignment Code
var generateBtn = document.querySelector("#generate");
var empty = [];
var letters = ["A","B","c","D"]
var passwordText = document.querySelector("#password");
passwordText.value = empty;
// Write password to the #password input
function writePassword() {
  var amountOfChar = prompt("choose amount of characters in password? 8-120");
  if (amountOfChar < 8 || amountOfChar > 120) {
    alert("must be between 8-120 characters");
    chooseChar();
  } else {
    var confirmedNumbers = confirm("Would you like to include numbers?");
    var confirmedLetters = confim("would you like letters in passoword")
      if(confirmedLetters == true) {
        Math.random

      }
       
      }
    
    console.log(amountOfChar);
  }
  if (confirmedNumbers == true) {
    for (var i = 0; i < amountOfChar; i++) {
      randomNum = Math.floor(Math.random() * 10);
      empty.push(randomNum);
      passwordText.value = empty;
    }

    // var numToGen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    // var randomPick = Math.floor(Math.random() * numToGen.length);
    // var ranNum = numToGen[randomPick];
    // characterHolder.push(ranNum);
  } else {
    alert("password must have numbers");
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
