//var str1 = "SITANSHU kumar bangalore";
var str2 = "KUMAR";
var str3 = "BANGALORE";
var result1 = " ";
var result2 = " ";
var result3 = " ";

console.log("Original Strings:")
console.log(" " + str1 + " " + str2 + " " + str3);

for (var i = (str1.length-1); i >=  0; i--) {
    result1 = result1 + str1[i];   
}

for (var i = (str2.length-1); i >=  0; i--) {
    result2 = result2 + str2[i];   
}

for (var i = (str3.length-1); i >=  0; i--) {
    result3 = result3 + str3[i];   
}

console.log("Reverse string (words):")
console.log(result1 + result2 + result3);

var nameArr = ["SITANSHU", "KUMAR", "BANGALORE"];
var resultArr = "";

console.log("\nOrignal Array of Strings:")
// for (var k = 0 ; k < )
console.log(" " + nameArr[0] + " " + nameArr[1] + " " + nameArr[2]);//loop
for (var j = (nameArr.length - 1); j >= 0; j--) {
    resultArr = resultArr + " " +nameArr[j];
}
console.log("Reverse Array:")
console.log(resultArr);