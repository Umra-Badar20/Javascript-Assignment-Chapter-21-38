
// ------------------------ Chapter 31-34 Date Methods ----------------------

//1.  Write a program that displays current date and time in your browser. 

// var dateNow = new Date();
// document.write(dateNow);


//2. Write a program that alerts the current month in words. For example December.

// var dateNow = new Date();
// mlist = [ "January", "Febmliruary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
// var monthNow = dateNow.getMonth();
// document.write("Current Month: " + mlist[monthNow]); 

//3. Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.

// var dateNow = new Date();
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var dayNow = dateNow.getDay();
// document.write("Today is " + dayNames[dayNow]);

//4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.

// var dateNow = new Date();
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var dayNow = dateNow.getDay();
// if(dayNames[dayNow] === "Sun" || dayNames[dayNow] === "Sat"){
//     document.write("It's Fun day");
// }


//5. Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”. 

// var dateNow = new Date();
// var date = dateNow.getDate();
// if(date < 16){
//     document.write("“First fifteen days of the month");
// } 
// else{
//     document.write("Last days of the month");
// }


//6.  Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object.

// var dateNow = new Date();
// var millisec = dateNow.getTime();
// document.write("Current Date: " + dateNow + "<br>");
// document.write("Elapsed milliseconds since January 1, 1970: " + millisec + "<br>");
// document.write("Elapsed minutes since January 1, 1970: " + (millisec/(1000*60)) + "<br>");


//7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”. 

// var dateNow = new Date();
// var hourNow = dateNow.getHours();
// if(hourNow < 12){
//     document.write("Its AM");
// }
// else{
//     document.write("Its PM");
// }


//8.  Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate. 

// var dateNow = new Date();
// var laterDate = new Date("Dec 31, 2020");
// document.write(laterDate);


//9. Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan? Note: 1st Ramadan was on June 18, 2015 
// var today = new Date();
// var todayMilli = today.getTime();
// var lastRamadan = new Date("Apr 4, 2022");
// var ramazanMilli = lastRamadan.getTime();
// var diffMilliSec = todayMilli - ramazanMilli;
// var daysPast = diffMilliSec/(1000*60*60*24);
// daysPast = Math.floor(daysPast);
// document.write(daysPast + " days have passed since 1st Ramazan, 2022");


//10. Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.

// var today = new Date();
// var todayMilli = today.getTime();
// var year2015 = new Date("Jan 01, 2015");
// var year2015Milli = year2015.getTime();
// var diffMilliSec = todayMilli - year2015Milli;
// var secondsPast = diffMilliSec/(1000);
// secondsPast = Math.floor(secondsPast);
// document.write("On reference date: " + today + "<br>")
// document.write(secondsPast + " seconds had passed since beginning of 2015");


//11. Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and finally display the date object in your browser. 

// var today = new Date();
// var hourAgo = today.getHours();
// hourAgo = hourAgo-1
// document.write("current date: " + today + "<br>");
// today.setHours(hourAgo);
// document.write("1 hour ago, it was " + today);


//12. Write a program that creates a date object and show the date in an alert box that is reset to 100 years back? 

// var today = new Date();
// var yearsAgo = today.getFullYear();
// yearsAgo = yearsAgo-100;
// document.write("current date: " + today + "<br>");
// today.setFullYear(yearsAgo);
// document.write("100 years back, it was " + today);


//13. Write a program to ask the user about his age. Calculate and show his birth year in your browser. 

// var age = +prompt("Enter your age");
// var today = new Date();
// var yearNow = today.getFullYear();
// var birthYear = yearNow - age;
// document.write("Your age is " + age + "<br>");
// document.write("Your birth year is " + birthYear);


//14. Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places. Display the following fields: a. Customer Name b. Current Month c. Number of units d. Charges per unit e. Net Amount Payable (within Due Date) f. Late Payment Surcharge g. Gross Amount Payable (after Due Date.

// var customerName = "Hafsa Siddiqui";
// var today = new Date();
// mlist = [ "January", "Febmliruary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
// var currentMonth = today.getMonth();
// var noOfUnits = 410;
// var unitCost = 16;
// var netAmount = noOfUnits * unitCost;
// var lateCharges = 150;
// var grossAmount = netAmount + lateCharges;
// document.write("K-Electric Bill" + "<br>" + "<br>");
// document.write("Customer Name: " + customerName + "<br>");
// document.write("Month: " + mlist[currentMonth] + "<br>");
// document.write("No of units: " + noOfUnits + "<br>");
// document.write("Charges per unit: " + unitCost + "<br>" + "<br>");
// document.write("Net Amount Payable (within Due Date): " + netAmount + "<br>");
// document.write("Late Payment Surcharge: " + lateCharges + "<br>");
// document.write("Gross Amount Payable (after Due Date): " + grossAmount + "<br>");

//---------------------X---------------------X---------------------X---------------------X