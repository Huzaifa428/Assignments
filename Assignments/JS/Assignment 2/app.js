// 8-11 chapter start

// Prompt the user to enter a number

// var number = prompt("Enter a number to display its multiplication table:", "5");

// // Convert the input to a number
// number = parseInt(number);

// // If the input is not a number, default to 5
// if (isNaN(number)) {
//     number = 5;
// }

// // Display the multiplication table for the given number
// document.write("<h2>Multiplication Table of " + number + "</h2>");
// for (var i = 1; i <= 10; i++) {
//     document.write(number + " x " + i + " = " + (number * i) + "<br>");
// }

// // End

// // Prompt the user to enter a city name
// var city = prompt("Enter your city name:");

// // Check if the entered city is "Karachi"
// if (city.toLowerCase() === "karachi") {
//     alert("Welcome to city of lights");
// } else {
//     alert("Welcome to " + city);
// }

// // End

// // Prompt the user to enter their gender
// var gender = prompt("Enter your gender:");

// // Check the gender and display the appropriate message
// if (gender.toLowerCase() === "male") {
//     alert("Good Morning Sir.");
// } else if (gender.toLowerCase() === "female") {
//     alert("Good Morning Ma’am.");
// } else {
//     alert("Good Morning!");
// }

// // Prompt the user to enter the color of the road traffic signal
// var signalColor = prompt("Enter the color of the road traffic signal:");

// // Check the color and display the appropriate message
// if (signalColor.toLowerCase() === "red") {
//     alert("Must Stop.");
// } else if (signalColor.toLowerCase() === "yellow") {
//     alert("Ready to move.");
// } else if (signalColor.toLowerCase() === "green") {
//     alert("Move now.");
// } else {
//     alert("Invalid color entered.");
// }

// // End


// var fuel = prompt("Enter the remaining fuel in your car (in litres):");

// // Check if the remaining fuel is less than 0.25 litres
// if (parseFloat(fuel) < 0.25) {
//     alert("Please refill the fuel in your car.");
// }

// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }

// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }

// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// if (c === 13) {
//     alert("condition 2 is true");
// }
// if (++c < 14) {
//     alert("condition 3 is true");
// }
// if (c === 14) {
//     alert("condition 4 is true");
// }


// // End

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;

// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }

// if (true) {
//     alert("True");
// }
// if (false) {
//     alert("False");
// }

// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }

// var marks1 = parseFloat(prompt("Enter marks obtained in subject 1:"));
// var marks2 = parseFloat(prompt("Enter marks obtained in subject 2:"));
// var marks3 = parseFloat(prompt("Enter marks obtained in subject 3:"));

// // Prompt the user to enter total marks
// var totalMarks = parseFloat(prompt("Enter total marks:"));

// // Calculate the total obtained marks and percentage
// var obtainedMarks = marks1 + marks2 + marks3;
// var percentage = (obtainedMarks / totalMarks) * 100;

// // Determine the grade based on the percentage
// var grade, remarks;

// if (percentage >= 80) {
//     grade = "A+";
//     remarks = "Excellent";
// } else if (percentage >= 70) {
//     grade = "A";
//     remarks = "Good";
// } else if (percentage >= 60) {
//     grade = "B";
//     remarks = "You need to improve";
// } else {
//     grade = "Fail";
//     remarks = "Sorry";
// }

// // Display the result on the page
// document.write("<h2>Marks Sheet</h2>");
// document.write("Total Marks: " + totalMarks + "<br>");
// document.write("Marks Obtained: " + obtainedMarks + "<br>");
// document.write("Percentage: " + percentage.toFixed(2) + "%<br>");
// document.write("Grade: " + grade + "<br>");
// document.write("Remarks: " + remarks + "<br>");


// // End

// // Store the secret number
// var secretNumber = Math.floor(Math.random() * 10) + 1;

// // Prompt the user to guess the secret number
// var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

// // Check the user's guess
// if (userGuess === secretNumber) {
//     alert("Bingo! Correct answer");
// } else if (userGuess + 1 === secretNumber) {
//     alert("Close enough to the correct answer");
// } else {
//     alert("Try again! The secret number was " + secretNumber);
// }

// // End

// // Prompt the user to enter a number
// var number = parseInt(prompt("Enter a number to check if it is divisible by 3:"));

// // Check if the number is divisible by 3
// if (number % 3 === 0) {
//     alert("The number is divisible by 3.");
// } else {
//     alert("The number is not divisible by 3.");
// }

// // End

// // Prompt the user to enter the name and total score of Team A
// var teamAName = prompt("Enter the name of Team A:");
// var teamAScore = parseInt(prompt("Enter the score of " + teamAName + ":"));

// // Prompt the user to enter the name and total score of Team B
// var teamBName = prompt("Enter the name of Team B:");
// var teamBScore = parseInt(prompt("Enter the score of " + teamBName + ":"));

// // Determine the result based on the scores
// if (teamAScore > teamBScore) {
//     alert(teamAName + " has won the game!");
// } else if (teamBScore > teamAScore) {
//     alert(teamBName + " has won the game!");
// } else {
//     alert("It's a tie between " + teamAName + " and " + teamBName + "!");
// }

// // End

// // Prompt for team names and total scores
// var teamA = prompt("Enter name of Team A:");
// var teamAScore = parseInt(prompt("Enter the total score of " + teamA + ":"));
// var teamB = prompt("Enter name of Team B:");
// var teamBScore = parseInt(prompt("Enter the total score of " + teamB + ":"));

// // Determine the winner or if it's a tie
// if (teamAScore > teamBScore) {
//     alert(teamA + " wins the game!");
// } else if (teamAScore < teamBScore) {
//     alert(teamB + " wins the game!");
// } else {
//     alert("It's a tie between " + teamA + " and " + teamB + "!");
// }

// // Declare variables for string, number, and boolean
// var myString = "Hello, world!";
// var myNumber = 42;
// var myBoolean = true;

// // Check and display the types of variables
// alert("The type of myString is: " + typeof myString);
// alert("The type of myNumber is: " + typeof myNumber);
// alert("The type of myBoolean is: " + typeof myBoolean);

// // End

// // Prompt user to enter a number
// var number = parseInt(prompt("Enter a number to check if it's even or odd:"));

// // Check if the number is even or odd
// if (number % 2 === 0) {
//     alert(number + " is an even number.");
// } else {
//     alert(number + " is an odd number.");
// }

// // Prompt user to enter temperature
// var temperature = parseInt(prompt("Enter the current temperature:"));

// // Check the temperature and display the appropriate message
// if (temperature > 40) {
//     alert("It is too hot outside.");
// } else if (temperature > 30) {
//     alert("The Weather today is Normal.");
// } else if (temperature > 20) {
//     alert("Today’s Weather is cool.");
// } else if (temperature > 10) {
//     alert("OMG! Today’s weather is so Cool.");
// } else {
//     alert("It’s freezing outside!");
// }

// // Prompt user for two numbers and an operation
// var num1 = parseFloat(prompt("Enter the first number:"));
// var num2 = parseFloat(prompt("Enter the second number:"));
// var operation = prompt("Enter the operation (+, -, *, /, %):");

// // Initialize result variable
// var result;

// // Perform the calculation based on the selected operation
// if (operation === "+") {
//     result = num1 + num2;
// } else if (operation === "-") {
//     result = num1 - num2;
// } else if (operation === "*") {
//     result = num1 * num2;
// } else if (operation === "/") {
//     if (num2 !== 0) {
//         result = num1 / num2;
//     } else {
//         alert("Division by zero is not allowed.");
//         result = "Error";
//     }
// } else if (operation === "%") {
//     result = num1 % num2;
// } else {
//     alert("Invalid operation.");
//     result = "Error";
// }

// // Show the result
// alert("The result is: " + result);


// // End

// // Prompt user to input the day name
// var day = prompt("Enter the name of the day:").toLowerCase();

// // Check the day and display the appropriate message
// if (day === "monday" || day === "tuesday" || day === "wednesday" || day === "thursday" || day === "friday") {
//     alert("It’s a week day");
// } else if (day === "saturday") {
//     alert("It’s weekend");
// } else if (day === "sunday") {
//     alert("Yay! It’s a holiday");
// } else {
//     alert("Invalid day entered!");
// }

// // Prompt user to input their score
// var score = parseInt(prompt("Enter your score:"));

// // Check if the score is greater than 50 and show appropriate message
// if (score > 50) {
//     alert("You are passed");
// } else {
//     alert("Try again!");
// }

// // Prompt user to input two numbers
// var num1 = parseFloat(prompt("Enter the first number:"));
// var num2 = parseFloat(prompt("Enter the second number:"));

// // Compare the numbers and show appropriate message
// if (num1 > num2) {
//     alert("The greater number of " + num1 + " and " + num2 + " is " + num1 + ".");
// } else if (num2 > num1) {
//     alert("The greater number of " + num1 + " and " + num2 + " is " + num2 + ".");
// } else {
//     alert("The numbers " + num1 + " and " + num2 + " are equal.");
// }

// // Prompt user for language code
// var languageCode = prompt("Enter the language code (e.g., 'es' for Spanish, 'de' for German, 'en' for English):").toLowerCase();

// // Display "Hello, World" in the given language
// if (languageCode === "es") {
//     alert("¡Hola, Mundo!");
// } else if (languageCode === "de") {
//     alert("Hallo, Welt!");
// } else if (languageCode === "en") {
//     alert("Hello, World!");
// } else {
//     alert("Hello, World! (Default in English)");
// }


// // End

// // Prompt user to enter a number
// var number = parseFloat(prompt("Enter a number:"));

// // Check if the number is positive or negative
// if (number > 0) {
//     alert(number + " is a positive number.");
// } else if (number < 0) {
//     alert(number + " is a negative number.");
// } else {
//     alert("The number is zero.");
// }

// // Prompt user for noun and number
// var noun = prompt("Enter a noun:");
// var number = parseInt(prompt("Enter a number:"));

// // Check if the number is 1 or not to pluralize the noun
// if (number === 1) {
//     alert(number + " " + noun); // No pluralization for 1
// } else {
//     // Add "s" to the noun for pluralization
//     alert(number + " " + noun + "s");
// }

//  End

// 12-13 chapter start

// Task 1: Check if a Number is Divisible by 3
// var number1 = parseInt(prompt("Enter a number to check divisibility by 3:"));
// if (number1 % 3 === 0) {
//     alert("Number is divisible by 3");
// } else {
//     alert("Number is not divisible by 3");
// }

// // Task 2: Check if a Number is Even or Odd
// var number2 = parseInt(prompt("Enter a number to check if it's even or odd:"));
// if (number2 % 2 === 0) {
//     alert(number2 + " is an even number.");
// } else {
//     alert(number2 + " is an odd number.");
// }

// // Task 3: Check if Age is Greater than 18
// var age = parseInt(prompt("Enter your age:"));
// if (age > 18) {
//     alert("Old enough");
// } else {
//     alert("Too young");
// }

// // Task 4: Special Greeting for Specific Name
// var name = prompt("Enter your name:");
// if (name === "YourName") {  // Replace "YourName" with your actual name
//     alert("Hello, " + name + "! Welcome!");
// }

// // Task 5: Divisible by 3 using Switch Case
// var number3 = parseInt(prompt("Enter a number to check divisibility by 3 using switch case:"));
// switch (true) {
//     case (number3 % 3 === 0):
//         alert("Number is divisible by 3");
//         break;
//     default:
//         alert("Number is not divisible by 3");
// }

// // Task 6: Check if Input is a Number, Uppercase, or Lowercase Letter
// var character = prompt("Enter a character (number, uppercase, or lowercase letter):");
// var charCode = character.charCodeAt(0);

// if (charCode >= 48 && charCode <= 57) {
//     alert(character + " is a number.");
// } else if (charCode >= 65 && charCode <= 90) {
//     alert(character + " is an uppercase letter.");
// } else if (charCode >= 97 && charCode <= 122) {
//     alert(character + " is a lowercase letter.");
// } else {
//     alert(character + " is neither a number nor a letter.");
// }


// //  End

// // Prompt user for input
// var number1 = parseFloat(prompt("Enter the first number:"));
// var number2 = parseFloat(prompt("Enter the second number:"));
// var operator = prompt("Enter the operator (+, -, *, /, %):");

// // Perform calculation using switch case
// switch (operator) {
//     case "+":
//         alert("Result: " + (number1 + number2));
//         break;
//     case "-":
//         alert("Result: " + (number1 - number2));
//         break;
//     case "*":
//         alert("Result: " + (number1 * number2));
//         break;
//     case "/":
//         if (number2 !== 0) {
//             alert("Result: " + (number1 / number2));
//         } else {
//             alert("Error: Division by zero is not allowed.");
//         }
//         break;
//     case "%":
//         alert("Result: " + (number1 % number2));
//         break;
//     default:
//         alert("Invalid operator.");
// }  

// // Prompt user to input time in 24-hour format
// var time = parseInt(prompt("Enter time in 24-hour format (e.g., 1900 for 7 PM):"));

// // Check and display corresponding time of day using if, else, else if
// if (time >= 0 && time < 1200) {
//     alert("Good Morning!");
// } else if (time >= 1200 && time < 1700) {
//     alert("Good Afternoon!");
// } else if (time >= 1700 && time < 2000) {
//     alert("Good Evening!");
// } else if (time >= 2000 && time <= 2359) {
//     alert("Good Night!");
// } else {
//     alert("Invalid time. Please enter time between 0000 and 2359.");
// }

// // End

// // Task 9: Leap Year Check
// var year = parseInt(prompt("Enter a year to check if it's a leap year:"));
// if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//     alert(year + " is a leap year.");
// } else {
//     alert(year + " is not a leap year.");
// }

// // Task 10: Password Validation
// var correctPassword = "myPassword123";
// var userPassword = prompt("Please enter your password:");
// if (userPassword === "") {
//     alert("Please enter your password");
// } else if (userPassword === correctPassword) {
//     alert("Correct! The password you entered matches the original password");
// } else {
//     alert("Incorrect password");
// }

// // Task 11: Else Statement Addition
// var firstName = "Ali";
// if (firstName === "Fahad") {
//     document.write("Hello Fahad!");
// } else {
//     document.write("You are not Fahad");
// }

// // Task 12: Fix the if/else Statement
// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
// } else {
//     greeting = "Good evening";
// }
// console.log(greeting);  // Output will be "Good day"

// // End

// // Task 13: Accept two integers and display the larger, or if equal
// var num1 = parseInt(prompt("Enter the first integer:"));
// var num2 = parseInt(prompt("Enter the second integer:"));

// if (num1 > num2) {
//     alert(num1 + " is larger");
// } else if (num2 > num1) {
//     alert(num2 + " is larger");
// } else {
//     alert("Both integers are equal");
// }

// // Task 14: Check if a number is positive, negative, or zero
// var number = parseInt(prompt("Enter a number:"));
// if (number > 0) {
//     alert("The number is positive");
// } else if (number < 0) {
//     alert("The number is negative");
// } else {
//     alert("The number is zero");
// }

// // Task 15: Meal time based on the hour
// var hour = parseInt(prompt("What is the current hour (in 24-hour format)?"));
// if (hour >= 6 && hour <= 9) {
//     alert("Breakfast is served.");
// } else if (hour >= 11 && hour <= 13) {
//     alert("Time for lunch.");
// } else if (hour >= 17 && hour <= 20) {
//     alert("It's dinner time.");
// } else {
//     alert("Sorry, you'll have to wait, or go get a snack.");
// }

// // Task 16: Check the type of a variable
// var variable = prompt("Enter a value (number, string, boolean, or undefined):");
// if (isNaN(variable)) {
//     if (variable === "true" || variable === "false") {
//         alert("The type is boolean");
//     } else if (variable === "") {
//         alert("The type is undefined");
//     } else {
//         alert("The type is string");
//     }
// } else {
//     alert("The type is number");
// }

// // Task 17: Check if the character is a vowel
// var character = prompt("Enter a single character:");
// if (["a", "e", "i", "o", "u"].includes(character.toLowerCase())) {
//     alert("True: The character is a vowel.");
// } else {
//     alert("False: The character is not a vowel.");
// }

// // Task 18: Comparison operator to check if 10 is not equal to 8
// alert(10 !== 8); // Displays true since 10 is not equal to 8

// // Task 19: Switch statement to display month name based on the number
// var monthNumber = parseInt(prompt("Enter a number (1-12) to get the month name:"));
// switch (monthNumber) {
//     case 1: alert("January"); break;
//     case 2: alert("February"); break;
//     case 3: alert("March"); break;
//     case 4: alert("April"); break;
//     case 5: alert("May"); break;
//     case 6: alert("June"); break;
//     case 7: alert("July"); break;
//     case 8: alert("August"); break;
//     case 9: alert("September"); break;
//     case 10: alert("October"); break;
//     case 11: alert("November"); break;
//     case 12: alert("December"); break;
//     default: alert("Invalid month number! Please enter a number between 1 and 12.");
// }

// // End

//Task 20: Use a ternary operator to check if age is below 18
var age = parseInt(prompt("Enter your age:"));

var result = age < 17 ? "You are too young" : "You are old enough";

alert(result);

