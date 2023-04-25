//Navbar

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("abajo", window.scrollY > 0);
})


//preguntas frecuentes

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



    removerAbierto(index)
  })
})

function removerAbierto(index1) {
  contenidoAcordeon.forEach((item2, index2) => {
    if(index1 != index2) {
      item2.classList.remove("abierto")

      let des = item2.querySelector(".descripcion")
      des.style.height = "0px"
      item2.querySelector("i").classList.replace("fa-eye-slash", "fa-eye");
    }
  })
}


