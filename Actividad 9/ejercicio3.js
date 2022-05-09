/**
 * Verifica si la propiedad name se encuentra dentro del siguiente objeto:
     var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };
*/
var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};
//usar propiedades 
if(student.name){
    console.log("La propiedad name se encuentra del objeto")
}else{
    console.log("La propiedad name no esta dentro del objeto")
}