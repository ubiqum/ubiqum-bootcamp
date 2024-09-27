//array sacar numeros pares con while y loop

var classAge = [32, 243, 246, 1000, 298, 233]

while(classAge = classAge){
    var classEven = classAge.filter(function(x){
        return x % 2 == 0;
    });
    classAge++
}


for(var i=0; i<classAge.length; i++){
    if(classAge[i] % 2 == 0);
    console.log(classAge[i])
}
