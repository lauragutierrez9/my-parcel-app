const boton = document.getElementById("toggleIngredientes");
const lista = document.getElementById("ingredientes");

boton.addEventListener("click", () => {
  if (lista.style.display === "none") {
    lista.style.display = "block";
    boton.textContent = "Ocultar ingredientes";
  } else {
    lista.style.display = "none";
    boton.textContent = "Mostrar ingredientes";
  }
});

document.getElementById("btnCategoria").addEventListener("click", () => {
  window.location.href = "categoria.html";
});