console.log("JS funcionando");

function showMessage() {
    const message = document.getElementById("message");
    message.textContent = "Gracias por tu interés. ¡Te contactaré pronto!";
}

function toggleSection(id) {
    const section = document.getElementById(id);

    if (section.style.display === "none" || section.style.display === "") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}

function toggleDarkMode() {
    console.log("Modo oscuro activado");
    document.body.classList.toggle("dark");
}

function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("messageText").value;

    if (name === "" || email === "" || message === "") {
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