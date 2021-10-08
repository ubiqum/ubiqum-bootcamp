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

// Array Exercise 5

function twoPara(array, index) {
    var index = 4;
    console.log(array[index]);
}

let array = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];
twoPara(array);

// Array Exercise 6




//sort the array; 


let array1 = [3, 4, 5, 6, 5];

function reapeatedElements(array1) {
    for (i = 0; i < array1.length; i++){
        for (j = i + 1; j < array1.length; j++){
            if (array1[i] == array1[j]) {
                console.log(array1[j]);
            }
        }
    }
}
reapeatedElements(array1);

// Exercise 7

function color(myColor) {
    return myColor;
    
}
myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.join());

// String

function reverseNum(number1) {
    let arr = number1.toString().split("");
    let reversed = arr.reverse().join("");
    return reversed;
}
console.log(reverseNum(32443));

//Execise 2

function alphabet_order(str)
  {
return str.split('').sort().join('');
  }
console.log(alphabet_order("webmaster"));

// Exercise 3

function uppercase(str) {
  var array2 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array2.length; x++){
      newarray1.push(array2[x].charAt(0).toUpperCase()+array2[x].slice(1));
  }
  return newarray1.join(' ');
}
console.log(uppercase("prince of persia"));

// Execise 4

function find_longest_word(str)
{
  var array3 = str.match(/\w[a-z]{0,}/gi);
  var result = array3[0];

  for(var x = 1 ; x < array3.length ; x++)
  {
    if(result.length < array3[x].length)
    {
    result = array3[x];
    } 
  }
  return result;
}
console.log(find_longest_word('Web Development Tutorial'));


    


