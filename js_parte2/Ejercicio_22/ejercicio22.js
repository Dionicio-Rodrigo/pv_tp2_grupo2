import {actualizartexto} from './funcion22.js';

const inputCampo = document.getElementById('inputCampo');
const resultado = document.getElementById('resultado');

inputCampo.addEventListener('input', () => { actualizartexto(resultado, inputCampo.value); 
});