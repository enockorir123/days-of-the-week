
const dayNumber = 10; 
let day; // Using let since its value will change

if (dayNumber === 1) {
    console.log("Sunday");
} else if (dayNumber === 2) {
    console.log("Monday");
} else if (dayNumber === 3) {
    console.log("Teusday");
} else if (dayNumber === 4) {
    console.log("Wednesday");
} else if (dayNumber === 5) {
    console.log("Thursday");
} else if (dayNumber === 6) {
    console.log("Friday");
} else if (dayNumber === 7) {
    console.log("Saturday");
} else {
    console.log("Invalid input! Please enter a number between 1 and 7.");
}

// Display the result on the webpage
document.getElementById("dayOutput").textContent = "The day is: " + day;

// Also log to the console
console.log("The day is: " + day);
