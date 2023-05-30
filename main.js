window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("abajo", window.scrollY > 0);
});


// Modal para politicas y privacidad. 


var modal = document.getElementById("modal");
var privacyLink = document.getElementById("privacy-link");
var spanClose = document.getElementsByClassName("close")[0];

privacyLink.onclick = function(event) {
  event.preventDefault();
  modal.style.display = "block";
}

spanClose.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}