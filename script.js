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


// 4. Demonstrate the difference between normal
// function and arrow function when used as object
// methods (the `this` issue).

/* let obj = {
    name: "abhijeet",
    fnc: function () {
        console.log(this);
    },

    fnc2: () => {
        console.log(this);
    }
};

obj.fnc();   
 */

/* let obj = {
  fnc: function () {
    let inner = () => {
      console.log(this);
    }
    inner()
  }
}

obj.fnc() // Object */

/* let obj = {
  fnc: function () {
    function abcd() {
      console.log(this);
    }
    abcd()
  }
}

obj.fnc() // Window */

// 5. Given an array of numbers, use `map()` to create a
// new array where each number is squared.

/* let arr = [1,2,3,4,5];

let newarr = arr.map(function square(val) {
  return val*val;
})


console.log(newarr); */

// 6. Use `filter()` to get only even numbers from an
// array.

/* let arr = [1,2,3,4,5];

let newarr = arr.filter(function filter(val){
  return val%2 ===0;
})

console.log(newarr); */

// 7. Use `reduce()` to find the total salary from an array
// of numbers `[1000, 2000, 3000]`.

/* let arr = [1000, 2000, 3000];

let tSalary = arr.reduce(function reduce(acc, val){
  return  acc + val;
}, 0)

console.log(tSalary); */

// 8. Create an array of names and use `some()` and
// `every()` to test a condition (e.g., all names longer than
// 3 chars).

/* let arr = ["abhi", "suraj", "kavi", "anshu", "kansh"];

let newarr = arr.some(function some(val){
  return arr.length > 3;
})

console.log(newarr); */


/* let arr = ["abhi", "suraj", "kavi", "anshu", "kansh"];

let newarr = arr.every(function some(val){
  return arr.length > 3;
})

console.log(newarr); */


// 9. Create an object `user` and test the behavior of
// `Object.freeze()` and `Object.seal()` by
// adding/changing keys.

/* let obj = {
  name: "Abhijeet",
  age: 21,
  gender: "male",
}

Object.freeze(obj);
obj.name = "suraj"; // Not working

Object.seal(obj);
obj.social = "fb"; // Not working we cant update */


// 10. Create a nested object (`user → address → city`) and
// access the city name inside it.


/* let obj = {
  user : {
    name: "abhijeet",
  address: {
    city: "Bihar",
  }
  }
  
}

//let ans = console.log(obj.user.address.city);
let {city} = obj.user.address
console.log(city); */