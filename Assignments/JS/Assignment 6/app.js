// var firstName = prompt('Enter your first name')       //Answer:1
// var lastName = prompt("Enter your last Name")
// var fullName = firstName + " " + lastName;
// alert("Hello, " + fullName + " !")


// var favoritePhone = prompt("Please enter your favorite mobile phone model:");            //Answer:2
// if(favoritePhone) {
// var inputLength = favoritePhone.length;
// document.write("My favorite phone is: " + favoritePhone + "<br>" + " length of string: " + inputLength);
//  } 
        

// var word = "Pakistani";                                           //Answer:3
//         var index = word.indexOf('n');
//         document.write("String: " + word + "<br>" +"Index of 'n': " + index);



// var phrase = "Hello World";                                       //Answer:4
// var lastIndex = phrase.lastIndexOf('l');
// document.write("String: " + phrase + "<br>Last index of 'l': " + lastIndex);


        // var word = "Pakistani";                                    //Answer:5
        // var charAtIndex3 = word.charAt(3);
        // document.write("String: " + word + "<br>Character at index 3: " + charAtIndex3);


        // var city = "Hyderabad";                                    //Answer:7
        // var newCity = city.replace("Hyder", "Islam");
        // document.write("City: " + city + "<br>After replacement: " + newCity);


        //                                                                  Answer: 8
        // var message = "Ali and Sami are best friends. They play cricket and football together.";
        // var modifiedMessage = message.replaceAll("and", "&");
        // document.write("Message: " + message + "<br>After replacement: " + modifiedMessage);


        // var str = "472";                                            //Answer:9
        // var num = Number(str);
        // document.write("Value: " + str + "<br>" + "Type: " + typeof str + "<br>");
        // document.write("Value: " + num + "<br>" + "Type: " + typeof num);


        // var url = prompt("Enter URL (www.facebook.com/www.yahoo.com):");            //Answer:10
        // var domain = url.replace(/^www./, '');
        // document.write("<p>URL: " + url + "</p>");
        // document.write("<p>Domain: " + domain + "</p>");


        // var userInput = prompt("Enter a word:");                               //Answer:11
        // var upperCaseInput = userInput.toUpperCase(); 
        // document.write("<p>User input: " + userInput + "</p>");
        // document.write("<p>Upper case: " + upperCaseInput + "</p>");
            
        
        //    var userInput = prompt("Enter a word:");                              //Answer:12
        //    var upperCaseInput = userInput.toLowerCase(); 
        //    document.write("<p>User input: " + userInput + "</p>");
        //    document.write("<p>Lower case: " + upperCaseInput + "</p>");



        var userInput = prompt("Enter a sentence:"); // Take user input

        // Function to convert string to Title Case
        function toTitleCase(str) {
            return str.toLowerCase().split(' ').map(function(word) {
                return word.charAt(0).toUpperCase() + word.slice(1);
            }).join(' ');
        }

        var titleCaseInput = toTitleCase(userInput); // Convert input to Title Case

        // Display the results on the webpage
        document.write("<p><b>User input:</b> " + userInput + "</p>");
        document.write("<p><b>Title case:</b> " + titleCaseInput + "</p>");














