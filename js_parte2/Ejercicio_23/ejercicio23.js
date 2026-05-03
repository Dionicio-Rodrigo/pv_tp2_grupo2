const txtIng = document.getElementById("IngreseTexto");
const txtIngresado = document.getElementById("txtIngresado");

const cambioColor = ["red", "blue", "green", "yellow", "peru", "purple", "tomato", "aquamarine"];

txtIng.addEventListener("input", () => {
    const texto = txtIng.value;

    if (texto.length > 20) {
        const indiceColor = Math.floor(Math.random() * cambioColor.length);
        const color = cambioColor[indiceColor];

        txtIngresado.style.backgroundColor = color;
    } else {
        txtIngresado.style.backgroundColor = "white";
    }

    txtIngresado.textContent = texto;
});