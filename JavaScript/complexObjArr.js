var userDetails = [{
    id: 1,
    name: "Ram",
    address: "USA",
    friends: [2, 3],
    notification: [{ text: "Hello", time: Date() }, { text: "Hi", time: Date() }]
}, {
    id: 2,
    name: "Shyam",
    address: "NY",
    friends: [1, 3],
    notification: [{ text: "Hi", time: Date() }, { text: "Wassup?", time: Date() }]
}, {
    id: 3,
    name: "Baburao",
    address: "LA",
    friends: [1, 2],
    notification: [{ text: "How are you?", time: Date() }, { text: "You there?", time: Date() }]
}]

function addUser(userArr, newUser) {
    
    userArr.push(newUser);
    console.log("New user Added: ");
    console.log(userArr[userArr.length - 1]);
}

function deleteUser(userArr, removeUser) {
    for (var k = 0; k < userArr.length; k++) {
        // debugger
        if (userArr[k].id == removeUser.id) {
            userArr.splice((userArr[k].id - 1), 1);
            console.log("User Deleted with ID: " + removeUser.id);
        } 
    }
}

function editUser(userArr, updateUser) {
    for (var i = 0; i < userArr.length; i++) {
        if (userArr[i].id == updateUser.id) {
            userArr[i].name = updateUser.name;
            userArr[i].address = updateUser.address;
            console.log("Updated User ID: " + userArr[i].id);
            console.log(userArr[i]);
        }
    }
}

function callUser(user, getUser) {
    for (var i = 0; i < user.length; i++) {
        if (user[i].id == getUser.id) {
            console.log("User Name with ID = " + getUser.id + ":");
            console.log(user[i].name);
            if (user[i].hasOwnProperty("friends")) {
                console.log("User friends:");
                for (var j = 0; j < user[i].friends.length; j++) {
                    for (var k = 0; k < user.length; k++) {
                        if (user[i].friends[j] == user[k].id) {
                            console.log(user[k].name);
                        }
                    }
                }
            }
            if (user[i].hasOwnProperty("notification")) {
                console.log("Notifications: ")
                for (var l = 0; l < user[i].notification.length; l++) {
                    console.log(user[i].notification[l].text);
                    console.log(user[i].notification[l].time);
                }
            }
        }
    }
    return "Invalid Input";
}

function insertUser() {
    var newUser = {
        id: 4,
        name: "Raju",
        address: "Dallas"
    }
    addUser(userDetails, newUser);
}
insertUser();

function removeUser() {
    var removeUser = {
        id: 2
    }
    deleteUser(userDetails, removeUser);
}
removeUser();

function updateUser() {
    var updateUser = {
        id: 1,
        name: "Farhan",
        address: "Chicago"
    }
    editUser(userDetails, updateUser);
}
updateUser();

function getUser() {
    var getUser = {
        id: 3
    }
    callUser(userDetails, getUser);
}
getUser();

console.log("\nUpdated User Details:")
console.log(userDetails);