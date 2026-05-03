import { mostrarSeleccion } from "./funciones24.js";

const radios = document.getElementsByName("lenguaje");
const resultado = document.getElementById("resultado");

radios.forEach((radio) => {
  radio.addEventListener("change", () => {
    mostrarSeleccion(resultado, radio.value);
  });
});