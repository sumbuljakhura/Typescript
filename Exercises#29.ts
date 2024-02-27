// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
let username:Array <string>=["Admin","Sumbul","Saleem","Admin2","Admin3"];
for (let usernames of username){
    if (usernames=="Admin"){
        console.log(`Hello ${username}, welcome back!`);

    }
    else {
        console.log(`Hello ${username}, thank you for logging in.`);
    }

}