/* Desarrolla un método para verificar si una palabra es un palíndromo.
Casos de prueba: var word1 = 'madam' y var word2 = 'computadora' */


var word = prompt("Ingresa una palabra para verificar si es palindromo: ").toLowerCase()

function wordPalindrome(word){
    let palindrome = word.split('').reverse().join('')
    if(word == palindrome){
        console.log(`La palabra ${word} es un palíndromo`)
    }else{
        console.log(`La palabra ${word} no es un palíndromo`)
    }
}
wordPalindrome(word)