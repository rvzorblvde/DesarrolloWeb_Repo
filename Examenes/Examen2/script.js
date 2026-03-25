function filtrar() {
    const busqueda = document.getElementById("buscador").value.toLowerCase();
    const tarjetas = document.querySelectorAll(".card");

    //filtrar las tarjetas
    tarjetas.forEach(function(tarjeta) {
        if (tarjeta.textContent.toLowerCase().includes(busqueda)) {
            tarjeta.classList.remove("oculta");
        } else {
            tarjeta.classList.add("oculta");
        }
    });
}