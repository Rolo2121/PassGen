// Assignment code here
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("Generating password")
  // make prompts for user
  window.prompt("Length of password")

  //password length 8-128 characters
  // Upper, lower, #s special characters
// validate input
// generatePassword


// display the password on screen
  return "Your Password!! ";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);