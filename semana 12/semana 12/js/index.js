function validar(){
    const nombre= document.getElementById("nombre").value;
    const edad= document.getElementById("edad").value;
    const telefono= document.getElementById("telefono").value;
    var ano = document.getElementById("ano").value;
    var mes = document.getElementById("mes").value;
    var dia = document.getElementById("dia").value; 
    fecha = new Date(ano, mes, dia); 
    id = document.getElementById("id").value;
    valor = document.getElementById("campo").value; 
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N'
    , 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']; 
    formulario = document.getElementById("formulario");
    opciones = document.getElementsByName("opciones"); 



    if( nombre == null || nombre.length == 0 || /^\s+$/.test(nombre) ){
        alert("Falta nombre");
        document.getElementById("nombre").focus();
        return false;
    }
    if( isNaN(edad) ) {
        alert("Falta la edad");
        document.getElementById("edad").focus();
         return false;
    } 
    if( !(/^\d{9}$/.test(telefono)) ) {
        alert("Falta el telefono");
        document.getElementById("telefono").focus();
        return false;
    } 
  
    if( indice == null || indice == 0 ) {
        alert("seleccione un dato");
        document.getElementById("opciones").focus();
        return false;
    }
    if( !isNaN(fecha) ) {
        return false;
    }
    if( !(/^\d{8}[A-Z]$/.test(valor)) ) {
        return false;
    }
    if(valor.charAt(8) != letras[(valor.substring(0, 8))%23]) {
        return false;
    }
    else(){
        for(var i=0; i<formulario.elements.length; i++) {
        var elemento = formulario.elements[i];
        if(elemento.type == "checkbox") {
        if(!elemento.checked) {
        return false;
            }
        }
    }
    }
        var seleccionado = false;
        for(var i=0; i<opciones.length; i++) {
        if(opciones[i].checked) {
        seleccionado = true;
        break;
        }
    }
    if(!seleccionado) {
    return false;
    } 
       
    return true;
};
// var global=0;

// // alert("Hola");

// function accion(){
//     alert("Has presionado el boton");
// }


// // function enviarMensaje(mensaje, numero){
// //     alert(`El primer parametro es: ${mensaje} y el segundo es: ${numero}`);
// // }

// // function enviarMensaje(){
// //     const valorInput= document.getElementById("valor").value;
// //     alert(valorInput);
// // }

// function enviarMensaje(){
//     const valor= document.getElementById("5").value;
//     alert(valor);
//     global=valor;
//     alert(global);
//     alert(partirMensaje());
//     document.getElementById("5").value=20;
//     document.getElementById("valor").value=25; // le asigna el valor que queremos a la variable ya que accedimos desde el documento
// }

// function cambiarColor(){
//     // para acceder al documento se accede por medio de document
//     const titulo = document.getElementById("titulo");
//     titulo.style.color="white";
//     titulo.style.backgroundColor="blue";
//     alert(global);
// }

// function cambiarColor1(){
//     // para acceder al documento se accede por medio de document
//     const titulo2 = document.querySelector(".titulo2");
//     titulo2.style.color="yellow";
// }

// function cambiarColor2(){
//     // para acceder al documento se accede por medio de document
//     const titulo2 = document.getElementsByClassName(".titulo");
//     titulo2.style.color="white";
//     titulo2.style.backgroundColor="blue";
// }

// function partirMensaje(){

//     return "Mensaje Partido"
    
// }