// Question#23
// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

let car="subaru";
console.log("Its car = 'subaru'?I predict True")
console.log(car== "subaru");
// Test 2: Check if car is not equal to 'toyota'
console.log("Is car != 'toyota'? I predict True.");
console.log(car !== 'toyota');
// Test 3: Check if car is equal to 'honda'
console.log("Is car == 'honda'? I predict False.");
console.log(car === 'honda');
// Test 4: Check if car is not equal to 'subaru'
console.log("Is car != 'subaru'? I predict False.");
console.log(car !== 'subaru');
// Test 5: Check if the length of car is greater than 3
console.log("Is car length > 3? I predict True.");
console.log(car.length > 3);

// Test 6: Check if the length of car is less than or equal to 5
console.log("Is car length <= 5? I predict True.");
console.log(car.length <= 5);

// Test 7: Check if car is equal to 'Subaru' (case-sensitive)
console.log("Is car == 'Subaru'? I predict False.");
console.log(car === 'Subaru');

// Test 8: Check if car is undefined
console.log("Is car undefined? I predict False.");
console.log(car === undefined);

// Test 9: Check if car is truthy
console.log("Is car truthy? I predict True.");
console.log(!!car);

// Test 10: Check if car is falsy
console.log("Is car falsy? I predict False.");
console.log(!car);