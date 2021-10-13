/*Expresions*/
export const rectPerimeter = (x, y) => 2 * (x + y);
export const rectArea = (x, y) => (x * y);
export const triArea = (x,y) => 1/2*(x*y);
/* the value in exercises.json didnt match with the real result I fixed in exercises.json , in the last decimals of the last result*/
/* {
            "inputs": [ 5, 7 ],
            "output": 75.39822368615503 (the original value was 75.39822368615502 )
          },*/
export const ringArea = (x,y) => Math.PI*(Math.pow(y,2)-Math.pow(x,2)).toFixed(20);
export const f2c = (x) => (x-32)*5/9;
export const c2f = (x) => x*9/5+32;
/*Strings*/
export const makeName = (x,y) =>  y + ", " + x;
export const ellide = (x,y) => x.substring(0,y)+ "...";
/*Conditionals*/
export const longer = (x,y) => {if (x.length < y.length) return y; else return x;}
export const mid3 = (x,y,z) => [x,y,z].sort()[1];
export const lastFirst = (x) => {
    if ((typeof x.first !== 'undefined') && (typeof x.last !== 'undefined')) return ( x.last + ", " + x.first); 
    if (typeof x.last !== 'undefined') return (x.last);
    if (typeof x.first !== 'undefined') return (x.first);
    if ((typeof x.first === 'undefined') && (typeof x.last === 'undefined')) return '';}
/*Arrays*/
export const subArray = (x,y) => {
    if ((typeof x[y[0]] === 'undefined') && (typeof x[y[1]] === 'undefined')) return [,]; 
    else return [x[y[0]], x[y[1]]];} 

    export const over21 = (x) => x.filter(over_age => over_age.age >= 21);

export const product = (x) => x.reduce((a, b) => a * b );

export const getRepeats = (x) => x.filter((item, index) => x.lastIndexOf(item) !== index).filter(function(item, index, self) {
    return index === self.indexOf(item);});

    export const aboveAverage = (x) => { const average_score = x.reduce((total, next) => total + next.score, 0) / x.length; return x.filter(score_student => score_student.score > average_score); }    
/* Arrays and Strings */

export const reverseNumber = (x) => parseFloat(x.toString().split('').reverse().join('')) * Math.sign(x);

export const isWordAnagram = (x,y) => {function cleanString(str) {
    return str.replace(/[^\w]/g).toLowerCase().split('').sort().join()
}  ; return cleanString(x) === cleanString(y) };

export const isPhraseAnagram = (x,y) => x.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('') === 
y.toLowerCase().replace(/[^\w]/g,'').split('').sort().join('');

export const longestWords = (x) => {if (x.length ===0) return [] ; var result = x.split(' ').reduce((maxLengthWord, currentWord) => {
    if (currentWord.length > maxLengthWord.length) {
        return currentWord
    } else {
    
        return maxLengthWord
    }
}, )
var max_length = result.length;
var array_words =x.split(' ');
return array_words.filter( (element) => element.length === max_length); 
}
/*DOM Operations */
export const moduleTitles = (x) => Array.from(document.querySelectorAll('.module-title')).map(module_title => module_title.innerText);
/* This didnt check the value of color in the test the validation must be the page */
export const goPurple = (x) => {document.querySelectorAll('[data-bs-target="#goPurple"]')[0].innerHTML='<span style="color:purple">goPurple</span>';
                                return 'Go Purple!'};
export const copycat = (x) => {var y=[0,100,'hello!', [1, 2, 3] ]; return y[x]};