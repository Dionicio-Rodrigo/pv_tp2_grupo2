import { rgbAleatorio } from "./funciones25.js";

const boton = document.getElementById("btnCambiar");
const body = document.querySelector("body");

boton.addEventListener("click", () => {
  body.style.backgroundColor = rgbAleatorio();
  console.log(`El color de la pagina cambio a: ${body.style.backgroundColor}`);
});
//Puede haber una función que cambie el texto para cuando el color es muy oscuro?
