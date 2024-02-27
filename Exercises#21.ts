 // Question#22

// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

// Creating an array of fruits
const fruits: string[] = ['Apple', 'Banana', 'Orange'];

// Attempting to access an element at an invalid index
const invalid  = 5;
console.log(fruits[invalid]);  // This will result in an index error
const invalidIndex = 5;

if (invalid < fruits.length) {
  console.log(fruits[invalid]);
} else {
  console.log('Invalid index. Please provide a valid index.');
}
