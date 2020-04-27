//user input variables:
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
var choicesSelected;

//password variable values:
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
character = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  " < ",
  "=",
  " > ",
  " ? ",
  "@",
  "[",
  "\\",
  "]",
  " ^ ",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];
alpha = [
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

var toUpperCase = function (x) {
  return x.toUpperCase();
};
//.map creates a new array - in this case we want to add Upper Case alphabet
alpha2 = alpha.map(toUpperCase);

// Assignment Code - given in starter code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  enter = parseInt(
    prompt(
      "How many characters would you like your password? Choose between 8 and 128"
    )
  );
  if (!enter) {
    alert("This needs a value");
  } else if (enter < 8 || enter > 128) {
    enter = parseInt(prompt("You must choose between 8 and 128"));
  } else {
    confirmNumber = confirm("Will this contain numbers?");
    confirmCharacter = confirm("Will this contain special characters?");
    confirmUppercase = confirm("Will this contain Uppercase letters?");
    confirmLowercase = confirm("Will this contain Lowercase letters?");
  }
}
//first if statement is for if user chooses all 4 options
if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {
  choicesSelected = character.push(number, alpha, alpha2);
  //next section is if user chooses 3 out of 4 options
} else if (confirmCharacter && confirmNumber && confirmUppercase) {
  choicesSelected = character.push(number, alpha2);
} else if (confirmCharacter && confirmNumber && confirmLowercase) {
  choicesSelected = character.push(number, alpha);
} else if (confirmCharacter && confirmLowercase && confirmUppercase) {
  choicesSelected = character.push(alpha, alpha2);
} else if (confirmNumber && confirmLowercase && confirmUppercase) {
  choicesSelected = number.push(alpha, alpha2);
  //next section is if user chooses 2 out of 4 options
} else if (confirmCharacter && confirmNumber) {
  choicesSelected = character.push(number);
} else if (confirmCharacter && confirmLowercase) {
  choicesSelected = character.push(alpha);
} else if (confirmCharacter && confirmUppercase) {
  choicesSelected = character.push(alpha2);
} else if (confirmLowercase && confirmNumber) {
  choicesSelected = alpha.push(number);
} else if (confirmLowercase && confirmUppercase) {
  choicesSelected = alpha.push(alpha2);
} else if (confirmNumber && confirmUppercase) {
  choicesSelected = number.push(alpha2);
}
// and last section if user chooses 1 out of the 4
else if (confirmNumber) {
  choicesSelected = number;
} else if (confirmLowercase) {
  choicesSelected = alpha;
} else if (confirmCharacter) {
  choicesSelected = character;
}
