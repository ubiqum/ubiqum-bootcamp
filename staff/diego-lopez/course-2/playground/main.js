console.log ("Starting javascript...");

console.log ("exercise1")
let myName = "Diego";
console.log (myName);

console.log ("exercise2")
let age = 32;
console.log (age);

console.log ("exercise3")
let ignasiAge = 32;
let ageDiff = age - ignasiAge
console.log (ageDiff);

console.log ("exercise4")
if (age>21) {
    console.log ("You are older than 21")
}
else {
    console.log ("You are not older than 21")
}

console.log ("exercise5")
if (age>ignasiAge) {
    console.log ("Ignasi is younger than you")
}
else if (age=ignasiAge){
    console.log ("You have the same age as Ignasi")
}
else {
    console.log ("Ignasi is older than you")
}

console.log ("Arrays")
console.log ("exercise1")
let classmates = ["Mirko", "Domingo", "Marc", "Gines", "Joan"]

classmates.sort((x, y) => x.localeCompare(y))
console.log (classmates[0])
console.log (classmates[classmates.length-1])

for (i=0; i<classmates.length; i++){
    console.log (classmates[i])
}


let classmatesAges = [{name: "Mirko", age: 42},{name: "Domingo", age: 33}, {name: "Marc", age: 31}, {name: "Gines", age: 29}, {name: "Joan", age: 22}]

classmatesAges.sort ((x, y) => x.age - y.age)
console.log (classmatesAges)

console.log ("exercise2")
let ages = [42, 33, 31, 29, 22]

for (i=0; i<ages.length; i++){
    console.log(ages[i])
}

let counter = 0
while (counter<ages.length){
    console.log(ages[counter])
    counter ++;
}

//only shows one, for some reason
counter = 0
for (i=0 ; i<ages.length ; i++){
    if (ages[i] %2 ===0){
        console.log(ages[i])
    }
}

console.log ("exercise3")
let numbers = [1,9,3,6]
counter = Infinity

numbers.forEach(function(number){
    if (counter>number){
        counter = number;
    }
  })
console.log (counter)


/* esto también funciona, es de Domingo
function ex3(numbers){
    var numbers = [1, 2, 3];
    console.log(Math.min(...numbers));   
}
 
ex3();*/

console.log ("exercise4")
numbers = [1,9,3,6]
counter = 0

numbers.forEach(function(number){
    if (counter<number){
        counter = number;
    }
  })
console.log (counter)

/* y esta versión para el grande, con math.max en vez de math.min, de Domingo
function ex3(numbers){
    var numbers = [1, 2, 3];
    console.log(Math.max(...numbers));   
}
 
ex3();

o así, que no lo tienes que tener dentro de la función
function ex3(numbers){
    console.log(Math.max(...numbers));   
}
let Array = [1,2,3]
ex3(Array);*/

console.log ("exercise5")

function getNumber(array, index){
    for (i=0; i<array.length; i++){
        if (array[i] === index){
            console.log (array[i]);
        }
    }
};

let array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
let index = 1;
getNumber (array),(index);