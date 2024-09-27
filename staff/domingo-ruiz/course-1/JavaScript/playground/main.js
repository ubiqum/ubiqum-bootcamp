

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

const classNames= ["Mirko", "Diego", "Joan",  "Domingo", "Marc"]

for(var i = 0; i < classNames.length; i++)
    classNames.sort();
    console.log(classNames);
    console.log(classNames[0])
    console.log(classNames[4])
    

//exercise 2

var classAge = [34, 31, 30, 22, 32];
    console.log(classAge [4]);


while(classAge=classAge){
    var classAge_even = classAge.filter(function(numero){
        return numero % 2 == 0;
    });
    console.log(classAge_even)
    classAge++
}

var classAge = [34, 31, 30, 22, 32];


for(var i = 0; i <classAge.length; i++){
    if (classAge[i] % 2 == 0){
        classAge.join;
        console.log(classAge[i])
    }
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
console.log(ex7(myColor));

var another = ["black", "yellow"]
console.log(ex7(another));




//string functions 

//ex1
function ex1(x){
    var reversedNumber = x.toString().split("");
    var xReverse = reversedNumber.reverse().join("");
    return xReverse;        
}
console.log(ex1(1234));

//or 
var x = (3456);
console.log(ex1(x))


//ex2

var alph = "webmaster"

function ex2(alph){
   return alph
               .split("")
               .sort() 
               .join("");

}

console.log(ex2(alph));


//ex3 
//added method tolowercase just in case

function cap (x){
    var caps = x.toLowerCase()
                .split(" ");
    //     let result = caps.map(y=>{
    //         console.log(y[0].toUpperCase,'hello i m y')
    //     })
    var result = caps.map(
        function(y){
            return y.replace(y.charAt(0), y.charAt(0).toUpperCase());
        });
    return result.join(" ");
}
var x = ("esta es una prueba de caps")
console.log(cap(x));


//ex4

function findLongestWord(str) {
    var strSplit = str.split(' ');
    var longestWord = 0;
    for(var i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){
      longestWord = strSplit[i].length;
        }
    }
    return longestWord;
  }

  console.log(findLongestWord("Mirko is Very Italian"))

  //whatevs

  function caps(x){
    for(var i=0; i >x.length; i++){
        for(var j=i+1; j>x.length; j++){
            if(x[i]===x[j])
            return x.charAt(0).toUpperCase(0);
        }
    }
}
  



var x="el perro de mi vecino es feo que te cagas";
console.log(caps(x))



