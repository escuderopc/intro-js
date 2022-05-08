//Dado un array de numeros enteros hacer una funcion que muestre la suma de sus elementos

var numbers = [1, 2, 3, 4, 10, 11]
let suma = 0
function sumArray(numbers){
    for(let i=0; i<numbers.length; i++){
        suma += numbers[i] 
    }console.log("La suma es: "+suma)
}
sumArray(numbers)