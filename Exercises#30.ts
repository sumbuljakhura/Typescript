// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!


let users:Array <string>=["Admin","Sumbul","Saleem","Admin2","Admin3"];

// Add an if test to check if the list of users is empty
if (users.length === 0) {
    console.log("We need to find some users!");
} else {
    // Iterate over the users
    for (const user of users) {
        console.log(`Processing user: ${user}`);
    }
}

// Remove all usernames from the array
users = [];

// Check again if the list is empty and print the message accordingly
if (users.length === 0) {
    console.log("We need to find some users!");
} else {
    // This block won't be executed since the list is empty now
    for (const user of users) {
        console.log(`Processing user: ${user}`);
    }
}
