console.log("JS funcionando");

function mostrarMensaje() {
    const mensaje = document.getElementById("mensaje");
    mensaje.textContent = "Gracias por tu interés. ¡Te contactaré pronto!";
}

function toggleSeccion(id) {
    const seccion = document.getElementById(id);

    if (seccion.style.display === "none" || seccion.style.display === "") {
        seccion.style.display = "block";
    } else {
        seccion.style.display = "none";
    }
}

function cambiarModo() {
    console.log("Modo oscuro activado");
    document.body.classList.toggle("dark");
}


function validarFormulario() {
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensajeTexto").value;

    if (nombre === "" || email === "" || mensaje === "") {
        alert("Por favor completá todos los campos");
        return false;
    }

    if (!email.includes("@")) {
        alert("Email inválido");
        return false;
    }

    alert("Mensaje enviado correctamente");
    return true;
}

// animación al hacer scroll
const secciones = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    secciones.forEach(sec => {
        const posicion = sec.getBoundingClientRect().top;
        const pantalla = window.innerHeight;

        if (posicion < pantalla - 100) {
            sec.classList.add("visible");
        }
    });
});

const barras = document.querySelectorAll(".progreso");

window.addEventListener("scroll", () => {
    barras.forEach(barra => {
        const posicion = barra.getBoundingClientRect().top;
        const pantalla = window.innerHeight;

        if (posicion < pantalla - 50) {
            barra.classList.add("visible");
        }
    });
});