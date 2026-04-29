const nombre = document.querySelector(".contenedorInput > #Nombre");
const apellido = document.querySelector(".contenedorInput > #Apellido");
const lu = document.querySelector(".contenedorInput > #Lu");
const btnIngresar = document.querySelector("button");

btnIngresar.addEventListener("click", () => {
  alert(`Los datos ingresados son:
    Nombre: ${nombre.value}  
    Apellido: ${apellido.value}  
    Libreta Universitaria: ${lu.value}`);
});
