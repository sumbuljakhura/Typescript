let magicians: Array<string> = ["Harry Houdini", "David Blaine", "Doug Henning", "Dai Vernon"];

function show_magicians(magicianNames: string[]): void {
    for (let magician of magicianNames) {
        console.log(magician);
    }
}

function make_great(magicianNames: string[]): string[] {
    // Return a new array with the phrase " the Great" added to each magician's name
    return magicianNames.map(magician => magician + " the Great");
}

// Call make_great with a copy of the array of magicians' names
let modifiedMagicians = make_great([...magicians]);

// Call show_magicians with the original array
console.log("Original Magicians:");
show_magicians(magicians);

// Call show_magicians with the array containing "the Great" added to each magician's name
console.log("\nModified Magicians:");
show_magicians(modifiedMagicians);
