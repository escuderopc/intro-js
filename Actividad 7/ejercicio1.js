/*Crear una funcion que reciba 2 parametros (una oracion y una palabra)
*si la palabra a buscar es igual a a una delas palbras que contenga la oracion entonces retorna un true
*en el caso contrario si la palabra a bsucar no contiene nada de mi oracion entonces retorna un false
*/

function findWords(text, word){
    if(text.includes(word)){
        return true
    }else{
        return false
    }
}
findWords("Hola mundo", "perro")

