console.log("Starting javascript");
// Exercise 1 

var myName = "Kapilraj"
console.log(myName);

// Exercise 2

var age = 35;
console.log(age);

// Execise 3

var ignasiAge = 20;
let ageDiff = age - ignasiAge;
console.log(ageDiff);

// Exercise 4

age >= 21 ? console.log("You are older than 21") : console.log("You are not older that 21");

// Exercise 5
    
age === ignasiAge ? console.log("You have the same age as Ignasi") : age < ignasiAge ? console.log("Ignasi is older than you") : console.log("Ignasi is younger than you");

// Array Exercise 1

let names = ["kapil", "one", "two", "three"];
console.log(names[0]);
console.log(names[3]);


for (let i = 0; i < names.length; i++){
    console.log(names[i]);
}

// Array Exercise 2

let ages = [21, 32, 45, 35, 28, 47];

let i = 0;
while (i < ages.length) {
    if (ages[i]%2 == 0)
    console.log(ages[i]);   
    i++;
    
}
for (i = 0; i < ages.length; i++){
    console.log(ages[i]);
}

// Array Exercise 3

function minNum(numbers){
    console.log(Math.min(...numbers));   
}
var numbers = [1, 2, 3];
minNum(numbers);

// Array Exercise 4

function maxNum(numbers) {
    console.log(Math.max(...numbers));
}
var numbers = [1, 2, 3];
maxNum(numbers);
