// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

let magicians:Array<string>=["Harry Houdini","David Blaine","Doug Henning","Dai Vernon"]
function magician_name(name:string){
    for(let magicianes of magicians){
        console.log(magicianes)

    }
}
function Great(magician_names:string){
    return magician_names.map(magicianes=>magicianes+"Great ")
}
let greatMagicians = Great(magicians);
magician_name(greatMagicians);

