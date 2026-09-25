// STEP 1: Print text to the browser console is string ""

console.log("Hello, World!");
alert("Hello World!");

// STEP 2: Variables

// Store text values in variables

const userName = "Aneeqa";
const age = "23";
const favoriteAnimal = "Blue Elephant";


// Print the variables to the console
console.log("My name is " + userName + ", I am " + age + " years old and My favorite animal is " + favoriteAnimal);

// STEP 3: User interaction
// Display a pop-up message
alert("Welcome to my page");

// Ask the user for their name

const visitorName = prompt("What is your name?");

// Print the user's answer
console.log(visitorName);

console.log("Terve " + visitorName + "! Welcome Javascript Page");
// Ask the user for their favorite animal

const visitorAge = prompt("What is your age?");

if(visitorAge>=18){

    console.log("You are an adult");

}
else{
    console.log("You are under 18");
}

// Create a sentence using both answers

function greetUser(name) { console.log("Hello, " + visitorName + "! Your age is " + visitorAge + ".");}

//console.log("Hello, " + visitorName + "! Your age is " + visitorAge + ".");


greetUser(visitorName);
// ⭐⭐ BONUS Ask the user for their favorite animal.If their favorite animal is "Blue Elephant", print: Great choice! That's my favorite animal too!
// ⭐⭐ BONUS Otherwise, print: Nice! Your favorite animal is [animal]. Can you figure out how to do this using if / else?

// const visitorFavoriteAnimal = prompt("What is your favorite animal?");