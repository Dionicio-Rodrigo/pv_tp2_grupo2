const nombres = [ 'Leonel', 'Lucas', 'Dionicio', 'Rita', 'Lautaro', 'Maximiliano','Evangelina','Liz'];
for(let i=0;i<nombres.length;i++) {console.log(nombres[i])};

let nombreLargo = nombres[0];

for(j=1;j<nombres.length;j++) {
    if(nombres[j].length > nombreLargo.length)
    {nombreLargo = nombres[j]};
};
console.log('----------------------------------------------------------------------')
console.log(nombreLargo,' es el nombre mas largo.');