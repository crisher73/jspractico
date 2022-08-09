// pregunta 3
var nombre = "Cristina";
var lastname = " Hernández";
var usernamePlatzi = "Cristina";
var age = 29; 
var email = "achh17@gmail.com";
var adult = true;
var savedMoney = 1000;
var debtMoney = 100;


// nombre completo
var nombre = "Cristina ";
var lastname = "Hernández";
var nombreCompleto = "mi nombre es " + nombre +  lastname 
console.log(nombreCompleto);


// dinero real
var savedMoney = 1000;
var debtMoney = 100;
var dineroReal = savedMoney - debtMoney
console.log(dineroReal);

// funciones: Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:
const nombre = "Angela Cristina";
const lastname = "Hernandez Herrera";
const completeName = nombre + lastname;
const nickname = "Cris";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

// así lo resolví,
function nombreCompleto(nombre,lastname, nickname){
    console.log(`mi nombre es ${nombre}${lastname}, pero prefiero que me digas ${nickname}`);
}
nombreCompleto("Cristina", " Hernandez", "Crispetica");
nombreCompleto("Alfredo ","Ortegon", "Fredo"); 


// otra forma podria ser 
function nombreCompleto(nombre, lastname){
    return nombre + ' ' + lastname
}
function saludo(nombre, lastname, nickname){
    const completeName= nombreCompleto(nombre, lastname);
    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".")
}


//Condicionales : Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

// lo resolví así, el resultado cambia, cuando cambia el tipo de suscrpcion

if(tipoDeSuscripcion == "Free"){
    console.log("Solo puedes tomar los cursos gratis");
}
else if(tipoDeSuscripcion == "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes"); 
}
else if(tipoDeSuscripcion == "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}
else if(tipoDeSuscripcion == "ExpertPlus"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}
else{
    console.log("No tienes ninguna suscripción");
}
const tipoDeSuscripcion = "Expert";


//  Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).
function conseguirTipoSuscripcion(suscripcion) {
    if (suscripcion == 'Free') {
        console.log("Solo puedes tomar los cursos gratis");
        return;
    }
    
    if (suscripcion == 'Basic') {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        return;
    }
    
    if (suscripcion == 'Expert') {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un aÃ±o");
        return;
    }
    
    if (suscripcion == 'ExpertDuo') {
        console.log("TÃº y alguien mÃ¡s pueden tomar TODOS los cursos de Platzi durante un aÃ±o");
        return;
    }

    console.warn('Ese tipo de suscripciÃ³n no existe')
}



//Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays u objetos y un solo condicional. 😏

// lo resolvi asi con solo 1 condicional, con arrays.
var tipoDeSuscripcion= ["free","basic","expert","expertplus"]
var plan= ["Solo puedes tomar los cursos gratis",
"Puedes tomar casi todos los cursos de Platzi durante un mes",
"Puedes tomar casi todos los cursos de Platzi durante un año",
"Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"]
var suscripcionUsuario= "expert";
for(var i=0; i< tipoDeSuscripcion.length; i++){
    if(suscripcionUsuario==tipoDeSuscripcion[i]){
        console.log(`Estas suscrito al plan ${tipoDeSuscripcion[i]} en la cual ${plan[i]}`)
    }
}

// otra forma de resolverlo seria así
const tiposDeSuscripciones = {
    free: 'Solo puedes tomar los cursos gratis',
    basic: 'Puedes tomar casi todos los cursos de Platzi durante un mes',
    expert: 'Puedes tomar casi todos los cursos de Platzi durante un aÃ±o',
    expertduo: 'TÃº y alguien mÃ¡s pueden tomar TODOS los cursos de Platzi durante un aÃ±o',
};

function conseguirTipoSuscripcion(suscripcion) {
    if (tiposDeSuscripciones[suscripcion]) {
        console.log(tiposDeSuscripciones[suscripcion]);
        return;
    }

    console.warn('Ese tipo de suscripciÃ³n no existe')
}

// Ciclos: Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

//lo resolví así, usando while
let i = 0;
while (i < 5){
   i++;
   console.log("El valor de i es: " + i );
}

let i = 10;
while ( i >= 2){
   i--;
   console.log("El valor de i es: " + i );
}


//Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.
// Pista: puedes usar la función prompt de JavaScript.


var suma = prompt('Cuanto es 2 + 2?');
var respuesta = parseInt(suma);
if (respuesta===4){
    alert('Felicitaciones!');
}
else{
    alert('intentalo de nuevo');
}



// Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

// este funciona para nombrar el primer elemento de un array previamente establecido. 
var productosAnthophila = ["Bikecream","Cepillo de dientes", "Pitillo"];
console.log(productosAnthophila[0]);

// cualquier array
function imprimirProductoAnthophila(eco){
    console.log(eco[0])
}
imprimirProductoAnthophila(["bikecream", "cepillo", "pitillo"])


//  Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

var productosAnthophila = [ "bikecream", "jabones", "cepillos", "champus"]
function imprimir(productos){
    for (var i=0; i<productos.length;i++){
        console.log(`${i+1} ${productos[i]}`)
    }
}
imprimir(productosAnthophila);

//Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).


// imprimir objeto completo
var miBici = {
    marca: 'Scott',
    modelo: 'scale 896',
    color: 'negro-naranja',
    talla: 'S',
    caracteristicasBici: function(){
        console.log(`Mi bici es una ${this.marca} ${this.modelo} ${this.color} ${this.talla}`)
    }
}
miBici.caracteristicasBici();

// imprimir elemntos de mi objeto 1 por 1
const miBici = {
    marca: 'Scott',
    modelo: 'scale 960',
    color: 'negro-naranja',
    talla: 'S',
}
function imprimirElementoporElementoMiBici(miBici){
    const arr = Object.values(miBici);
    for (let i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
}
imprimirElementoporElementoMiBici(miBici)