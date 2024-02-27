// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirts(Size:string="large", message:string="I love TypeScript"){
    console.log(`The shirt size is ${Size} and it has the message: "${message}".`);
}
// Call the function to create a large shirt with the default message
make_shirts();

// Call the function to create a medium shirt with the default message
make_shirts("Medium");

// Call the function to create a shirt of any size with a different message
make_shirts("Small", "JavaScript is fun!");