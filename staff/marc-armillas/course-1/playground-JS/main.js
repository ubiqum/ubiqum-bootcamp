                                    //JAVA SCRIPT BASICS

//Ex1 print a string
var myName = "Marc Armillas Olius";
console.log(myName);
//Ex2 print a number
let age = 29;
console.log(age);
//Ex3 first operation (-)
let ignasiAge = 32;
let ageDiff = age - ignasiAge;
console.log(ageDiff);
//Ex4 Conditional comparing age vs 21 and print a message 
if(age>21){
    console.log("You are older than 21")
} else {
    console.log("You are not older than 21")
}
//Ex5 Conditional with three answers
if ( age < ignasiAge) {
    console.log("Ignasi is older than me");
    if(age===ignasiAge){
    console.log("same age")
    }else {
        console.log('Ignasi is younger than me');}
}


                                    // 3 JAV SCRIPT ARRAY FUNCTIONS
                                    
// Sorting an Array                                    
// Ex1 
let namesOfClass = ['Joan', 'Mirko', 'Diego', 'Genis', 'Domingo', 'Marc']
console.log(namesOfClass)
// Ex1-a sort alphabetically
namesOfClass.sort();
console.log(namesOfClass)
//Ex1-b print first element of the array
console.log(namesOfClass[0]);
//Ex1-c print last element of the array
console.log(namesOfClass[5]);
// Ex1-d print all elements of the array using a FOR LOOP
for (let i = 0; i < namesOfClass.length; i++) {
    console.log(namesOfClass[i]);
}

// Looping over an Array
//Ex2-a print all ages using a WHILE LOOP
let membersAge = [24, 29, 31, 32, 33, 34];
let i = 0;
while (i < membersAge.length) {
        console.log(membersAge[i]);
        i++;
    }
//Ex2-b  print even numbers with WHILE     NOT WORKING!!!!
while (i < membersAge.length) {
    if(membersAge[i]%2===0){
        console.log(membersAge[i]);
        i++;
    }
}
//Ex2-c print even numbers with FOR LOOP
for (i=0; i<=membersAge.length; i++){
    if(membersAge[i]%2===0){
        console.log(membersAge[i]);
    }
}


// Functions that use Arrays
//Ex3
let arr=[34, 93, 79, 67]
function minNum(arr){
    arr.sort();
    console.log(arr[0]);
    return arr[0];
}
minNum(arr);
// ex4
function maxNum(arr){
    arr.sort();
    console.log(arr[arr.length-1]);  
    return arr[arr.length-1]      
}
maxNum(arr);
// ex5 imprime un solo elemento del array
let y =2;
function printValue (arr, y){
    console.log(arr[y])
}
printValue(arr,y);
// ex6 imprime los numeros duplicados 
let numeros=[23,30,42,23,54,42,452];
function match(numeros){
    let duplicate=[];
    numeros.sort(); /*preguntar xq tengo que hacer una copia del array\\\\https://www.neoguias.com/como-encontrar-duplicados-array-javascript/*/
    for(let i=0; i<numeros.length; i++){
        if(numeros[i+1]===numeros[i]){
            duplicate.push(numeros[i]);
            console.log(numeros[i]);
        }
    }
}
match(numeros)
// ex7 convierte el array a un string
let myColor=["red", "green", "white", "black"];
function colors(myColor){
    let color1= "red"
    let color2= "green"
    let color3= "white"
    let color4= "black"
    // myColor = myColor.join();
    console.log(color1, color2, color3, color4);
    console.log(typeof color1, typeof color2, typeof color3, typeof color4)
    
}
colors(myColor);

                                    // JS String Functions

// Ex1 reverse de order of numbers
let num=2543234;
function reverseNum(num){
    num = num.toString()
                        .split("")
                        .reverse()
                        .join("")
return parseInt(num); /*para convertir de string a numero*/
}
console.log(num);
reverseNum(num);
// ex2 revers alphabeticaly
let word="ubiqum";
function reverseWord(word){
    word=word.split("")
                .sort()
                .join("");
console.log(word);
}
reverseWord(word);
// ex3 convert to capital letter each first leter of the words
var x = ("por fin he solucionado el ejErcicio 3!!!")
function capitalizeEachWord (x){
    var arr=x.toLowerCase().split(" ");             
    var result = arr.map(
        function(y){
        return y.replace(y.charAt(0), y.charAt(0).toUpperCase());
    });
    result.join(" ");
    console.log(result.join(" "));
}
capitalizeEachWord (x)
// ex4 find the longest word in the phrase
let a = "Web Development Tutorial";
function longestWord(a){
    let array = a.split(" ");
    let result = '';
    for (i=0; i<array.length; i++){
        let currentItem = array[i];
        if(currentItem.length > result.length) {
            result = array[i];
            }
        }
        console.log(result);
    }        
longestWord(a);


