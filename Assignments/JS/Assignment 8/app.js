// Question No 1

// function date() {
//     var getDate = new Date() 
//     document.write(getDate)
// }
// date()

// Question No 2

// function userName() {
//     var firstName = prompt("Enter Your First Name")
//     var lastName = prompt("Enter Your Last Name")
//     document.write(`Hello ${firstName} ${lastName}`)
// }
// userName()


// Question No 3

// function inp() {
//     var firstNum = +prompt("Enter Your first Number")
//     var secNum = +prompt("Enter Your Second Number")
//     document.write(firstNum + secNum)
// }
// inp();


// Question No 4

// var num1 = +prompt("Enter Your First Number")
// var num2 = +prompt("Enter Your second Number")
// var operate = prompt("Enter Your Operater (+, -, *, /)")

// function calculate(num1, num2, operate) {
//     switch (operate) {
//         case '+':
//             result = num1 + num2
//             break;
//         case '-':
//             result = num1 - num2;
//             break;
//         case '*':
//             result = num1 * num2;
//             break;
//         case '/':
//             result = num1 / num2;
//             break;
//         default:
//             result = "inavlid"
//             break;
//     }
//     document.write(result)
// }

// calculate(num1, num2, operate)


// Question No 5

// var number = +prompt("Enter Your Number You want to square that!") 

// function square(num) {
//     return num * num;
// }
// document.write(square(number))


// Question No 7

// var start = +prompt("Enter Your first Number")
// var end = +prompt("Enter Your Last Number")

// function displayCounting(start, end) {
//     var counting = "";
//     for(var i = start; i <= end; i++){
//         counting += i + " ";
//     }
//     return counting;
// }

// document.write(displayCounting(start, end))


// Question No 9

// var width = +prompt("Enter your Width")
// var height = +prompt("Enter your height")

// function area(width, height) {
//     return width * height;
// }

// document.write(area(width, height))


// Question No 10

// var palin = prompt("Enter a word to cheak it is palindrome or not")

// function palinromeCheaker(palin) {
    
//     var user = palin.toString().split("").reverse().join("")
//     var mystr = palin.toString()
//     if (mystr == user) {
//         document.write("Yes it is palindrome")
//     } else {
//         document.write("Not a palindrome")
//     }
// }

// palinromeCheaker(palin)


// Question No 11

// Question No 12

// function findLongestWord(str) {
//     let words = str.split(' ');
//     let longestWord = words.reduce((longest, current) => {
//         return current.length > longest.length ? current : longest;
//     });

//     return longestWord;
// }

// let exampleString = 'Web Development Tutorial';
// let result = findLongestWord(exampleString);
// document.write(result);

// Question No 14

// var radius = prompt("Enter a Circumference")

// function calculateCircumference(radius) {
//     var circumference = 2 * Math.PI * radius;
//     document.write(circumference +);
// }

// calculateCircumference(radius + "<br>")


// var area = prompt("Enter the Area")

// function calculateCircumference(area) {
//     var area = Math.PI * Math.pow(radius, 2); 
//     document.write(area);
// }

// calculateCircumference(area)




