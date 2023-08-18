// alert('HOLA')
// Variables: string number boolean [] date
// Tipo objetos

//diferencia es el scope=ámbito
// var nombre='Pedro';
// let apellido='Perez';

// if(true){
//     var nombre='Pedro';
//     let apellido='Perez';
// }

// alert(nombre);
// // alert(apellido);

// let bandera=true;
// let edad=21;
// let precio=3.35;
// let lista=[];
// let fecha= new Date().getFullYear();
// alert(fecha);
// // let fech= new Date().getDay();
// // alert(fech);

// // javascript coersion
// // if(5=="5"){
// //     alert('siiiiii');
// //     console.log('siiiii')
// // }else if(5>3){
// //     alert('verdadero')
// // }else{
// //     alert('falso')
// // };

// // if(5!=="5"){
// //     alert('siiiiii')
// //     console.log('siiiii')
// // }else if(5>3){
// //     alert('verdadero')
// // }else{
// //     alert('falso')
// // };

// // if(5==="5"){
// //     alert('siiiiii');
// //     console.log('siiiii')
// // }else if(5>3){
// //     alert('verdadero')
// // }else{
// //     alert('falso')
// // }
// // const PI=3.14;
// // PI=3222;

// const Persona={
//          cedula:'11111',
//          nombre:'pedro',
//          apellido1:'perez',
//          apellido2:'rojos',
//          edad:15
// };

// alert(Persona.cedula);
// // string template
// alert(`El nombre de la persona es ${Persona.nombre} y tiene una edad de ${Persona.edad}`);

// // es para ver si el objeto tiene la propiedad
// let tiene= Persona.hasOwnProperty('edad');
// alert(tiene);

// let  tienePerro;
// console.log(tienePerro);
// alert(tienePerro);
// tienePerro=null;

// // sirve para valorar si una variable tiene o no valor y el programa no se va a caer
// if(tienePerro){
//     alert('tiene Perro');
// }else{
//     alert('no tiene perro');
// }

// tienePerro=null;
// if(tienePerro){
//     alert('tiene Perro');
// }else{
//     alert('no tiene perro');
// }

// tienePerro=true;
// if(tienePerro){
//     alert('tiene Perro');
// }else{
//     alert('no tiene perro');
// }

let listaColores=['Rojo','Negro','Azul'];
// alert(listaColores[1]);
// alert(listaColores[1].length);
// alert(listaColores.length);


// for
for(let i=0; i<listaColores.length;i++){
    console.log(listaColores[i]);
}

// for each
console.log('foreach');
listaColores.forEach(element => {
    console.log(element);
});

listaColores.forEach((valor, index) => {
    if(index % 2==0){
    console.log(`El valor es ${valor} y el indice es ${index}`);
    }
});

// map
console.log('map');
listaColores.map((valor, index) => {
    console.log(`El valor es ${valor} y el indice es ${index}`);
})

// listaColores.map((valor, index) => {
//     console.log(`El valor es ${valor} y el indice es ${index}`);
// }).filter(x=>x.equals('Azul'));


const listaPersonas=[{
    cedula:'66666',
    nombre:'PEDRO',
    apellido:'PEREZ',
    edad:50
},
{
    cedula:'44444',
    nombre:'MARIA',
    apellido:'REAL',
    edad:25
},
{
    cedula:'66666',
    nombre:'PETER',
    apellido:'PORRAS',
    edad:6
}
]

const listaResultados = listaPersonas.map((persona, index)=>{
    let nombreRes=`Mi nombre es ${persona.nombre} ${persona.apellido}`;
    return{
        id:index,
        cedula:persona.cedula,
        nombre:nombreRes,
        edad:persona.edad
    }
}).filter(x=>x.edad>18);

console.log(listaResultados);
console.log(...listaResultados);

// function saludar2(){
//     alert(prueba);
// }

// function saludar(){
//     var prueba=5;
// }

// saludar2();
// saludar();