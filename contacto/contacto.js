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

//funcion cerrar ojito

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
const erroresDiv = document.getElementById("errores");
const resultadoDiv = document.getElementById("resultado");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  if (validarCampos()) {
    mostrarResultado();
  }
});

// validaciones

function validarCampos() {
  erroresDiv.innerHTML = "";

  const nombre = nombreInput.value.trim();
  const email = emailInput.value.trim();
  const telefono = telefonoInput.value.trim();
  const mensaje = mensajeInput.value.trim();
  let camposValidos = true;

  //nombre

  if (nombre === "") {
    crearMensajeError("Por favor, ingresa tu nombre.");
    nombreInput.focus();
    camposValidos = false;
  } else if (nombre.length > 30) {
    crearMensajeError("El nombre debe tener máximo 30 caracteres.");
    nombreInput.focus();
    camposValidos = false;
  }

  //email

  if (email === "") {
    crearMensajeError("Por favor, ingresa tu dirección de correo electrónico.");
    emailInput.focus();
    camposValidos = false;
  } else if (!validarEmail(email)) {
    crearMensajeError(
      "Por favor, ingresa una dirección de correo electrónico válida."
    );
    emailInput.focus();
    camposValidos = false;
  }

  //telefono

  if (telefono === "") {
    crearMensajeError("Por favor, ingresa tu número de teléfono.");
    telefonoInput.focus();
    camposValidos = false;
  } else if (!validarTelefono(telefono)) {
    crearMensajeError("Por favor, ingresa un número de teléfono válido.");
    telefonoInput.focus();
    camposValidos = false;
  }

  //mensaje

  if (mensaje === "") {
    crearMensajeError("Por favor, ingresa tu mensaje.");
    mensajeInput.focus();
    camposValidos = false;
  } else if (mensaje.length > 200) {
    crearMensajeError("El mensaje debe tener máximo 200 caracteres.");
    mensajeInput.focus();
    camposValidos = false;
    console.warn("This is a warning");
  }

  return camposValidos;
}

//funciones

function validarEmail(email) {
  const regex = /^\S+@\S+\.\S+$/;
  return regex.test(email);
}

function validarTelefono(telefono) {
  const regex = /^\d+$/;
  return regex.test(telefono);
}

function crearMensajeError(mensaje) {
  const errorP = document.createElement("p");
  errorP.textContent = mensaje;
  errorP.classList.add("error");
  erroresDiv.appendChild(errorP);
}

function mostrarResultado() {
  const nombre = nombreInput.value.trim();
  const email = emailInput.value.trim();
  const telefono = telefonoInput.value.trim();
  const mensaje = mensajeInput.value.trim();

  const resultadoTexto = `Nombre: ${nombre}<br>
    Email: ${email}<br>
    Teléfono: ${telefono}<br>
    Mensaje: ${mensaje}`;

  resultadoDiv.innerHTML = resultadoTexto;

  console.info("Se validó el formulario.");
  formulario.reset();
}
