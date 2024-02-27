// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
function city_country(city:string,country:string){
    return `${city}, ${country}`
}
// Call your function with at least three city-country pairs, and print the value that’s returned.
let obj1=city_country("Lahore", "Pakistan");
let obj2=city_country("USA", "Canda");

let obj3=city_country("New York","Usa"); 
// Store the results in an array
let results: string[] = [obj1, obj2, obj3];

// Print the values returned by the function
for (let result of results) {
    console.log(result);
}

