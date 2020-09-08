var userObj = {
    status: "premium",
    creditLimit: null
};
var updatedCreditLimit;

function cardFunction(user) {
    switch (user.status.toLowerCase()) {
        case "basic":
            user.creditLimit = 80000;
            console.log("User Type: " + user.status.toUpperCase() + "\nCredit Limit: " + user.creditLimit);
            // console.log(user.creditLimit);
            break;
        case "premium":
            user.creditLimit = 300000;
            console.log("User Type: " + user.status.toUpperCase() + "\nCredit Limit: " + user.creditLimit);
            break;
        case "platinum":
            user.creditLimit = 600000;
            console.log("User Type: " + user.status.toUpperCase() + "\nCredit Limit: " + user.creditLimit);
            break;
        default:
            console.log("Invalid Input");
            break;
    }
}
cardFunction(userObj);

// function cardFunction (user) {
//     if (user.status == "basic") {
//         updatedCreditLimit = user.creditLimit + 80000;
//         console.log("User Type: " + user.status + " and Credit Limit: " + updatedCreditLimit);
//     } else if (user.status == "premium") {
//         updatedCreditLimit = user.creditLimit + 300000;
//         console.log("User Type: " + user.status + " Credit Limit: " + updatedCreditLimit);
//     } else if (user.status == "platinum") {
//         updatedCreditLimit = user.creditLimit + 600000;
//         console.log("User Type: " + user.status + " Credit Limit: " + updatedCreditLimit);
//     } else {
//         console.log("Invalid Input");
//     }
// }
// cardFunction(userObj);


create an array of object. containing prop: id; name; address; friends [], notification [{text; time},{},{}], profilePic

id: 1,
name: "asd",
address: "asd",
friends: [2, 3],
notification: [{text: "asd", time: }, {text: ...}],
profilePic: "path"

id: 2,
name: "asdasd",
address: "asdas",
friends: [1, 3],
notification: [{text: "asd", time: }, {text: ...}],
profilePic: "path"

id: 3,
name: "asdasd",
address: "asdas",
friends: [1, 2],
notification: [{text: "asd", time: }, {text: ...}],
profilePic: "path"

create a function, parameter: name return: friend name(id for reference) and notification