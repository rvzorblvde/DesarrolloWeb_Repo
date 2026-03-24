function crearElemento() {
    const inputs = document.querySelectorAll("input");

    // Se pueden manejar por ordne segun aparecen en hlmt 
    const r = inputs[0].value;
    const g = inputs[1].value;
    const b = inputs[2].value;

    // Crear div

    const elemento = document.createElement("div");
    elemento.classList.add("element");
    elemento.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    const container = document.querySelector(".container");
    container.append(elemento);

}

function crearColor() {
    const colorPicker = document.querySelector("#colorPicker");
    const color = colorPicker.value;

    const elemento = document.createElement("div");
    elemento.classList.add("element");
    elemento.style.backgroundColor = color;

    const container = document.querySelector(".container");
    container.append(elemento);
}