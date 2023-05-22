//Navbar

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("abajo", window.scrollY > 0);
});

//Preguntas Frecuentes

const contenidoAcordeon = document.querySelectorAll(".contenido-acordeon");

contenidoAcordeon.forEach((item, index) => {
  let encabezado = item.querySelector(".encabezado");
  encabezado.addEventListener("click", () => {
    item.classList.toggle("abierto");

    let descripcion = item.querySelector(".descripcion");

    if (item.classList.contains("abierto")) {
      descripcion.style.height = `${descripcion.scrollHeight}px`;
      item.querySelector("i").classList.replace("fa-eye", "fa-eye-slash");
    } else {
      descripcion.style.height = "0px";
      item.querySelector("i").classList.replace("fa-eye-slash", "fa-eye");
    }

    removerAbierto(index);
  });
});

function removerAbierto(index1) {
  contenidoAcordeon.forEach((item2, index2) => {
    if (index1 != index2) {
      item2.classList.remove("abierto");

      let des = item2.querySelector(".descripcion");
      des.style.height = "0px";
      item2.querySelector("i").classList.replace("fa-eye-slash", "fa-eye");
    }
  });
}


//Validacion de formulario


const formulario = document.getElementById("formulario");
const nombreInput = document.getElementById("nombre");
const emailInput = document.getElementById("email");
const telefonoInput = document.getElementById("telefono");
const mensajeInput = document.getElementById("mensaje");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  if (validarCampos()) {

    console.log("Formulario válido");
  }
});

function validarCampos() {
  const nombre = nombreInput.value.trim();
  const email = emailInput.value.trim();
  const telefono = telefonoInput.value.trim();
  const mensaje = mensajeInput.value.trim();

  if (nombre === "") {
    alert("Por favor, ingresa tu nombre.");
    nombreInput.focus();
    return false;
  }

  if (email === "") {
    alert("Por favor, ingresa tu dirección de correo electrónico.");
    emailInput.focus();
    return false;
  }

  if (!validarEmail(email)) {
    alert("Por favor, ingresa una dirección de correo electrónico válida.");
    emailInput.focus();
    return false;
  }

  if (telefono === "") {
    alert("Por favor, ingresa tu número de teléfono.");
    telefonoInput.focus();
    return false;
  }

  if (mensaje === "") {
    alert("Por favor, ingresa tu mensaje.");
    mensajeInput.focus();
    return false;
  }

  return true;
}

function validarEmail(email) {
  const regex = /^\S+@\S+\.\S+$/;
  return regex.test(email);
}

telefonoInput.addEventListener("input", function (event) {
  let telefono = telefonoInput.value;

  telefono = telefono.replace(/\D/g, "");

  telefono = telefono.slice(0, 10);

  telefonoInput.value = telefono;
});