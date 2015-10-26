/*alert("Alert! Alert! Last call to board Train #4!");
confirm("Dude. Are you sure you wanna ride #8? Just saying.");
console.log(prompt("What soul hath allowed the canines to exit?"));
*/

/*console.log(typeof prompt);
var respuesta = confirm('esta seguro ?')
if (respuesta) {
    alert('Usted confirmo el mensaje, esta loco!!!')
} else {

    console.log(prompt("Ingrese aca la razon porque pulso CANCELAR!!"))
}
*/
/*
var num = 10;
while (num > 10) {
    if (num % 2 == 0) {
        console.log("numero"+num)
    }
    num--;
}
*/
/*
function sumOfCubes(a, b){
    var total=(a*a*a)+(b*b*b); 
    return total;
}

console.log("la suma total de los dos cubos es "+sumOfCubes(136,956));


*/
/*
var enemigos = ["Pedro Cuasqui", "Jonathan Morocho", "Efren Sandoval", "Adrian Eguez", "Fernando Maila"];

var contador = 0;
while (contador < enemigos.length) {
    if (enemigos[contador].length > 12) {
        console.log(enemigos[contador] + " es un buen amigo");
    } else {
        console.log(enemigos[contador] + " no es buen amigo");
    }
    contador++;
}

var amigoViajero = enemigos.pop();
console.log("EL ultimo amigo es "+amigoViajero);
console.log(enemigos);
enemigos.push(amigoViajero);
 
 console.log(enemigos);
//numero, tru or false numero y una funcion

*/
/*
var booleano =confirm("Pulsa un boton");

var arregloObjetos=[4,booleano, "string", prompt];
console.log(arregloObjetos)
*/
/*var peces = ["pargo", "trucha", "salmon", "tiburon"];
var precioPeces = [45, 4, 12, 1];
var arregloBidimensional = [peces, precioPeces];
console.log(arregloBidimensional[1][1]);
*/

function funcionGeneral(x, y, funcionEspecifica) {
    return funcionEspecifica(x, y);
}

function desplegarNombre(nombre, apellido) {
    return nombre + apellido;

}


console.log(funcionGeneral("pedro ", "cuasqui", desplegarNombre))

var hola;



///CALLBACK LLAMADAS A FUNCIONES ESPECIFICAS DENTRO DE UNA FUNCION GENERAL

// HOISTING EL COMPILADOR PRIMERO HACEN LAS DECLARACIONES  DE FINCIONES Y VARIABLES Y LUEGO SE HACEN LAS DEFINICIONES

//CLOUSURES ,, ES COMO GUARDAR UNA FUNCION DENTOR DE UNA VARIABLE AY RECORDAR LAS VARIABLES USADAS DENTRO DE ESA FUNCION

//IIFS INMEDIATLY INVOQUED FUCNTION EXPRESSION

//