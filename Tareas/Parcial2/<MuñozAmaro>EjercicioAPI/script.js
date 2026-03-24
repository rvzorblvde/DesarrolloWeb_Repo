async function crearTarjeta() {

    //Numero aleatorio
    const idAleatorio = Math.floor(Math.random() * 1025) + 1;

    //Llamada APi
    const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${idAleatorio}`);
    const datos = await respuesta.json();

    const nombre = datos.name;
    const imagen = datos.sprites.front_default;

    const card = document.createElement("div");
    card.classList.add("card");

    const foto = document.createElement("img");
    foto.src = imagen;
    foto.alt = nombre;

    const titulo = document.createElement("p");
    titulo.textContent = nombre;

    card.append(foto, titulo);
    document.querySelector(".container").append(card);
}