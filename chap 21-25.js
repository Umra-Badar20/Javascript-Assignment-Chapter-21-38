// -------------------------- Chapter 21-25 String Methods ---------------------------

//1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name. 

// var firstName = prompt("Enter your first name: ");
// var lastName = prompt("Enter your last name: ");
// var fullName = firstName + " " + lastName;
// alert("Hello! " + fullName);

// 2. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser.

// var favMobile = prompt("Enter your favorite mobile phone model: ");
// document.write("My favorite phone is: " + favMobile + "<br>");
// document.write("Length of string: " + favMobile.length);

//3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser.
// var str = "Pakistani";
// var nIndex = str.indexOf("n");
// document.write("String: " + str + "<br>");
// document.write("Index of ' n ': " + nIndex );

//4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.

// var str = "Hello World";
// var lIndex = str.lastIndexOf("l");
// document.write("String: " + str + "<br>");
// document.write("Last index of ' l ': " + lIndex );

// 5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.

// var str = "Pakistani";
// var Index = str[3];
// document.write("String: " + str + "<br>");
// document.write("Character at index 3: " + Index );

//6. Repeat Q1 using string concat() method.

// var firstName = prompt("Enter your first name: ");
// var lastName = prompt("Enter your last name: ");
// var fullName= firstName.concat(lastName);
// alert("Hello! " + fullName);

// 7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.

// var str = "Hyderabad";
// var replaceStr = str.replace("Hyder", "Islam");
// document.write("City: " + str + "<br>");
// document.write("After replacement: " + replaceStr);

//8. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.

// var str = "Hyderabad";
// var replaceStr = str.replace("Hyder", "Islam");
// document.write("City: " + str + "<br>");
// document.write("After replacement: " + replaceStr);

//9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.

// var str = "472";
// var num = Number(str);
// document.write("value: " + str + "<br>");
// document.write("Tpye: " + typeof(str) + "<br>");
// document.write("value: " + num + "<br>");
// document.write("Tpye: " + typeof(num) + "<br>");

//10. Write a program that takes user input. Convert and show the input in capital letters.
// var str = prompt("Enter Input: ");
// document.write("User input: " + str + "<br>");
// document.write("Upper case: " + str.toUpperCase())

// 11. Write a program that takes user input. Convert and show the input in title case.

// var str = prompt("Enter Input: ");
// var firstChar = str.slice(0,1);
// var otherChar = str.slice(1);
// var title = firstChar.toUpperCase() + otherChar.toLowerCase();
// document.write("User input: " + str + "<br>");
// document.write("Title case: " + title);

//12. Write a program that converts the variable num to string. var num = 35.36 ; Remove the dot to display “3536” display in your browser.

// var num = 35.36;
// var str = num.toString();
// var dotIndex = str.indexOf(".");
// str = str.slice(0,dotIndex) + str.slice(dotIndex + 1);
// document.write("Number: " + num + "<br>");
// document.write("Result: " + str);

//13. Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ .

// var username = prompt("Enter your name: ");
// var charValue;
// for(var i = 0; i < username.length; i++){
//     charValue = username[i].charCodeAt(0);
//     if(charValue === 33 || charValue === 44 || charValue === 46 || charValue === 64){
//         alert("Please enter a valid username")
//     }
// } 

//14. Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not.

// var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
// var query = prompt("What do you want to order: ");
// query = query.toLowerCase();
// var check = false;
// for(var i = 0; i < arr.length; i++){
//     if(query === arr[i]){
//         document.write(arr[i] + " is available at index " + i + " in our bakery");
//         check = true;
//     }
// }
// if (check === false){
//     document.write("We are sorry. " + query + " is not available in our bakery");
// }

//15. Write a program to take password as an input from user. The password must qualify these requirements: a. It should contain alphabets and numbers b. It should not start with a number c. It must at least 6 characters long.

// var password = prompt("Enter your password: ");
// var passwordLength = false;
// var passwordChar = false;
// var passwordInt = false;
// var passwordStart = true;

// //Checking for Alphabet
// for (i = 0; i < password.length; i++){
//     var charValue = password[i].charCodeAt(0);

//     //Checking for UpperCase Letters
//     if (charValue >= 65 && charValue <= 90 ){
//         passwordChar = true;
//     }

//     //Checking for LowerCase Letters
//     else if (charValue >= 97 && charValue <= 122 ){
//         passwordChar = true;
//     }
// }

// //Checking for Numbers
// for (i = 0; i < password.length; i++){
//     var charValue = password[i].charCodeAt(0);  
//     if (charValue >= 48 && charValue <= 57 ){
//         passwordInt = true;
//     }
// }

// //Checking for first letter
// var charValue = password.charCodeAt(0);
// if (charValue >= 48 && charValue <= 57 ){
//     passwordStart = false;
// }

// //Checking for Length
// if(password.length >= 6){
//     passwordLength = true;
// }

// if(passwordChar === false || passwordInt === false || passwordLength === false || passwordStart === false){
//     alert("Enter valid Password");
// }

// else{
//     alert("Password Approved");
// }

//16. Write a program to convert the following string to an array using string split method. var university = “University of Karachi”; 

// var str = "University of Karachi";
// var arr = str.split("");
// document.write(arr)
// for(var i=0; i<arr.length; i++){
//     document.write(arr[i] + "<br>");
// }

//17. Write a program to display the last character of a user input. 

// var str = prompt("Enter your message: ");
// document.write("User Input: " + str + "<br>");
// document.write("Last character of input: " + str[str.length - 1]);

//18.  You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.

// var str = "the quick brown fox jumps over the lazy dog";
// var count = (str.match(/the/g)).length;
// document.write("Text: " + str + "<br>");
// document.write("There are " + count + " occurrence(s) of the word 'the'");


//-----------------X-----------------X-----------------X-----------------X------------