
// var num1 = 48;
// console.log("Number: " + num1);
// if((num1 % 2) == 0) {
//     console.log("The number is an even number.");
// } else {
//     console.log("The number is an odd number.");
// }

var a = 10;
function randomFunction (a) {  
    // b++;
    a++; //global use
    console.log(a); // a=11
}
randomFunction(a);
console.log(a); // a=10
