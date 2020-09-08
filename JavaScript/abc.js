console.log("Basic calculation with return statement");
function twoNosAddition(num1, num2) {
    return console.log("Addition: " +  (num1 + num2));
}
twoNosAddition(5, 10);



// console.log("Addition with return: " + twoNosAddition(5, 10));
// function twoNosDifference(num3, num5) {
//     return num3 - num5;
// }
// console.log("Subtraction with return: " + twoNosDifference(15, 10));
// function twoNosMultiplication(num6, num7) {
//     return num6 * num7;
// }
// console.log("Multiplication with return: " + twoNosMultiplication(5, 15));

function twoNosDivision(num8, num9) {
    return num8 / num9;
}
console.log("Division with return: " + twoNosDivision(49, 0));

// function twoNosRemainder(num10, num11) {
//     return num10 % num11;
// }

// // console.log("Remainder with return: " + twoNosRemainder(51, 2));

var a = 10;
function print(test) {
    var b = test++;
    a++;
    console.log(b);
}
print(a);
console.log(a);