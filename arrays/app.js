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
