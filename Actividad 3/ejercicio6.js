//El usuario ingresa su nombre y edad para ingresar a la discoteca
//Si tiene 18 o más y su nombre es Mario o Carlos, ingresa como VIP
//Si su edad es menor de 18, no puede ingresar a la discoteca
var nombre = prompt("Ingresa tu nombre ").toLowerCase()
var edad = Number(prompt("Ingresa tu edad "))

if(edad>=18){
    if(nombre=="Mario" || nombre=="Carlos"){
        alert("Ingresa a la discoteca como VIP")
    }else{
        alert("Ingresa a la discoteca")
    }}  
else if(edad<18){
        alert("No puede ingresar a la discoteca, es menor de edad")
    }
    
 
