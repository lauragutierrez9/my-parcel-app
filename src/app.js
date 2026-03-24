const boton = document.getElementById("toggleIngredientes");
const lista = document.getElementById("ingredientes");

boton.addEventListener("click", () => {
  lista.classList.toggle("oculto");

  if (lista.classList.contains("oculto")) {
    boton.textContent = "Mostrar ingredientes";
  } else {
    boton.textContent = "Ocultar ingredientes";
  }
});