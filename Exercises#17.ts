// // Question#18
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

let locations:Array<string>=["Pakistan","USA","Canda","Paris","New York"];
// Print your array in its original order.
console.log("original order",locations)
// • Print your array in alphabetical order without modifying the actual list.
console.log("alphabetical order",[...locations].sort())
// • Show that your array is still in its original order by printing it.
console.log("Original Order (unchanged):", locations);

// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse Alphabetical Order:",[...locations].sort().reverse())

// • Show that your array is still in its original order by printing it again.

console.log("Original Order (unchanged):", locations);
// • Reverse the order of your list. Print the array to show that its order has changed.
console.log("Reversed Order:",locations.reverse())
// Reverse the order again to get back to the original order
console.log("again to get back to the original order:",locations.reverse())
// Sort the array in alphabetical order

console.log("alphabetical order",locations.sort())
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
locations.sort((a, b) => b.localeCompare(a));
console.log("Sorted in Reverse Alphabetical Order:",locations);


