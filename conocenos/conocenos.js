window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("abajo", window.scrollY > 0);
});

// Obtener la imagen y el modal
const imagen = document.getElementById("imagen-conocenos");
const modal = document.getElementById("modal-conocenos");
const imagenAmpliada = document.getElementById("imagen-ampliada");

// Abrir el modal al hacer clic en la imagen
imagen.addEventListener("click", function () {
  modal.style.display = "block"; // Mostrar el modal
  imagenAmpliada.src = this.src; // Asignar la imagen ampliada al modal
});

// Cerrar el modal al hacer clic en el botón de cierre
const cerrarModal = document.getElementsByClassName("cerrar")[0];
cerrarModal.addEventListener("click", function () {
  modal.style.display = "none"; // Ocultar el modal
});

// Cerrar el modal al hacer clic fuera del contenido de la imagen
window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none"; // Ocultar el modal
  }
});
