
// var firstNames = ["Hello World"]                  //Answer:1
// for(var i=0; i < 5; i++){
//    document.write(firstNames + "<br>")
//    }
    

// for(var i=1; i<= 10; i++){                        //Answer:2
//    document.write( i +  "<br>")
//    }


                                                     //Answer:3

// var number = parseInt(prompt("Enter a number to print its multiplication table:"));
// var length = parseInt(prompt("Enter length of the table:"));


// if (isNaN(number) || isNaN(length)) {
//     document.write("Please enter valid numbers.");
// } else {
//     document.write(`<h2>Multiplication Table of ${number}</h2> <h3>Length ${length}</h3>`);
//     for (var i = 1; i <= length; i++) {
//         document.write(`${number} x ${i} = ${number * i} <br>`);
//     }
// }


// var firstNames =  ["Nokia","Samsung","Apple","Sony","Huawei"]             //Answer:4

// for(var i=0; i < firstNames.length; i++){
//     document.write(firstNames[i] + "<br>")
// }


// var fruits = ["apple","banana","mango","orange","strawberry"]             //Answer:5

// for (var i=0; i < fruits.length; i++){
// document.write(fruits[i] + "<br>")
// }
// document.write("<br>");

// for(var i = 0; i < fruits.length; i++){
// document.write("Element at index " + i + " is " + fruits[i] + "<br>")
// }


// var number = parseInt(prompt("Enter the number of items:"));              //Answer:6
// var items = [];

// for (var i = 0; i < number; i++) {
//     var item = prompt("Enter item " + (i + 1) + ":");
//     items.push(item);
// }

// document.write("<h3>Number of items: " + number + "</h3>"  + "<h3>Items:</h3>");

// for (var i = 0; i < items.length; i++) {
//     document.write(items[i] + "<br>");
// }


// document.write("<h3>Counting:</h3>");                                    //Answer:7
// for (var i = 1; i <= 15; i++) {
//     document.write(i + ", ");
// }

// document.write("<h3>Reverse Counting:</h3>");
// for (var i = 10; i >= 1; i--) {
//     document.write(i + ", ");
// }

// document.write("<h3>Even:</h3>");
// for (var i = 0; i <= 20; i += 2) {
//     document.write(i + ", ");
// }

// document.write("<h3>Odd:</h3>");
// for (var i = 1; i < 20; i += 2) {
//     document.write(i + ", ");
// }

// document.write("<h3>Series:</h3>");
// for (var i = 2; i <= 20; i += 2) {
//     document.write(i + "k, ");
// }


// var A = ["cake", "apple pie", "cookie", "chips", "patties"];                //Answer:8

// var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?").toLowerCase();
// var found = false;

// for (var i = 0; i < A.length; i++) {                                  
//     if (A[i].toLowerCase() === userInput) {
//         found = true;
//         alert(userInput + " is available at index " + i + " in our bakery.");
//         break; 
//     }
// }
// if (!found) {
//     alert("We are sorry. " + userInput + " is not available in our bakery.");
// }


// var A = [24, 53, 78, 91, 12];                                //Answer:9
// var largest = A[0];

// for (var i = 1; i < A.length; i++) {
//     if (A[i] > largest) {
//         largest = A[i];
//     }
// }

// document.write("Array items: [" + A.join(", ") + "]<br>");
// document.write("The largest number in the array is: " + largest);


// var A = [24, 53, 78, 91, 12];                             //Answer:10
// var smallest = A[0];

// for (var i = 1; i < A.length; i++) {
//     if (A[i] < smallest) {
//         smallest = A[i];
//     }
// }
// document.write("Array items: [" + A.join(", ") + "]<br>");
// document.write("The smallest number in the array is: " + smallest);


// var A = [24, 53, 78, 91, 12];                                  //Answer:11
// var largest = A[0];
// var smallest = A[0];

// document.write("Array items: " + A + "<br>");

// for (var i = 1; i < A.length; i++) {
//     if (A[i] > largest) {
//         largest = A[i];
//     }
//     if (A[i] < smallest) {
//         smallest = A[i];
//     }
// }
// document.write("Largest number: " + largest + "<br>");
// document.write("Smallest number: " + smallest + "<br>");


// var Five = "";                                          //Answer:12

// for (var i = 1; i <= 100; i++) {
//     if (i % 5 == 0) {
//         Five += i + ", ";
//     }
// }
// document.write(Five);


// var students = ["Ali", "Sami", "Taha", "Inam"];                   //Answer:13
// var scores = [58, 73, 89, 90];

// document.write("<table border='3'>");
// document.write("<tr><th>Students</th><th>Scores</th></tr>");

// for (var i = 0; i < students.length; i++) {
//     document.write("<tr><td>" + students[i] + "</td><td>" + scores[i] + "</td></tr>");
// }

// document.write("</table>");


// var scores = [12, 45, 3, 22, 34, 50];                            //Answer:14
// var stopValue = parseInt(prompt("Enter stop value:"))

// document.write("<h3>Numbers up to " + stopValue + ":</h3>");

// for (var i = 0; i < scores.length; i++) {
//     document.write(scores[i] + " ");
//     if (scores[i] === stopValue) {
//         break;
//     }
// }


// var number = [ [1,2,3] , [4,5,6] , [7,8,9] ];                       //Answer:15

// for (var i = 0; i < number.length; i++) {
//     for (var j = 0; j < number[i].length; j++) {
//         document.write(number[i][j] + " ");
//     }
//     document.write("<br>");
// }


// var num = parseFloat(prompt("Enter a number:"));                      //Answer:16
        
// for (var i = num; i >= 0; i -= 0.5) {
//     document.write(i + ",");
// }


// for (var i = 0; i <= 20; i++) {                                       //Answer:17
//     if (i % 2 === 0) {
//         document.write(i + " is even<br>");
//     } else {
//         document.write(i + " is odd<br>");
//     }
// }


// var product = 1;                                                     //Answer:18
//         for (var i = 1; i <= 7; i += 2) {
//             product *= i;
//         }
//         document.write("The product of odd integers from 1 to 7 is: " + product);


// for(var i = 7; i >= 1; i--) {                                           //Answer:19
//     for(var j = 1; j <= i; j++) { 
//         document.write("*");
//     }
//     document.write("<br>"); 
// }


// for (var i = 1; i <= 4; i++) {                                          //Answer:20(a)
//     for (var j = 1; j <= 5; j++) { 
//         document.write("*");
//     }
//     document.write("<br>"); 
// }


// for(var i = 1; i <= 5; i++ ){                                          //Answer:20(b)
//     for(var j=1; j <= i; j++){
//         document.write("*")
//     }
//     document.write("<br>")
// }


// for(var i = 5; i >= 1; i-- ){                                           //Answer:20(c)
//     for(var j=1; j <= i; j++){
//         document.write("*")
//     }
//     document.write("<br>")
// }












