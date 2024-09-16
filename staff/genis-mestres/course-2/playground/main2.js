

console.log("Exercise 1: Write a JavaScript function that reverses a number. For example, if x = 32443 then the output should be 34423");

/* Save your JavaScript file and reload the page. Make sure you see the correct output.  If not, investigate and fix.*/
function reverseNum(n) {
  
    let r = n.toString().split('') /*  creates an array from strings, 
    le indicas en como se separan los elementos. Si fueran palabras le indicaríamos que cada espacio hace un elemento nuevo, cada palabra es un elemento. 
    Aquí sólo hay números con lo que todo es un elemento
    -*/
                        .reverse()
                        .join('');  
    return parseInt(r);
                    }

console.log(reverseNum(123));



console.log("Exercise 2: Write a JavaScript function that returns a string in alphabetical order.");
/* For example, if x = 'webmaster' then the output should be 'abeemrstw'. 
 Punctuation and numbers aren't passed in the string.
Save your JavaScript file and reload the page. Make sure you see the correct output.  
If not, investigate and fix. */

function orderLetters(l) {
  
    let r = l.split('') /*  creates an array from strings, 
    le indicas en como se separan los elementos. Si fueran palabras le indicaríamos que cada espacio hace un elemento nuevo, cada palabra es un elemento. 
    Aquí sólo hay números con lo que todoes un elemento
    -*/
                        .sort()
                        .join('')

    return r;
                    }


console.log(orderLetters('webmaster'));
console.log(typeof orderLetters('webmaster'));


console.log("Exercise 3: Write a JavaScript function that converts the first letter of every word to uppercase. ")
/* 
For example, if x = "prince of persia" then the output should be "Prince Of Persia".

Save your JavaScript file and reload the page. Make sure you see the correct output.  If not, investigate and fix.

  */


var sentence = "prince of persia";
function capital_letter(phrase){

    let new_array =  phrase.toLowerCase()
                        .split(" ")
                        .map(x=>{
        return x.substring(0,1).toUpperCase()+x.substring(1) //.substring gets the reset of the characters of the word.
    })
                        .join(" ");      

    return new_array;

}

console.log(capital_letter(sentence));

/*
Exercise 4: Write a JavaScript function that finds the longest word in a phrase. For example, 
if x = "Web Development Tutorial", then the output should be "Development".

Save your JavaScript file and reload the page. Make sure you see the correct output.  If not, investigate and fix. */
sentence_longest = "Web Development Tutorial";
function longest_word(phrase){
    let array_of_words =  phrase.split(" ");
    /* console.log(array_of_words); */
    let num_characters_a =  array_of_words.map(x=>{
                                return x.length;
                                });
                            
    let max_character = Math.max(...num_characters_a);


    /* console.log(max_character); */
    let index_longest_w = num_characters_a.indexOf(max_character)
    /* console.log(index_longest_w); */
    console.log(array_of_words[index_longest_w]); 
    return array_of_words[index_longest_w]; 
                               
   }       
                           
                        
 longest_word(sentence_longest);

 // Another way to solve exercise 7 

console.log("Solution II");
 function longest_word_II(phrase){
    let array_of_words =  phrase.split(" ");
    let result = ""; 
    for(var i = 0; i<array_of_words.length; i++){
        if(array_of_words[i].length > result.length){
             result = array_of_words[i];
            }
        }
    return result;
 }

 console.log(longest_word_II(sentence_longest));

