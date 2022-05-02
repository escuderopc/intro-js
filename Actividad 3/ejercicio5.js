//El usaurio ingresa tres números y el programa detrmina cual es el número mayor
//Se consideran los casos en que los números sean iguales
var num1 = Number(prompt("Ingresa el primer numero"))
var num2 = Number(prompt("Ingresa el segundo numero"))
var num3 = Number(prompt("Ingresa el tercer numero"))

//El numero 1 es mayor que los numeros 2 y 3
if(num1>num2 && num1>num3){
    console.log("Los números son: \n"+"Primer número: "+num1+"\nSegundo número: "+num2+"\nTercer número: "+num3)
    console.log("El numero mayor es "+num1)}
//El numero 1 es mayor que el numero 2 pero es igual a el numero 3
else if(num1>num2 && num1==num3){
    console.log("Los números son: \n"+"Primer número: "+num1+"\nSegundo número: "+num2+"\nTercer número: "+num3)
    console.log("Los números "+num1+" y "+num3+" son iguales")}
//El numero 1 es igual que el numero 2 pero es mayor que el numero 3
else if(num1==num2 && num1>num3){
    console.log("Los números son: \n"+"Primer número: "+num1+"\nSegundo número: "+num2+"\nTercer número: "+num3)
    console.log("Los números "+num1+" y "+num2+" son iguales")}   
//El numero 2 es mayor que los numeros 1 y 3
else if(num2>num1 && num2>num3){
    console.log("Los números son: \n"+"Primer número: "+num1+"\nSegundo número: "+num2+"\nTercer número: "+num3)
    console.log("El numero mayor es "+num2)}
//El numero 2 es mayor que el numero 1 pero es igual a el numero 3    
else if(num2>num1 && num2==num3){
    console.log("Los números son: \n"+"Primer número: "+num1+"\nSegundo número: "+num2+"\nTercer número: "+num3)
    console.log("Los números "+num2+" y "+num3+" son iguales")}
//El numero 2 es igual que el numero 1 pero es mayor a el numero 3    
else if(num2==num1 && num2>num3){
    console.log("Los números son: \n"+"Primer número: "+num1+"\nSegundo número: "+num2+"\nTercer número: "+num3)
    console.log("Los números "+num1+" y "+num2+" son iguales")}   
//El numero 3 es mayor que los numeros 1 y 2
else if(num3>num1 && num3>num2){
    console.log("Los números son: \n"+"Primer número: "+num1+"\nSegundo número: "+num2+"\nTercer número: "+num3)
    console.log("El numero mayor es "+num3)}
//El numero 3 es mayor que el numero 1 pero es igual a el numero 2
else if(num3>num1 && num3==num2){
    console.log("Los números son: \n"+"Primer número: "+num1+"\nSegundo número: "+num2+"\nTercer número: "+num3)
    console.log("Los números "+num2+" y "+num3+" son iguales")
}
//El numero 3 es igual que el numero 1 pero es mayor a el numero 2
else if(num3>num1 && num3==num2){
    console.log("Los números son: \n"+"Primer número: "+num1+"\nSegundo número: "+num2+"\nTercer número: "+num3)
    console.log("Los números "+num1+" y "+num3+" son iguales")
}
//Los tres números son iguales
else if(num1==num2 && num1==num3 && num2==num3){
    console.log("Los números son: \n"+"Primer número: "+num1+"\nSegundo número: "+num2+"\nTercer número: "+num3)
    console.log("Los números "+num1+", "+num2+" y "+num3+" son iguales")
}


