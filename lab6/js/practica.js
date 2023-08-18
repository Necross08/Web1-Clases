var gunter = {
    name: "Gunter",
    origin: "Adventure Time",
    canFly: false,
    sayHello: function () {
    console.log("QUACK!!!");
    }
   }; 

var ramon = {
    name: "Ramón",
    origin: "Happy Feet",
    canFly: true,
    sayHello: function () {
    console.log("Estoy encantado de conocerle.");
    }
    }; 
var fred = {
    name: "Fred",
    origin: "Sitting Ducks",
    canFly: false,
    sayHello: function () {
    console.log("Hi there!");
    }
   }; 
   console.log("Ejercicio#1");
//I. Cree un arreglo con los 3 pingüinos adentro. (recuerden que pueden
//asignar valores de variables y no quemar valores dentro del arreglo.
let listaPinguinos = [gunter,ramon,fred];
console.log(listaPinguinos[0].name);
console.log(listaPinguinos[1].name);
console.log(listaPinguinos[2].name);

console.log("Ejercicio#2");
//Escriba un ciclo for para iterar a través de cada pingüino en la matriz e
//imprima el valor de la propiedad del nombre de cada pingüino en la
//consola. 
for (let i = 0; i < listaPinguinos.length; i++) {
    console.log(listaPinguinos[i].name);
}
console.log("Ejercicio#3");
//III. Imprima la longitud de la matriz de pingüinos en la consola. 
console.log("Longitud de la matriz de pingüinos:", listaPinguinos.length);

console.log("Ejercicio#4");
//IV. Escriba un ciclo for para iterar a través de cada pingüino en la matriz y
//agregue una nueva propiedad a cada pingüino llamada numberOfFeet con
//un valor aleatorio del 1 al 5. 

for (let i = 0; i < listaPinguinos.length; i++) {
    
    let numberOfFeet = Math.floor(Math.random() * 5) + 1;
    listaPinguinos[i].numberOfFeet = numberOfFeet;
}

console.log(listaPinguinos);

console.log("Ejercicio#5");
/*V. Escriba otro ciclo for para iterar a través de cada pingüino en la matriz, y
para cada pingüino que pueda volar, imprima en la consola un mensaje que
contenga el nombre del pingüino y "¡puede volar!" - por ejemplo, "¡Gunter
puede volar!" o "¡Ramón puede volar!" (No hagas nada por los pingüinos
que no pueden volar). */

for (let i = 0; i < listaPinguinos.length; i++) {
    if(listaPinguinos[i].canFly){
        console.log(listaPinguinos[i].name + " puede volar!");
    }
}

console.log("Ejercicio#6");
//VI. Devuelva un arreglo solo con los pingüinos que tienen más de 2 pies. 

let pingüinosQueTienenMasDeDosPies = listaPinguinos.filter(function(pinguino) {
    return pinguino.numberOfFeet > 2;
});

console.log(pingüinosQueTienenMasDeDosPies);

console.log("Ejercicio#7");
/*VII. Agregue una nueva propiedad a su pingüino llamada favoriteFoods y
configúrela igual a una matriz que contiene una lista de tres cadenas. */

gunter.favoriteFoods = ["Pescado", "Helado", "Pizza"];
ramon.favoriteFoods = ["Hamburgesa", "Nachos", "Salchipapas"];
fred.favoriteFoods = ["Ramen", "Wan tan", "Salchipapicarne"];

console.log(gunter);
console.log(ramon);
console.log(fred);

console.log("Ejercicio#8");
/*VIII. Accede a la segunda comida favorita de sus pingüinos e imprímela en la
consola usando console.log () */

console.log("Segunda comida favorita de Gunter es:", gunter.favoriteFoods[1]);
console.log("Segunda comida favorita de Ramón es:", ramon.favoriteFoods[1]);
console.log("Segunda comida favorita de Fred es:", fred.favoriteFoods[1]);

console.log("Ejercicio#9");
/*IX. Sin modificar nada de su código anterior, escriba una nueva línea de código
que cambie el valor del último elemento de la lista a "piñas"
(sobrescribiendo el valor anterior). */

gunter.favoriteFoods[2] = "Piñas";
ramon.favoriteFoods[2] = "Piñas";
fred.favoriteFoods[2] = "Piñas";

console.log(gunter);
console.log(ramon);
console.log(fred);

console.log("Ejercicio#10");
/*X. Escriba un cilo for para recorrer cada comida en la propiedad de comida
favorita de sus pingüinos e imprima cada una en la consola. */

for (let i = 0; i < listaPinguinos.length; i++) {
    console.log("Comidas favoritas de " + listaPinguinos[i].name + ":");
    for (let j = 0; j < listaPinguinos[i].favoriteFoods.length; j++) {
        console.log(listaPinguinos[i].favoriteFoods[j]);
    }
    console.log("");
}