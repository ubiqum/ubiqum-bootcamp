// encuentra el indice de los numeros del Array que sumados entre si sean igual al target

let percLeast = (membersArr.length / 100)*10;
console.log(percLeast);


let ar = [2, 7, 11, 15];
let target = 9;
let emptAr = [];
for (i = 0; i < ar.length; i++){
  for(j = i+1; j<ar.length; j++){
    if(ar[i] + ar[j] === target){
      emptAr.push(i);
      emptAr.push(j);
    }
  }
};
console.log(emptAr);