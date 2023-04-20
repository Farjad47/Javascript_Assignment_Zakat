// 17-Apr-2023
// JS Assignment 
// Question 01
// Zakat Program

console.log("Welcome to the Zakat Program");
let zakatPercentage = 2.5/100;
let userInput = +prompt("Please enter your Amount to be calculated w.r.t Zakat:-");
let result = userInput*zakatPercentage;

alert("Your Zakat Value is " + result);


// Question 02
// Fitrah Program
let familyMembers = +prompt("Please Enter No. of your family members : ");
let fitrahOption = +prompt("Please enter your Method of Fitrah to be calculated on: 1. Wheat, 2. Rice, 3. Dates", "1 2 or 3");
let fitrahPercentage = 2.25;
let fitrahValue;

if (fitrahOption === 1)
{
    fitrahValue = familyMembers*(fitrahPercentage * 160);
    alert("Your Fitrah Value is " + fitrahValue);
}
else if (fitrahOption === 2)
{
    fitrahValue = familyMembers*(fitrahPercentage * 360);
    alert("Your Fitrah Value is " + fitrahValue);
}

else if (fitrahOption === 3)
{
    fitrahValue = familyMembers*(fitrahPercentage * 900);
    alert("Your Fitrah Value is " + fitrahValue);
}


else {
    alert("You entered the wrong input, Please try again ");
}



// Question 03
// Random Number Program
let randomNumber = Math.random();
let secretNumber = Math.round(randomNumber*10);

let userGuess = +prompt("Please Guess a Number between 1 to 10 ");

if (userGuess === secretNumber){
    alert("Congratulations! You Guessed the Secret Number");
}

else if (userGuess > secretNumber) {
    alert("Your guess is too high than the computer secret number, please try again. ")
}
else if (userGuess < secretNumber) {
    alert("Your guess is too low than the computer secret number, please try again. ")
}

// Question 04
// Capitalized Name
let uName = prompt("Please enter your name:");
let capitalized = uName.charAt(0).toUpperCase() + uName.slice(1);
alert("Your name in capitalized case is: " + capitalized);

// Question 05
// Array contact Name/Numbers

let contactNumbers = [];
let contactNames = [];

while (true) {
  let number = prompt("Please enter a contact number (or press cancel to exit):");
  if (!number) break; 
  let name = prompt("Please enter a contact name:");
  if (!name) break; 
  contactNumbers.push(number); 
  contactNames.push(name); 
}

for (let i = 0; i < contactNumbers.length; i++) {
  console.log("Contact #" + (i+1) + ": " + contactNames[i] + " - " + contactNumbers[i]);
}

// Question 06
// Array Remove Product

let products = ["Shoes", "Shirt", "Pants", "Jacket", "Hat", "Sunglasses"];
let position = prompt("Please enter the position of the product you want to remove (1-" + products.length + "):");

let removedItem = products.splice(position - 1, 1)[0];

console.log("Removed item: " + removedItem);
console.log("Remaining items: " + products);
console.log("Total number of items remaining: " + products.length);

// Question 07
// Voting Eligibility Program

let nationality = prompt("What is your nationality?");
let gender = prompt("What is your gender?");
let age = parseInt(prompt("What is your age?"));

if (nationality === "Pakistani" || nationality === "Indian") { 
  if (gender === "male" && age >= 18) {
    console.log("You are eligible to vote!");
  } else if (gender === "female" && age >= 18) {
    let maritalStatus = prompt("Are you married? (yes/no)");
    if (maritalStatus === "yes") {
      console.log("You are eligible to vote!");
    } else {
      console.log("You are not eligible to vote.");
    }
  } else {
    console.log("You are not eligible to vote.");
  }
} else {
  console.log("You are not eligible to vote.");
}

// Question 08
// Cricket Team Playing 11 Selection

let WorldCupSquad = [
    "Babar Azam",
    "Muhammad Rizwan",
    "Fakhar Zaman",
    "Saim Ayub",
    "Muhammad Haris",
    "Azam Khan",
    "Shadab Khan",
    "Imad Wasim",
    "Muhammad Nawaz",
    "Haris Rauf",
    "Zaman Khan",
    "Shaheen Afridi",
    "Ihsanullah",
    "Naseem Shah",
    "Iftikhar Ahmed"
  ];
  
  const finalTeam = WorldCupSquad.slice(0);
  finalTeam.splice(4, 1); 
  finalTeam.splice(6, 1); 
  finalTeam.splice(7, 1); 
  finalTeam.splice(10, 1); 
  
  console.log("Final team for the match against India:");
  for (let i = 0; i < finalTeam.length; i++) {
    console.log(finalTeam[i]);
  }
  
