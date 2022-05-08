//Usando el ciclo while, pedir un numero al usuario y mostrar los multiplos de 5, 
//desde el 1 hasta el valor ingresado por el usuario.

let num = Number(prompt("Ingresa un numero"))
let cont = 0
let mulNumbers = num

while(mulNumbers/5 && mulNumbers>=5){
    console.log(`El numero ${mulNumbers} es multiplo de 5`)
    mulNumbers-=5
    cont++

}console.log(`El numero ${num} tiene ${cont} multiplos de 5`)