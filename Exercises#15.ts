// Initial guest list
let people: Array<string> = ["Hoorain", "Faiza", "Ayesha", "Tooba"];

// Notify initial guests about the bigger dinner table
for (let person of people) {
    console.log(`Hello, ${person}, we found a bigger dinner table!`);
}

// Add a new person to the beginning of the array
let newPeopleStart: Array<string> = ["Ali"];
people.unshift(...newPeopleStart);

// Add a new person to the middle of the array
let newPeopleMiddle: Array<string> = ["Shakil"];
people.splice(Math.floor(people.length / 2), 0, ...newPeopleMiddle);

// Notify all guests about the invitation
people.forEach((guest, index) => {
    console.log(`Invitation for Guest ${index + 1}: Dear ${guest}, you are invited to the event!`);
});

console.log(people);
