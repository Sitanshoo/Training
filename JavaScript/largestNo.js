

var num1 = 5;
var num2 = 6;
var num3 = 4;
console.log("Largest number");
console.log("Numbers: " + num1 + ", " + num2 + " and " + num3);
if (num1 > num2 && num1 > num3) {
    console.log("Largest No.: " + num1);
} else if (num2 > num3 && num2 > num1) {
    console.log("Largest No.: " + num2);
} else {
    console.log("Largest No.: " + num3);
}


// if (num1 > num2) {
//     if(num1 > num3) {
//         console.log(num1 + " is the largest no.");
//     }
// }
// if (num2 > num1) {
//     if (num2 > num3) {
//         console.log(num2 + " is the largest no.");
//     }
// }
// if (num3 > num1) {
//     if(num3 > num2) {
//         console.log(num3 + " is the largest no.");
//     }
// }
