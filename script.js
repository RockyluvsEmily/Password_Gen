// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specialLetters = "!@#$%^&*()_+[]{}|;':\",./<>?";
// var length = 8;

var allChars = "";
// Write password to the #password input
function writePassword() {
    var password = [];
    var passwordLength = prompt('How long would you like your password to be?')
    var confirmLower = confirm("Do you want lowercase letters?")
    var confirmUpper = confirm("Do you want uppercase letters?")
    var confirmNum = confirm("Do you want to include numbers?")
    var confirmChars = confirm("Do you want to include special characters?")

    if (confirmLower === true) {
        allChars += lowerCaseLetters
    }
    if (confirmUpper === true) {
        allChars += upperCaseLetters
    }
    if (confirmNum === true) {
        allChars += numbers
    }
    if (confirmChars === true) {
        allChars += specialLetters
    }

    // allChars.split() 
    console.log(allChars)
    // password += upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)];
    // password += lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)];
    // password += numbers[Math.floor(Math.random() * numbers.length)];
    // password += specialLetters[Math.floor(Math.random() * specialLetters.length)];
    var passwordText = document.querySelector("#password");

    allChars = allChars.split("")
    for (var i = 0; i < passwordLength; i++) {
        var random = Math.floor(Math.random() * allChars.length)
        // console.log(random)
        var randomValue = allChars[random]
        // console.log(randomValue)
        password.push(randomValue)
        // console.log(password)
    }
    passwordText.value = password.join("");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);