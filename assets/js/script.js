// Assignment code here

// Initializing some variables to be used in later functions.
// Using string intead of array for personal ease. Could use arrays just as well.
var numbers = "0123456789";
var alphabetsLower = "abcdefghijklmnopqrstuvwxyz";
var alphabetsUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// Use \ to include special characters like " and another \ otherwise javascript has other functions for them
var special = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
var keyList = "";
var passwordLength;
var userSpecs;
var password = "";

// Initializing  a function named getuserSpecs.
// This function prompts the user through confirm in order to put together a keylist that has the user's preferences.
// The keylist is simply a combination of strings intialized above. Again, this all could be done using arrays in which case I would use keyList.concat to merge arrays together to create the keylist.
function getuserSpecs(){
  // This while loop makes sure that the user has chosen at least one of the offered character set options. Otherwise there will be no characters to make a password out of.
  while (keyList.length == 0){
    userSpecs = window.confirm("Would you like to have numbers in your password?");
    if (userSpecs){
      keyList += numbers;
    }
    userSpecs = window.confirm("Would you like to have lower case alphabets in your password?");
    if (userSpecs){
      keyList += alphabetsLower;
    }
    userSpecs = window.confirm("Would you like to have upper case alphabets in your password?");
    if (userSpecs){
      keyList += alphabetsUpper;
    }
    userSpecs = window.confirm("Would you like to have special characters in your password?");
    if (userSpecs){
      keyList += special;
    }
    if (keyList.length == 0){
      window.alert("You must choose at least one set of characters for your password.");
    }
  }
  // This while loop makes sure that the user's preferred password length is indeed within 8 to 128 characters
  passwordLength = window.prompt("How long do you want your password?\n(Between 8 to 128 characters)")
  while (passwordLength > 128 || passwordLength < 8){
    passwordLength = window.prompt("Password length must be between 8 to 128 characters. ")
  }
};

// Initializing a function named generatePassword.
// This function uses all the user specifications prompted with the getuserSpecs function.
// A for loop that iterates the same amount of times as the specified password length will continuously create a random integer (between 0 and the length of the keylist) to be used as an index named randomNumber.
// The index is then used to locate a character within the keylist and added to the password one after another.
// Once again, if I were to use arrays, I would use keyList.at(randomNumber) or simply keylist[randomNumber], both would select the value within the keylist array at said index.
function generatePassword(){
  getuserSpecs();
  for (var i = 0; i < passwordLength; i++){
    var randomNumber = Math.floor(Math.random() * keyList.length)
    password += keyList.charAt(randomNumber)
  }
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
