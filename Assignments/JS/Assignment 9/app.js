
// 1
// function power(a, b) {
//     let result = 1;
    
//     for (let i = 0; i < Math.abs(b); i++) {
//         result *= a;
//     }
//     if (b < 0) {
//         return 1 / result;
//     }

//     return result;
// }

// document.write(power(2, 3));   document.write(power(3, -2)); 
// document.write(power(5, 0));  

// 2
// function isLeapYear(year) {
   
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//         return true;  // It is a leap year
//     } else {
//         return false; // It is not a leap year
//     }

// document.write(isLeapYear(2020));
// document.write(isLeapYear(2023));
// document.write(isLeapYear(1900)); 
// document.write(isLeapYear(2000)); 

// 3

// function calculateSemiPerimeter(a, b, c) {
//     return (a + b + c) / 2;
// }

// function calculateArea(a, b, c) {

//     let S = calculateSemiPerimeter(a, b, c);

//     let area = Math.sqrt(S * (S - a) * (S - b) * (S - c));

//     return area;
// }


// let a = 5;
// let b = 6;
// let c = 7;

// let area = calculateArea(a, b, c);
// document.write("The area of the triangle is: " + area);\


// 4

// function calculateAverage(marks) {
//     let sum = marks.reduce((a, b) => a + b, 0);  
//     return sum / marks.length;  
// }


// function calculatePercentage(marks, totalMarks) {
//     let sum = marks.reduce((a, b) => a + b, 0);  
//     return (sum / totalMarks) * 100;  
// }

// function mainFunction() {

//     let marks = [80, 90, 85];  
//     let totalMarks = 300;  

//     let average = calculateAverage(marks);

//     let percentage = calculatePercentage(marks, totalMarks);

// document.write(`Marks: ${marks}`);
// document.write(`Average: ${average}`);
// document.write(`Percentage: ${percentage.toFixed(2)}%`);  
// }

// mainFunction();


// 5
// function customIndexOf(str, char) {
   
//     for (let i = 0; i < str.length; i++) {
       
//         if (str[i] === char) {
//             return i;  
//         }
//     }
    
//     return -1;  
// }


// let result = customIndexOf("hello", "e");
// console.log(result);  

// result = customIndexOf("hello", "a");
// console.log(result);  

// 6
// function removeVowels(sentence) {
 
//     const vowels = 'aeiouAEIOU';
    
//     let result = sentence.split('').filter(char => !vowels.includes(char)).join('');
    
//     return result;
// }

// let sentence = "Hello, how are you?";
// let result = removeVowels(sentence);
// console.log(result); 

// 7
// function countConsecutiveVowels(sentence) {
   
//     const vowels = 'aeiouAEIOU';
//     let count = 0;
    
   
//     for (let i = 0; i < sentence.length - 1; i++) {
//         let char1 = sentence[i];
//         let char2 = sentence[i + 1];
        
     
//         switch (true) {
//             case vowels.includes(char1) && vowels.includes(char2):
//                 count++;  
//                 break;
//             default:
               
//                 break;
//         }
//     }
    
//     return count;
// }


// let sentence = "I am learning JavaScript!";
// let result = countConsecutiveVowels(sentence);
// console.log(result); 

// 8

// function toMeters(km) {
//     return km * 1000; 
// }


// function toFeet(km) {
//     return km * 3280.84; 
// }


// function toInches(km) {
//     return km * 39370.1;
// }


// function toCentimeters(km) {
//     return km * 100000; 
// }


// function mainFunction() {
 
//     let km = parseFloat(prompt("Enter the distance between two cities in kilometers:"));

//     console.log(`Distance in Meters: ${toMeters(km)} meters`);
//     console.log(`Distance in Feet: ${toFeet(km)} feet`);
//     console.log(`Distance in Inches: ${toInches(km)} inches`);
//     console.log(`Distance in Centimeters: ${toCentimeters(km)} centimeters`);
// }

// mainFunction();

// 9

// function calculateOvertimePay(hoursWorked) {
//     const regularHours = 40;
//     const overtimeRate = 12; 

//     if 
//         let overtimeHours = hoursWorked - regularHours;
        
//         let overtimePay = overtimeHours * overtimeRate;
        
//         return overtimePay;
//     } else {
   
//         return 0;
//     }
// }


// function mainFunction() {

//     let hoursWorked = parseInt(prompt("Enter the number of hours worked:"));
    

//     let overtimePay = calculateOvertimePay(hoursWorked);
    
//     if (overtimePay > 0) {
//         console.log(`Overtime Pay: Rs. ${overtimePay}`);
//     } else {
//         console.log("No overtime pay. Employee worked 40 hours or less.");
//     }
// }


// mainFunction();

// 10
// function calculateCurrencyNotes(amount) {

//     let totalAmount = amount * 100;
    
//     let hundredNotes = Math.floor(totalAmount / 100);
//     totalAmount -= hundredNotes * 100;
    

//     let fiftyNotes = Math.floor(totalAmount / 50);
//     totalAmount -= fiftyNotes * 50;
    
//     let tenNotes = Math.floor(totalAmount / 10);
//     totalAmount -= tenNotes * 10;
//     )
//     if (totalAmount > 0) {
//         console.log("Amount cannot be withdrawn with available denominations.");
//         return;
//     }
    
    
//     return { hundredNotes, fiftyNotes, tenNotes };
// }

// function mainFunction() {

//     let amount = parseInt(prompt("Enter the amount to be withdrawn (in hundreds):"));
    
//     let result = calculateCurrencyNotes(amount);
    
//     if (result) {
//         console.log(`Number of 100 denomination notes: ${result.hundredNotes}`);
//         console.log(`Number of 50 denomination notes: ${result.fiftyNotes}`);
//         console.log(`Number of 10 denomination notes: ${result.tenNotes}`);
//     }
// }

// mainFunction();



