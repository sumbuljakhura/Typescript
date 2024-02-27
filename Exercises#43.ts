// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
// Define a function called orderSandwich
function orderSandwich(...items: string[]): void {
    // Print a summary of the sandwich with the provided items
    console.log("Sandwich Order:");
    if (items.length > 0) {
        console.log(`- ${items.join('\n- ')}`);
    } else {
        console.log("No items selected. Please choose some items for your sandwich.");
    }
    console.log(); // Add a newline for better readability
}

// Call the function three times with a different number of arguments each time
orderSandwich("Turkey", "Cheese", "Lettuce", "Tomato", "Mayo");
orderSandwich("Ham", "Swiss Cheese", "Mustard");
orderSandwich("Chicken", "Bacon");
