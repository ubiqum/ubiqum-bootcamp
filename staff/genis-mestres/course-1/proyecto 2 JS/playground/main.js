

/*Exercise 4: Write a conditional that compares the variable with your age with the number 21.
 It should print either "You are older than 21" or "You are not older than 21", appropriately, depending on your age*/

console.log("starting JS");

var myName = "genis";
console.log(myName);
var age = 20;

var ignasiAge =  28;
console.log(ignasiAge);
ageDiff = age - ignasiAge;
console.log(ageDiff);


 
if ((age - 21) > 0) {
    console.log("You are older than 21");
  }
    else {
    if (age == 21) {
    console.log("you're 21 man! go get a drink");
    }
    else {
    console.log("you're less than 21!");
  }
    }


/* Exercise 1: Create an array with all the names of your class (including mentors).  Sort the array alphabetically.
  Print the first element of the array in the console.
  Print the last element of the array in the console.  Print all the elements of the array in the console.  Use a "for" loop. */
  membersClass = ["Domingo", "Joan", "Marc", "Genis", "Diego", "Kapil"];

  membersClass.sort();
  console.log("Printing the first member.");
  console.log(membersClass[0]);
  console.log("now printing the last member.");
  console.log(membersClass[membersClass.length -1]);
  
  
  console.log("now printing rint all the elements of the array in the console.");
  for(var i= 0; i <= membersClass.length; i++) {
    console.log(membersClass[i-1]);
  }
  console.log(membersClass);
  /*Exercise 2: Create an array with all the ages of the students in your class.  
  Iterate the array using a while loop, and then print every age in the console.  
  Add a conditional inside the while loop to only print even numbers. 
   Change the loop to use a "for" loop instead of a "while" loop.*/

   membersAge = [32, 31, 30, 23, 35, 29];

var arraylength = membersAge.length;
var i = 0;

 while(i <= (arraylength-1)) {
  console.log(membersAge[i]);
  i++;
} 


for(i=0; i<=arraylength; i++){
  console.log(membersAge[i]);
  
}
console.log("Add a conditional inside the while loop to only print even numbers");
for(i=0; i<=arraylength; i++){
  if (membersAge[i] %2 === 0){
  console.log(membersAge[i]);
  }
   }
//Odd numbers
console.log("Odd numbers:");
   for(i=0; i<=arraylength; i++){
    if (membersAge[i] %2 !=0){
    console.log(membersAge[i]);
    }
     }
  



/* Functions that use arrays
For the following exercises, you cannot sort your array. Be sure your solution works for any array that it is passed!*/

console.log("Exercise 3: Write a function which receives an array as a parameter and prints the lowest number in the array to the console.");

/*Save the changes to your JavaScript file. Reload the HTML page in your browser.
 You should see the lowest number in the array printed in the console.  If not, investigate and fix.*/
 membersAge = [32, 31, 30, 23, 35, 29,];



 var min = membersAge[0];    

 //Loop through the array    

 function min_function (array){
   for (var i = 0; i < array.length; i++) {     

    if(membersAge[i] < min){    
        min = membersAge[i];
   }
  
  }
return min;
 }

function min_function2(array){
return Math.min.apply(Math, array);
}

function min_function3(array){
  console.log(Math.min(...array));   
}


 //Exercise 4: 
 console.log("Write a function which receives an array as a parameter and prints the biggest number in the array to the console.");

/*Save the changes to your JavaScript file. Reload the HTML page in your browser. 
You should see the biggest number in the array printed in the console. 
 If not, investigate and fix.*/
 var max = membersAge[0];    

 //Loop through the array    
 for (var i = 0; i < arraylength; i++) {     
    if(membersAge[i] > max){    
        max = membersAge[i];
   }
  }
 console.log(max);


 console.log("Exercise 5: Write a function which receives two parameters, an array and an index.");
/*  The function will print the value of the element at the given position (one-based) to the console.

For example, given the following array and index, the function will print '6'.  */ 
/* Save the changes to your JavaScript file and check your browser console. 
 You should see the number at the correct index printed in the console.  If not, investigate and fix. */
var array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
var index = 1;

function index_in_array(index, array){
  console.log(array[index])
}


console.log("Exercise 6: Write a function which receives an array and only prints the values that repeat")

/*EX6 For example, given the following array and index, the function will print '6,23,33,100'. */
var array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100]; 
/* Save the changes to your JavaScript file. Reload the HTML page in your browser. 
You should see an array of the repeated numbers printed in the console.  If not, investigate and fix.
 */

function duplicates(arry){
  var toFindDuplicates = arry.filter((item, index) => arry.indexOf(item)!== index);

  console.log(toFindDuplicates);
}


console.log("Exercise 7: Write a simple JavaScript function to join all elements of the following array into a string.")


/* Save the changes to your JavaScript file. Reload the HTML page in your browser. You should see the following in your console:

"Red", "Green", "White", "Black"

 If not, investigate and fix. 

SUBMIT:
Submit all your JavaScript code for the above exercises.   Use the "code" option for submitting.  */

myColor = ["Red", "Green", "White", "Black"];
myColor = myColor.join();

console.log(myColor);

console.log(typeof myColor);
document.getElementById("first_p").innerHTML = myColor;

/* console.log("Otra forma de hacer el ejercicio");

let miscolores = ["Red", "Green", "White", "Black"];

miscolores = miscolores.map();
console.log(miscolores[0]);
console.log(miscolores[1]);
console.log(miscolores[2]);
console.log(miscolores[3]);
 
console.log(typeof miscolores[1]);

/* for (i=0;  i< miscolores.length; i++){

} */
/*  */
console.log(typeof miscolores[1]);