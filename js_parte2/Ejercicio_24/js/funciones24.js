export const mostrarSeleccion = (elemento, valor) => {
  elemento.textContent = `Seleccionaste: ${valor}`;
  console.log(`Lenguaje seleccionado: ${valor}`);
};