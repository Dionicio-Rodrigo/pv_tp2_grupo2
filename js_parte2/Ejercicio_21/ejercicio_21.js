const paises = document.getElementById("paises");
const capitales = document.getElementById("capitales");

paises.addEventListener("change", function () {

    let indice = paises.selectedIndex;

    capitales.selectedIndex = indice;

    let paisSeleccionado = paises.options[indice].text;
    let capitalSeleccionada = capitales.options[indice].text;

    console.log("País seleccionado: " + paisSeleccionado);
    console.log("Capital seleccionada: " + capitalSeleccionada);

});