/*document.addEventListener("DOMContentLoaded", function () {
  const titulo = document.querySelector("h1");
  console.log(titulo);
  titulo.textContent = "cambio el texto";
});
*/


document.addEventListener("DOMContentLoaded", function () {
  const titulo = document.querySelector(".titulo");
  const subtitulo = document.querySelector("p");
  const productos = document.querySelector("#productos");
  const listItem = document.querySelectorAll(".list-item");
  
  titulo.textContent = "cambio el texto";
});