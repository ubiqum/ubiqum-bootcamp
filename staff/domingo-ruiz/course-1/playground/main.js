

const myName = "Domingo";
var age = "31";
var ignasiAge = "15";
var ageDiff = (age - ignasiAge)

console.log(myName,age);
console.log(ageDiff);

if (age > 21) {
    console.log("You are older than 21")
}

if (age < 21) {
    console.log("you are younger than 21")
}

//exercise 1

const classNames= ["Mirko", "Joan", "Marc", "Domingo", "Diego"]
    classNames.sort((x, y) => x.localeCompare(y.classNames)) 
    console.log(classNames);

    

var classAge = [34, 31, 30, 22, 32];
    console.log(classAge [4]);


//exercise 2

while(classAge=classAge){
    var classAge_even = classAge.filter(function(numero){
        return numero % 2 == 0;
    });
    console.log(classAge_even)
    classAge++
}

for(let i = 0; i <1; i++){
    console.log(classAge_even)
}

//exercise 3


function ex3(numbers){
    console.log(Math.min(...numbers));   
}
var numbers = [1, 2, 3];
ex3(numbers);

//exercise 4
function ex4(numbers){
    console.log(Math.max(...numbers));   
}
var numbers = [1, 2, 3];
ex4(numbers);

//exercise 5

function ex5(list, index){
    var index = 1;
    console.log(list[index]);

}
var list = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
ex5(list);

//exercise 6

function ex6(array){
    for(var i=0; i < array.length; i++){
        for(var j=i+1; j < array.length; j++){
            if(array[i] == array[j]){
            console.log(array[j]);
            }
        }
    }
}

var array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
ex6(array);

//exercise 7


function ex7(myColor){
    var myColor = myColor.join(", ");
    return myColor;
}

var myColor = ["Red","Green","White","Black"]
var another = ["black", "yellow"]
console.log(ex7(another));
console.log(ex7(myColor));



//string functions 

//ex1
function ex1(x){
    var reversedNumber = x.toString().split("");
    var xReverse = reversedNumber.reverse().join("");
    return xReverse;        
}
console.log(ex1(1234));

//or 
x = (3456);
console.log(ex1(x))