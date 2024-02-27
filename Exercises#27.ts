// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
let age:number=25;
if (age < 0) {
    console.log("Invalid age. Please enter a positive number.");
} else if (age < 2) {
    console.log("The person is a baby.");
} else if (age < 13) {
    console.log("The person is a teenager.");
} else if (age < 20) {
    console.log("The person is a adult.");
} else if (age < 65) {
    console.log("The person is an elder.");
} else {
    console.log("The person is a senior citizen.");
}
