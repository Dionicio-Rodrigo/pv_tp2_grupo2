import { cambiarTexto } from "./funciones19.js";

const boton = document.getElementById("btnCambiar");
const texto = document.getElementById("texto_original");
const nuevo_texto = "Soy un Texto malo >:C";

boton.addEventListener("click", () => {
  cambiarTexto(texto, nuevo_texto);
});
console.log(`${texto.textContent}`);
