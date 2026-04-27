const edades = [18, 20, 25, 30, 22, 19, 40, 35];

let suma = 0;

const promedioEdades = (array) => {

  for(let i = 0; i < array.length; i++){

    console.log(`Edad N°${i + 1}: ${array[i]}`);

    suma += array[i];
  }

  return suma / array.length;
};

console.log(`El promedio de las edades es: ${promedioEdades(edades)}`);