/*
Exercise 1: Add strings to the array

1) Add 'pizza' and 'cheeseburger' to the `foods` array. 

Note: 'pizza' should be the first item in the array, followed by 'cheeseburger'.
*/

const foods = [];

foods.push("pizza", "cheeseburger");

/*
Exercise 2: Insert at the beginning

Insert the string 'taco' at the beginning of the `foods` array.
*/

foods.unshift("taco");

/*
Exercise 3: Access an array element

1) Retrieve the 'pizza' string from the array based on its position (index) in
   the array.  

2) Assign it to a variable called `favFood`.
*/

const favFood = foods[1];

/*
Exercise 4: Insert an element between two others

1) Insert the string 'tofu' between 'pizza' and 'cheeseburger' in the array.

*/

foods.splice(2, 0, "tofu");

/*
Exercise 5: Replace elements

1) Replace 'pizza' in the `foods` array with 'sushi' and 'cupcake'.

Complete Exercise 6 in the space below:
*/

foods[1] = "sushi and cupcake";

/*
Exercise 6: Using the `slice()` method

1) Use the `slice()` method to create a new array that contains 'sushi' and 
   'cupcake'.

2) Assign it to a variable named `yummy`.
*/

const yummy = foods.slice(1, 2);

/*
Exercise 8: Finding an index

1) Using the `indexOf()` method, find the index of the string 'tofu' in the 
   `foods` array. 

2) Assign it to a variable named `soyIdx`.
*/

const soyIdx = foods.indexOf("tofu");

/*
Exercise 9: Joining elements

1) Use the `join()` method to concatenate the strings in the `foods` array, 
   separated by ' -> '. 

2) Assign the result to a variable called `allFoods`. 

Note: The final result should log as:
'taco -> sushi -> cupcake -> tofu -> cheeseburger'
*/

const arr = [...foods];

const allFoods = arr.join(" -> ");

/*
Exercise 10: Check for an element

1) Using the .includes() method, check if the `foods` array contains the string
   'soup'.

2) Assign the result to a variable called `hasSoup``.
*/

const hasSoup = foods.includes("soup");

/*
Exercise 11: Odd numbers from an array

1) Choose a method to iterate through the `nums` array.

2) Push each odd number to a new array named `odds`.

Hint: Initialize the `odds` variable to an empty array before the iteration.

Complete Exercise 11 in the space below:
*/

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];

const odds = [];

nums.forEach((num) => {
  if (num % 2 !== 0) {
    odds.push(num);
  }
});

/*
Exercise 12: FizzBuzz with arrays

1) Choose a method to iterate through the `nums` array. 

2. As you loop, sort the numbers into new arrays based on the following rules:

   - Push any number evenly divisible by 3 to an array called `fizz`.
   - Push any number evenly divisible by 5 to an array called `buzz`.
   - Push any number that is evenly divisible by 3 and 5 to an array called
     `fizzbuzz`.

   Note: A single number may meet more than one of the above rules. If it does,
         it should be placed in multiple arrays. For example, the number `15`
         will appear in the `fizz`, `buzz`, and `fizzbuzz` arrays.

Complete Exercise 12 in the space below:
*/

function sortNumbers(numbers) {
  const fizz = [];
  const buzz = [];
  const fizzbuzz = [];

  for (const number of numbers) {
    if (number % 3 === 0) {
      fizz.push(number);
    }
    if (number % 5 === 0) {
      buzz.push(number);
    }
    if (number % 3 === 0 && number % 5 === 0) {
      fizzbuzz.push(number);
    }
  }

  return { fizz, buzz, fizzbuzz };
}

const result = sortNumbers(numbers);

console.log("Exercise 12 Results:");
console.log("  fizz:", fizz);
console.log("  buzz:", buzz);
console.log("  fizzbuzz:", fizzbuzz);

/*
Exercise 13: Retrieve the Last Array

1) Assign the last nested array in the `numArrays` below to a variable named
   `numList`. As you do this, also fulfill these goals:

   - Assume you don't know how many nested arrays `numArrays` contains.
   - Do not alter the original `numArrays` array.

Complete Exercise 13 in the space below:
*/

const numArrays = [
  [100, 5, 23],
  [15, 21, 72, 9],
  [45, 66],
  [7, 81, 90],
];

const numList = numArrays[numArrays.length - 1];

console.log("Exercise 13 result:", numList);

/*
Exercise 14: Accessing within nested arrays

1) Retrieve the number `66` from the `numArrays` array. As part of this process
   do not alter the original `numArrays` array.

2) Assign it to a variable called `num`.

Complete Exercise 14 in the space below:
*/

const num = numArrays[2][1];

console.log("Exercise 14 result:", num);

/*
Exercise 15: Nested array sum

1) Use nested loops or `forEach()` methods to sum up all numbers within 
   `numArrays` nested arrays.
   
2) Assign the sum to a variable called `total`.

Hint: Be sure to declare and initialize the total variable before the iterations.

Complete Exercise 15 in the space below:
*/

let total = 0;

numArrays.forEach((innerArr) => {
  innerArr.forEach((num) => {
    total += num;
  });
});

total;

console.log("Exercise 15 result:\n", total);
