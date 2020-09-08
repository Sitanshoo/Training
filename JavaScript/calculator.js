var num1 = 10;
var num2 = 22;
var myStr = "ABC"
var resultNum;

resultNum = myStr + num2;
console.log("String concatenation")

resultNum = num1 + num2;
console.log("addition " + resultNum);

resultNum = num1 - num2;
console.log("subtraction " + resultNum);

resultNum = num1 * num2;
console.log("multiplication " + resultNum);

resultNum = num1 / num2;
console.log("quotient " + resultNum);

resultNum = num1 % num2;
console.log("remainder " + resultNum);

//Escape Characters
var myStr = "This is a \"sentence\"."; //What if I dont want to use fullstop?
console.log(myStr);

var myStr = '"This is a sentence"'; //We can use either one for strings, but quotes should be same for both the ends.
console.log(myStr);

var myStr = 'first Line\n\t\\Second Line\nThird Line'
console.log(myStr);

//Concatenation
var myStr = "First statement. " + "Second statement."
console.log(myStr);

var myStr = "First part. ";
myStr += "Second part.";
console.log(myStr);

var myName = "Bond";
var myStr = "My name is James, James " + myName + ".";
console.log(myStr);

var anAdjective = "interesting!";
var myStr = "JavaScript is ";
myStr += anAdjective;
console.log(myStr);

//String length includes white spaces in the string as well
var myStr = "Hey, how are you?"
var myStrLength = myStr.length;
console.log(myStrLength);

//Bracket Notation
var fName = "Abcde";
var lName = "Lmnop";
var fullName = fName[0] + "." + lName;
console.log(fullName);

//To find the last character of the String
var myName = "Sitanshu";
var lastChar = myName[myName.length - 1];
console.log(lastChar);