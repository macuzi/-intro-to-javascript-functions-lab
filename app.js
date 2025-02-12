/*
Exercise 1: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/

function isAdult(age) {
  return age >= 18 ? "Adult" : "Minor";
}

console.log("Exercise 1 Result:", isAdult(22));

/*
Exercise 2: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/

function isCharAVowel(char) {
  const vowels = ["a", "e", "i", "o", "u"];
  return vowels.includes(char);
}

/*
Exercise 3: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/

function generateEmail(name, domain) {
  return `${name}${domain}`;
}

/*
Exercise 4: greetUser()

Define a function called greetUser. It should take a name and a 
time of day (morning, afternoon, evening) and return a personalized 
greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/

function greetUser(name, timeOfDay = "morning") {
  return `Good ${timeOfDay}, ${name}`;
}

/*
Exercise 5: maxOfThree()

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:

Providing two options here...
*/

// more concise

function maxOfThree(nums) {
  return Math.max(...nums);
}

const numbers = [17, 4, 9];

console.log("Exercise 5 Result:", maxOfThree([5, 10, 8]));

// for more nuanced data

const max = numbers.reduce((accumulator, currentValue) => {
  return Math.max(accumulator, currentValue);
}, numbers[0]);

//max => 17

/*
Exercise 6: calculateTip()

Create a function called calculateTip. It should take two arguments: 
the bill amount and the tip percentage (as a whole number). 
The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/

function calculateTip(bill, tipPercentage) {
  const tipAmount = bill * (tipPercentage / 100);
  return tipAmount;
}

console.log("Exercise 7 Result:", calculateTip(50, 20));

/*
Exercise 8: convertTemperature()

Write a function named convertTemperature. 
It takes two arguments: a temperature and a string representing the 
scale ('C' for Celsius, 'F' for Fahrenheit). 
Convert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

Complete the exercise in the space below:
*/

function convertTemperature(temperature, scale) {
  if (scale === "C") {
    return (temperature * 9) / 5 + 32;
  }
  return ((temperature - 32) * 5) / 9;
}

console.log("Exercise 8 Result:", convertTemperature(32, "F"));

/*
Exercise 8: basicCalculator()

Create a function named basicCalculator. 
It should take three arguments: two numbers and a string representing 
an operation ('add', 'subtract', 'multiply', 'divide'). 
Perform the provided operation on the two numbers. 
In operations where the order of numbers is important, 
treat the first parameter as the first operand and the 
second parameter as the second operand.
*/

function basicCalculator(num1, num2, operation) {
  switch (operation) {
    case "add":
      return num1 + num2;
    case "subtract":
      return num1 - num2;
    case "multiply":
      return num1 * num2;
    case "divide":
      if (num2 === 0) {
        throw new Error("Division by zero");
      }
      return num1 / num2;
    default:
      throw new Error("Invalid operation");
  }
}

console.log("Exercise 9 Result:", basicCalculator(10, 5, "subtract"));
