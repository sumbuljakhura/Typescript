// Question#24
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
let furite="mango"
console.log("Test for equality with strings (True):");
console.log(furite=="apple")
console.log("Test for equality with strings (false):");
console.log(furite=="apple");
// • Tests using the lower case function
console.log("Test using the lower case function (True):");
console.log("MANGO".toLowerCase() === "mango");
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

let num=22;
console.log("Numerical test for equality (True):");
console.log(num==22)
console.log("Numerical test for inequality (False):");
console.log(num !== 10);

console.log("Greater than test (True):");
console.log(num > 10);

console.log("Less than test (True):");
console.log(num < 10);

console.log("Greater than or equal to test (True):");
console.log(num >= 10);

console.log("Less than or equal to test (True):");
console.log(num <= 10);
// • Tests using "and" and "or" operators
if(num==10 && num==num){
    console.log("both Conditional is ",true)
}
else{
    console.log("both Conditional is",false)
}
if(num==10 || num==22){
    console.log("Conditional",true)
}
else{
    console.log("Conditional",false)
}
// • Test whether an item is in a array
const whether=["sunny", "rainy", "windy", "stormy",  "cloudy"];
console.log("Test whether 'rainy' is in the array (True):");
console.log(whether.includes ("rainy"));
// • Test whether an item is not in a array
console.log("Test whether 'moon' is in the array (false):");
console.log(whether.includes ("moon"));

