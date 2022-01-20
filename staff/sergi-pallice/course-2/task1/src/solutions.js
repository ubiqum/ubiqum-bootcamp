
// EXPRESSIONS
export const rectPerimeter = (x, y) => x*2 + y*2;
export const rectArea = (x, y) => x * y;
export const triArea = (x, y) => x * y * 0.5;
export const ringArea = (x, y) => Math.PI * (y**2) - Math.PI * (x**2);
export const f2c = (x) => (x - 32) * (5/9);
export const c2f = (x) => x * 1.8 + 32;

// STRINGS
export const makeName = (x, y) => y + ', ' + x;
export const ellide = (x) => x.substring(0,6) + '...';

// CONDITIONALS
export const longer = (s1, s2) => [s1, s2].sort(
    function(a, b){
    // ASC  -> a.length - b.length
    // DESC -> b.length - a.length
    return b.length - a.length; 
    })[0];
export const mid3 = (x, y, z) => [x, y, z].sort()[1];
export const lastFirst = (x) => {
    if (Object.keys(x).length === 2) {
        return x['last'] + ', ' + x['first']
        } else if (Object.keys(x).length === 1) {
            return x[Object.keys(x)]
        } else { return '' }
     };

// ARRAYS
export const subArray = (arr, ind) => {
    var result = []
    ind.forEach(element => result.push(arr[element]))
    return result
};
export const over21 = arr => {
    var result = []
    arr.forEach(element => {if (element['age'] >= 21) {result.push(element)} });
    return result
};
export const product = arr => arr.reduce((acc, val) => acc * val);
export const getRepeats = arr => {
    var result = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i]) && !result.includes(arr[i]) ) {
        result.push(arr[i])
      }
    }
    return result;
};
export const aboveAverage = obj => {
    var avg = [], result = [];
    obj.forEach(element => avg.push(element['score']));
    avg = avg.reduce((a,b) => a + b, 0) / avg.length;
    obj.forEach(element => element['score'] > avg ? result.push(element) : 0);
    return result;
};

// ARRAYS AND STRINGS
export const reverseNumber = (num) => parseInt(String(num).split("").reverse().join(""));
export const isWordAnagram = (w1, w2) => {
    const sort = str => str.split('').sort().join('');
    return sort(w1) === sort(w2); 
};
export const isPhraseAnagram = (s1, s2) => {
    const noSpaceAndLowerCase = str => str.split('').filter(e => e.trim().length).join('').toLowerCase();
    const sort = str => str.split('').sort().join('');
    return sort(noSpaceAndLowerCase(s1)) === sort(noSpaceAndLowerCase(s2));
};
export const longestWords = str => {
    var length = str.split(' ').sort((a,b) => b.length - a.length)[0].length;
    var result = [];
    str.split(' ').forEach(element => {if (element !== '' && element.length === length) {result.push(element)} })
    return result;
};

// DOM OPERATIONS
export const moduleTitles = () => {
    var x = document.getElementsByClassName("module-title");
    var y = [];
    for (var i = 0; i < x.length; i++) {
        //console.log(x[i].innerText);
        y.push(x[i].innerText);
    }
    return y;
}

export function goPurple() {
    var x = Array.from(document.querySelectorAll('div')).find(el => el.textContent === 'goPurple');
    x.innerHTML = '<span style="color:purple">goPurple</span>'
    return 'Go Purple!'
} 

export const copycat = (x) => {var y=[0, 100, 'hello!', [1, 2, 3] ]; return y[x]};