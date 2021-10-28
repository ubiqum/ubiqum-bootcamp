
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

// ARRAYS AND STRINGS


// DOM OPERATIONS