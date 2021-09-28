

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
    var numbers = [1, 2, 3];
    console.log(Math.min(...numbers));   
}
 
ex3();

//exercise 4
function ex4(numbers){
    var numbers = [1, 2, 3];
    console.log(Math.max(...numbers));   
}

ex4();

//exercise 5

function ex5(list, index){
    var list = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
    var index = 1;
    console.log(list[index]);

}

ex5();