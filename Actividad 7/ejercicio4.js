/*Crea un progranma, el cual sirva convertir temperaturas. De Celsius a Fahrenheit y viceversa
*De Celsius a Fahrenheit, F = (C * 1.8) + 32
* 1°C = 38.8° F
*De Fahrenheit a Celsius,  C = (F - 32)*1.8 = -17.22 C
*1°F = -17.22° C
*/
let opc = Number(prompt("Conversor de temperaturas \n  Elija la opcion de conversion \n 1- Celsius a Fahrenheit \n 2- Fahrenheit a Celsius  "))
let temperature = prompt("Escriba la temperatura")
if(opc===1){
    let temFahrenheit = (temperature * 1.8) + 32
   alert(`\n ${temperature} °C corresponde a ${temFahrenheit} °F`)
}else if(opc===2){
   let  temCelsius = (temperature -32)/1.8
   alert(`\n ${temperature} °F corresponde a ${temCelsius} °C`)
}
