
// ------------------- Chapter 35-38 Functions ----------

//1. Write a function that displays current date & time in your browser.

// function tellTime(){
//     var dateNow  = new Date();
//     document.write(dateNow); 
// }
// tellTime();


//2. Write a function that takes first & last name and then it greets the user using his full name
// function greetUser(){
//     var firstName = prompt("Enter your first name: ");
//     var lastName = prompt("Enter your last name: ");
//     alert("Hello " + firstName + " " + lastName);
// }
// greetUser();


// //3. Write a function that adds two numbers (input by user) and returns the sum of two numbers. 
// function sum(){
//     var firstNumber = +prompt("Enter first number: ");
//     var secondNumber = +prompt("Enter second number: ");
//     alert(firstNumber + " + " + secondNumber + " = " + (firstNumber + secondNumber));
// }
// sum();


// //4. Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser
// function calculator(num1,num2,op){
//     if(op === "+"){
//         alert(num1 + " + " + num2 + " = " + (num1 + num2));
//     }
//     else if(op === "-"){
//         alert(num1 + " - " + num2 + " = " + (num1 - num2));
//     }
//     else if(op === "*"){
//         alert(num1 + " x " + num2 + " = " + (num1 * num2));
//     }
//     else if(op === "/"){
//         alert(num1 + " / " + num2 + " = " + (num1 / num2));
//     }
//     else{
//         alert("Wrong Operator");
//     }
// }
// var firstNumber = +prompt("Enter first number: ");
// var operator = prompt("Choose your operator: + - * / ");
// var secondNumber = +prompt("Enter second number: ");
// calculator(firstNumber,secondNumber,operator);


// //5. Write a function that squares its argument. 
// function square(num){
//     alert("Square of " + num + " is " + (num*num));
// }
// var number = +prompt("Enter number for square: ");
// square(number);


// //6. Write a function that computes factorial of a number
// function factorial(num) {
//     var answer = 1;
//     if (num === 0 || num === 1) {
//         return answer;
//     } else {
//         for (var i = num; i >= 1; i--) {
//             answer = answer * i;
//         }
//         return answer;
//     }
// }
// var number = +prompt("Enter number for factorial: ");
// answer = factorial(number)
// alert("The factorial of " + number + " is " + answer);


// //7. Write a function that take start and end number as inputs & display counting in your browser.
// function counting(start,end){
//     for(var i = start; i <= end; i++ ){
//         document.write(i + " ");
//     }
// }
// var start = +prompt("Enter start number for counting:");
// var end = +prompt("Enter end number for counting:");
// counting(start,end);


// //8. Write a nested function that computes hypotenuse of a right angle triangle. 
// function calculateHypotenuse(base,perpendicular){
//     var base,perpendicular;
//     function calculateSquare(num){
//        num = num * num;
//        return num;
//     }
//     base = calculateSquare(base);
//     perpendicular = calculateSquare(perpendicular);
//     var hypotenuse = base + perpendicular; 
//     return hypotenuse;
// }
// var base = +prompt("Enter base of a right angle triagnle:");
// var perpendicular = +prompt("Enter perpendicular of a right angle triagnle:");
// var hyp = calculateHypotenuse(base,perpendicular);
// alert("hypotenuse of a right angle triangle: " + hyp);


// //9. Write a function that calculates the area of a rectangle.      A = width * height
// function areaOfRectangle(width,height){
//     var areaCalc = width * height;
//     return areaCalc;
// }
// var width = +prompt("Enter width of rectangle: ");
// var height = +prompt("Enter height of rectangle: ");
// var area = areaOfRectangle(width,height);
// alert("Area of Rectangle: " + area);


// //10. Write a JavaScript function that checks whether a passed string is palindrome or not?
// function checkPalindrome(message){
//     var reverseMessage = "";
//     for (var i = message.length - 1; i >= 0; i--) {
//         reverseMessage += message[i];
//     }
//     if(message === reverseMessage){
//         alert(message + " is palindrome");
//     }
//     else{
//         alert(message + " is not palindrome");
//     }
// }
// var msg = prompt("Enter message to check it's palindrome or not");
// checkPalindrome(msg);


// //11. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// function titleCase(message){
//     var arr = message.split(" ");
//     var titleArray = [];
//     var str;
//     for(var i = 0; i < arr.length; i++){
//         var firstChar = arr[i].slice(0,1);
//         var otherChar = arr[i].slice(1);
//         var word = firstChar.toUpperCase() + otherChar.toLowerCase();
//         titleArray.push(word);

//     }
//     str = titleArray.join(" ");
//     document.write("String: " + message + "<br>")
//     document.write("Output: " + str + "<br>")
// }

// var message = prompt("Enter your Message:");
// titleCase(message);

