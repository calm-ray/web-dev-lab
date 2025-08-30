// Question 1: Create a variable for each of the following: your favorite color, your height in centimeters, and whether you like pizza. Use appropriate variable declarations (let, const, or var). Try logging it using console.log

let color = 'black'
const height = 160;
var doLikePizza = true

console.log(color, height, doLikePizza);

// Question 2: Write a function sum that finds the sum of two numbers. Side quest - Try passing in a string instead of a number and see what happens?

let sum = (a, b) => {
    return a+b;
}

console.log(sum(5, 9));
console.log(sum(3, " Musketeers"));

// Question 3: Write an if/else statement that checks if a number is even or odd. If it's even, print "The number is even." Otherwise, print "The number is odd."

num = 11
if(num%2==0) 
    console.log("The number is even.")
else 
    console.log("The number is odd.")

// Question 4: Write a function called sum that finds the sum from 1 to a number

let sumTillN = (n) => {
    let sum = 0;
    for(let i=1; i<=n; i++) 
        sum += i
    return sum
}

console.log(sumTillN(3));

// Question 5: Write a function that takes an array of numbers as input, and returns a new array with only even values. Read about filter in JS

function filterEven(arr) {
    return arr.filter(num => num %2 == 0)
}

console.log(filterEven([1,2,5,7,8,9,6,4,3]))

