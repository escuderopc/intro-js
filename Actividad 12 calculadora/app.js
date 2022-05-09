//inicializar mi contador

let count = 0

//traer el elemento

let result = document.getElementById("result")
let reset = document.getElementById("reset")

let uno = document.getElementById("num1")
let dos = document.getElementById("num2")
let tres = document.getElementById("num3")
let cuatro = document.getElementById("num4")
let cinco = document.getElementById("num5")
let seis  = document.getElementById("num6")
let siete = document.getElementById("num7")
let ocho = document.getElementById("num8")
let nueve = document.getElementById("num9")
let cero = document.getElementById("numcero")
let suma = document.getElementById("sum")
let resta = document.getElementById("rest")
let mul = document.getElementById("mul")
let divi = document.getElementById("div")

function calculadora(){
    uno.onclick = function(n){
        result.textContent = result.textContent + "1"
    }
    dos.onclick = function(n){
        result.textContent = result.textContent + "2"
    }
    tres.onclick = function(n){
        result.textContent = result.textContent + "3"
    }
    cuatro.onclick = function(n){
        result.textContent = result.textContent + "4"
    }
    cinco.onclick = function(n){
        result.textContent = result.textContent + "5"
    }
    seis.onclick = function(n){
        result.textContent = result.textContent + "6"
    }
    siete.onclick = function(n){
        result.textContent = result.textContent + "7"
    }
    ocho.onclick = function(n){
        result.textContent = result.textContent + "8"
    }
    nueve.onclick = function(n){
        result.textContent = result.textContent + "9"
    }
    cero.onclick = function(n){
        result.textContent = result.textContent + "0"
    }
    suma.onclick = function(n){
        result.textContent = result.textContent + "+"
    }
    resta.onclick = function(n){
        result.textContent = result.textContent + "-"
    }
    mul.onclick = function(n){
        result.textContent = result.textContent + "*"
    }
    divi.onclick = function(n){
        result.textContent = result.textContent + "/"
    }
} 
//valores de los numeros de la calculadora
function num1(){
    count=1
    value.textContent = count

}
function num2(){
    count=2
    value.textContent = count
}
function num3(){
    count=3
    value.textContent = count
}
function num4(){
    count=4
    value.textContent = count
}
function num5(){
    count=5
    value.textContent = count
}
function num6(){
    count=6
    value.textContent = count
}
function num7(){
    count=7
    value.textContent = count
}
function num8(){
    count=8
    value.textContent = count
}
function num9(){
    count=9
    value.textContent = count
}
function numcero(){
    count=0
    value.textContent = count
}
//Boton de la funcion de recibir aqui estaran las funciones de sum, mult, div, rest
function recibe(){

}
function sum(){

}
function rest(){

}
function div(){

}
function rest(){

}
//Boton reset
function reset(){
    if(count != 0){
       count = 0
    }
    value.textContent = count
   }