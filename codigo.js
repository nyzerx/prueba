console.log("Hola");
console.log("Como estas?");

var numeroVar;
let numeroLet;
//const numeroConst = document.getElementById("id");

numeroVar = 10;
numeroLet = 20;

console.log("Suma: "+(numeroVar+numeroLet));

//Estructuras de control
var edad = 18;
var nota = 40;

if(edad >= 18 && nota >= 40){
    console.log("Es mayor de edad y aprobo");
}else{
    console.log("Es menor de edad y no aprobo");
};

var opcion = 3;

switch(opcion){
    case 1:
        console.log("opcion 1");
        break;
    case 2:
        console.log("opcion 2");
        break;
    case 3:
        console.log("opcion 3");
        break;
    default:
        console.log("opcion no valida");
        break;
}

//Estructuras repetitivas

//1...n
let cont = 0;
do {
    cont ++;
} while (cont < 10);

//0...n
while (cont > 10) {
    cont --;
}

for (let i = 0; i < 10; i++) {
    console.log(i);
}

var edad = prompt("Ingrese su edad");
var nombre = prompt("Ingrese su nombre");
//console.log("Su edad es: "+edad);

document.write("<h1>Su nombre es: "+nombre+"</h1>");
document.write("<h2>Su edad es: "+edad+"</h2>");