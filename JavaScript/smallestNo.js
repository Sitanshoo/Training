
var num1 = 85;
var num2 = 55;
var num3 = 78;
console.log("Smallest number");
console.log("Numbers: " + num1 + ", " + num2 + " and " + num3);
if(num1 < num2 && num1 < num3){ 
    console.log("Smallest No.: " + num1);
} else if(num2 < num3 && num2 < num1) {
    console.log("Smallest No.: " + num2);
} else {
    console.log("Smallest No.: " + num3);
}