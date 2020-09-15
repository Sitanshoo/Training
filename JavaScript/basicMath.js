// let num1, num2;
let result;

export const addTwoNos = (num1, num2) => {
    result = num1 + num2;
    console.log(`Addition: ${result}`); 
}

export const subTwoNos = (num1, num2) => {
    result = num1 - num2;
    console.log(`Subtraction: ${result}`);
}


export const mulTwoNos = (num1, num2) => {
    result = num1 * num2;
    console.log(`Multiplication: ${result}`);
}


export const divTwoNos = (num1, num2) => {
    (num1 <= 0 || num2 <= 0) ? 
    console.log(`Numerator or Denominator cannot be zero or low`) : 
    console.log(`Division: ${num1 / num2}`);
}
