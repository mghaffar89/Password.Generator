var userEnter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
var choicesSelected;

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
  userEnter = parseInt(
    prompt(
      "How many characters would you like your password? Choose between 8 and 128"
    )
  );
  if (!userEnter) {
    alert("Please enter a value between 8 and 128");
  } else if (userEnter < 8 || userEnter > 128) {
    userEnter = parseInt(prompt("Please enter a value between 8 and 12"));
  } else {
    confirmCharacter = confirm(
      "Click OK to confirm including special characters"
    );
    confirmNumber = confirm("Click OK to confirm including numeric characters");
    confirmUppercase = confirm(
      "Click OK to confirm including Uppercase letters"
    );
    confirmLowercase = confirm(
      "Click OK to confirm including Lowercase letters"
    );
  }

  //first if statement is for if user chooses all 4 options - .push is what combines the values together
  if (
    confirmCharacter &&
    confirmNumber &&
    confirmUppercase &&
    confirmLowercase
  ) {
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
  var password = [];

  for (var i = 0; i < userEnter; i++) {
    var generateChoices =
      choicesSelected[Math.floor(Math.random() * choicesSelected.length)];
    password.push(generateChoices);
  }

  //.join method will be used here because we need to generate the password string
  // also will need to call on the function using a return function but not sure what I am calling on 
  
