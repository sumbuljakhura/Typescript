// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

function make_album(artist:string,title:string,tracks:number){
    let album: { artist: string; title: string; tracks?: number } = {
        artist: artist,
        title: title
}
   // Add the number of tracks to the album object if provided
   if (tracks !== undefined) {
    album.tracks = tracks;
}

return album;
}

// Use the function to make three dictionaries representing different albums
let album1 =make_album("Artist1", "Album1");
let album2 =make_album("Artist2", "Album2", 12); // Example with tracks
let album3 =make_album("Artist3", "Album3");

// Print each return value to show that Objects are storing the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);

// Make a new function call that includes the number of tracks on an album
let album4 = make_album("Artist4", "Album4", 8);
console.log(album4);