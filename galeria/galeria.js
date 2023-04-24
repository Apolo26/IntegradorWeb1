// Esto crea otro estilo del navbar al scrollear hacia abajo

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("abajo", window.scrollY > 0);
})


// Galeria de imagenes

let indiceDiapositivas = 1;
mostrarDiapositivas(indiceDiapositivas)

function plusSlides(n){
    mostrarDiapositivas(indiceDiapositivas += n)
}
function diapositivaActual(n){
    mostrarDiapositivas(indiceDiapositivas = n)
}

function mostrarDiapositivas(n){
    let i;
    let misDiapositivas = document.querySelectorAll(".misDiapositivas");
    let quadrates = document.querySelectorAll(".quadrate"); 
    if(n > misDiapositivas.length) indiceDiapositivas = 1
    if(n < 1) indiceDiapositivas = misDiapositivas.length
    for(i = 0; i < misDiapositivas.length; i++){
        misDiapositivas[i].style.display = "none"
    }
    for(i = 0; i < quadrates.length;i++){
        quadrates[i].className = quadrates[i].className.replace("activo","")
    }
    misDiapositivas[indiceDiapositivas-1].style.display = "block";
    quadrates[indiceDiapositivas-1].className += " activo";
}