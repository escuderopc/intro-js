/**
 * Del siguiente objeto:
    var student = {
        name: "David Rayy",
        age: 34,
        job: "engineer",
        hobbies: ['Sky', 'football', 'walking my dog']
    };
 * 
    1. Muestra en pantalla el valor de la propiedad name mediante dot notation
    2. Muestra en pantalla el valor de la propiedad age mediante bracket notation
    3. Modifica el valor de la propiedad name y que el nuevo valor sea: "Steve Jobs"
 */
    var student = {
        name: "David Rayy",
        age: 34,
        job: "engineer",
        hobbies: ['Sky', 'football', 'walking my dog']
    };
    console.log(student.name) //Muestra en pantalla el valor de la propiedad name mediante dot notation
    console.log(student["age"]) //Muestra en pantalla el valor de la propiedad age mediante bracket notation
    student.name = "Steve Jobs" //Modifica el valor de la propiedad name y que el nuevo valor sea: "Steve Jobs"
    console.log(student.name)