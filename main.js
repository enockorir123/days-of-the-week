
const dayNumber = 10; 
let day; // Using let since its value will change

switch (dayNumber) {
    case 1:
        console.log("Sunday")
    break;
    case 2:
        console.log("Monday")
    break; 
     case 3:
    console.log("Teusday")
break; 
 case 4:
console.log("Wednesday")
break; 
 case 5:
console.log("Thursday")
break; 
 case 6:
console.log("Friday")
break; 
 case 7:
console.log("Saturday")
break;
default:
 
    console.log("Invalid input! Please enter a number between 1 and 7.");
}

// Display the result on the webpage
document.getElementById("dayOutput").textContent = "The day is: " + day;

// Also log to the console
console.log("The day is: " + day);
