// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
let currentUsers:Array <string>=["Admin","Sumbul","Saleem","Admin2","Admin3"];
let newuser:Array<string>=["sumbul","ali","noor","sana"]
// Check if each new username is unique
for (let newUser of newuser) {
    if (currentUsers.includes(newUser)) {
        console.log(`Sorry, the username '${newUser}' is already taken. Please choose a different username.`);
    } else {
        console.log(`The username '${newUser}' is available and has been registered.`);
        currentUsers.push(newUser);
    }
}

// Display the updated list of current users
console.log("Updated list of current users:", currentUsers);
