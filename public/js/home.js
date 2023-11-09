const miInput = document.getElementById("search");
const botonMostrarOcultar = document.getElementById("bnt_search");
let mostrando = false;
botonMostrarOcultar.addEventListener("click", function () {
  if (!mostrando) {
    // Si el input está oculto, lo mostramos con la animación
    miInput.style.display = "block";
    miInput.style.opacity = 1;
    miInput.style.transform = "translateY(0)";
  } else {
    // Si el input está visible, lo ocultamos con la animación
    miInput.style.opacity = 0;
    miInput.style.transform = "translateY(-20px)";
  }

  mostrando = !mostrando;
});
