// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

let magician:Array<string>=["Harry Houdini","David Blaine","Doug Henning","Dai Vernon"]
function magician_name(name:string){
    for(let magicians of magician){
        console.log(magicians)

    }
}
magician_name(magician);
