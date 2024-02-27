// Question#17
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
let people:Array<string>=["Ali", "Hoorain", "shakil", "Faiza", "Ayesha", "Tooba"]
console.log("Due to the delayed arrival of the new dinner table, we can invite only two people for dinner")
while (people.length > 2) {
    const removedpeople = people.pop(); // Remove the last guest
    console.log(`Sorry, ${removedpeople}, we can't invite you to dinner.`);
}
// Print a message to the two people still on your list
people.forEach((peoples, index) => {
    console.log(`Invitation for ${peoples}: Dear ${peoples}, you are still invited to the event!`);
});

// Remove the last two names from your list
people.pop()
people.pop()

// Print the empty list to make sure it's empty
console.log("Guest list after removing all names:", people);