// Question#26
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
let alien_colo="green";
// If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
if(alien_colo == "green"){
    console.log("Congratulations! You just earned 5 points.")
    

}
else {
    console.log("Congratulations! You just earned 10 points for shooting an alien that is not green.");
}

let alien_colos: string = 'red';

// Check the color of the alien
if (alien_colos === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
} else {
    console.log("Congratulations! You just earned 10 points for shooting an alien that is not green.");
}
