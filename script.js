// 1. Write a higher-order function `runTwice(fn)` that
// takes another function and executes it two times.

/* function runTwice(fn) {
  fn();
  fn();
}

runTwice(function () {
  console.log("This is easy!");
}); */

// 2. Create one pure function that always returns the
// same output for a given input, and one impure
// function using a global variable.

/* function add(a, b) {
  console.log(a + b);
}

add(1, 3);
add(1, 3);

let counter = 0;
function abcd(a) {
  counter++;
  console.log(counter + a);
}

abcd(1);
abcd(1); */


// 3. Write a function that uses object destructuring
// inside parameters to extract and print `name` and
// `age`.

/* function oDes({name, age}) {
    console.log(name, age);
}

oDes({name: "Abhijeet", age: 21,}); */
























/* 


4. Demonstrate the difference between normal
function and arrow function when used as object
methods (the `this` issue).
5. Given an array of numbers, use `map()` to create a
new array where each number is squared.
6. Use `filter()` to get only even numbers from an
array.
7. Use `reduce()` to find the total salary from an array
of numbers `[1000, 2000, 3000]`.
8. Create an array of names and use `some()` and
`every()` to test a condition (e.g., all names longer than
3 chars).
9. Create an object `user` and test the behavior of
`Object.freeze()` and `Object.seal()` by
adding/changing keys.
10. Create a nested object (`user → address → city`) and
access the city name inside it. */
