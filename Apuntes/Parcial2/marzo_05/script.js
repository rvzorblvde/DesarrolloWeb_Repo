// Se le llama index o main

// Función Básica se ejectura de golpe 
// const a = 2;
// const b = 3;
// const c  = a + b;
// console.log(5);
// console.log(a);
// alert("Revisa la consola");

//Muestra el numero resultante
//UNDEFINED es porque no tiene un return 
function saludar() {
        const a = 2;
        const b = 3;
        const c  = a + b;
        console.log(5);
        //console.log(a);
        //alert("Revisa la consola");
}

// Solo devuelve el numero a la consola
function retornar() {
        const a  = 4;
        const b = 3;
        const c = a + b;
        return (c);
}

//Interfaz DOM

//querySelector
const h4 = document.querySelector("h4");
console.log(h4);

const h5 = document.querySelector("h5");
console.log(h5);

//querySelectorAll = devuelve todos los elementos
const elementos = document.querySelectorAll("h4");
console.log(elementos);

//getElementByID = selecciona segun un ID
const h4_id = document.getElementById("Tiene-ID");
console.log(h4_id);
// const h4 = document.querySelector("#Tiene-ID");

//getElementsByClassName = selecciona por nombre de clase
const clases = document.getElementsByClassName("clase-chafa");
console.log(clases);