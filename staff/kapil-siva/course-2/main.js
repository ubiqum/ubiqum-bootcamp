console.log("Starting javascript");
var myName = "Kapilraj"
console.log(myName);
var age = 35;
var  ignasiAge = 20;
console.log(age);
let ageDiff = age - ignasiAge;
console.log(ageDiff);

 age >= 21 ? console.log("You are older than 21") : console.log("You are not older that 21");
    

age === ignasiAge ? console.log("You have the same age as Ignasi") : age < ignasiAge ? console.log("Ignasi is older than you") : console.log("Ignasi is younger than you");

let names = ["kapil", "one", "two", "three"];
console.log(names[0]);
console.log(names[3]);


for (let i = 0; i < names.length; i++){
    console.log(names[i]);
}

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


