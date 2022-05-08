//inicializar mi contador

let count = 0

//traer el elemento

let value = document.getElementById("contador")

//metodo del evento incrementar

function increment(){
    count++
    value.textContent = count
}
//Ejercicio - boton 2 de decremenatr sin llegar a los negativos
//boton 3 de reset al contador
function decrement(){
 if(count>0){
    count--
 }
 value.textContent = count
}
//Boton reset
function reset(){
    if(count != 0){
       count = 0
    }
    value.textContent = count
   }