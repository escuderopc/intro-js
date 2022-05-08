//Un numero que es igual a 50, se sacan todos sus numeros impares, empieza en uno.

var numImpar = ""
for(let num=1; num<=50; num++){
    if(num %2 != 0){
    numImpar += "\n"+num
    }
}
console.log("Los numeros impares son: "+numImpar)