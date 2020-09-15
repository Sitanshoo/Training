

// const secondFunc = () => {
//     console.log(`HELLO`); //1st
//     firstFunc(); //callback
// }

// secondFunc();

//Callback Function
let arr = [4, 5, 6, 7, 8, 9, 10];
let evenArr = [];
const myFilter = (my_array, callback) => {
    // for (i = 0; i < my_array.length; i++) {
    //     callback(arr[i]);
    // }
    return callback(arr[2]);
    // console.log(evenArr);
}
const evenOdd = (num) => {
    if (num % 2 == 0) {
        evenArr.push(num);
    }
    console.log(`${num} is even`);
}
myFilter(arr, evenOdd);


let num1 = 50, num2 = 60;
const sumOfNo = (a, b) => {
    console.log(`Addition:  ${a + b}`);
}
const productOfNo = (a, b) => {
    console.log(`Product: ${a * b}`);
}

const logicalOperation = (callback) => {
    console.log(`\nLogical Operation using Callback Function:`);
    callback(num1, num2);
}

logicalOperation(sumOfNo);
// logicalOperation(productOfNo);

//Promise
// let name = "Sitanshu1";
// let acceptName = new Promise((resolve, reject) => {
//     if (name == "Sitanshu") {
//         resolve(`Username updated`);
//     } else {
//         reject(`Invalid Input`);
//     }
// });

// acceptName.then((resolveMessage) => {
//     console.log(`Promise Resolved. ${resolveMessage}`);
// }).catch((rejectError) => {
//     console.log(`Promise Rejected. ${rejectError}`);
// });

let age = 20;
const drivingLicense = new Promise ((resolve, reject) => {
    if (age <= 18) {
        reject(`You cannot appear for the test. You are younger.`);
    } else if (age >= 18) {
        resolve(`You can appear for the test.`);
    } else if (age > 65){
        reject(`You cannot appear for the test. You are a senior citizen.`);
    }
});

drivingLicense.then((message) => {
    console.log(`${message} Test details will be sent to you on you email.`);
}).catch((error) => {
    console.log(`${error}`);
})

(typeOf(name) !== "string") {
    
}




