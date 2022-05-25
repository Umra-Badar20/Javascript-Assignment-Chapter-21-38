// -------------------------- Chapter 26-30 Maths Methods ---------------------

//1.  Write a program that takes a positive integer from user & display the following in your browser a. number b. round off value of the number c. floor value of the number d. ceil value of the number.

// var num = +prompt("Enter a positive integer: ");

// if(num>0){ 
// document.write("Number: " + num + "<br>");
// document.write("Round off value: " + Math.round(num) + "<br>");
// document.write("Floor value: " + Math.floor(num) + "<br>");
// document.write("Ceil value: " + Math.ceil(num) + "<br>");
// }
// else{
//     alert("Enter a positive integer please!")
// }

//2. Write a program that takes a negative floating point number from user & display the following in your browser. a. number b. round off value of the number c. floor value of the number d. ceil value of the number 

// var num = +prompt("Enter a negative integer: ");

// if(num<0){ 
// document.write("Number: " + num + "<br>");
// document.write("Round off value: " + Math.round(num) + "<br>");
// document.write("Floor value: " + Math.floor(num) + "<br>");
// document.write("Ceil value: " + Math.ceil(num) + "<br>");
// }
// else{
//     alert("Enter a negative integer please!")
// }

//3. Write a program that displays the absolute value of a number. 

// var num = +prompt("Enter number: ");
// document.write("The absolute value of " + num + " is " + Math.abs(num));

//4.  Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.: 

// var randomNumber = Math.random() * 6;
// document.write("Random dice value: " + Math.floor(randomNumber));

//5. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser 

// var coinValue = Math.random() * 2;
// coinValue = Math.floor(coinValue);
// if(coinValue > 0){
//     document.write("Random coin value: Heads");
// }
// else{
//     document.write("Random coin value: Tails");
// }

//6.  Write a program that shows a random number between 1 and 100 in your browser. 

// var randomNumber = Math.random() * 100;
// document.write("Random number between 1-100: " + Math.floor(randomNumber));

//7.  Write a program that asks the user about his weight. Parse the user input and display his weight in your browser

// var weight = prompt("Enter your weight in kilograms: ");
// document.write("The weight of user is " + weight + " kilograms");

//8.  Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user. 

// var secretNumber = +prompt("Enter a number between 1 and 10");
// randomNumber = Math.random() * 10;
// randomNumber = Math.ceil(randomNumber);
// if(secretNumber === randomNumber){
//     alert("Congratulations");
// }
// else{
//     alert("Try Again");
// }


