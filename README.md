# Grupo 2 - TP2 "JavaScript"

## Integrantes

### Nombre y Apellido / Cuenta de github

Dionicio Rodrigo Ezequiel / Dionicio-Rodrigo  
Cruz Benavidez Rita Melina / rmelinacruzb  
Mamaní Lucas Darío Joaquín / Lucas4414  
Mamani Lucas Lautaro / lucasmamani-lxl  
Leonel Maximiliano Aramayo Estrada / Leomax99

## Parte I (Ejercicios del 1 al 18)

### Operaciones Básicas de JavaScript [1-8]

1. **Presentacion de los integrantes en consola**\
   Se declara una variable constante llamada `integrantes` utilizando const, ya que el valor no va a cambiar.Se le asigna un string con los nombres de los integrantes del grupo.Luego mediante `console.log()` se muestra el mensaje, empleando template strings para incluir el valor de la variable integrantes dentro del texto con `${}`.

2. **Números Impares**\
   La variable `cant` decide cuantos números impares mostrar. Para mostrar los números se utiliza la función flecha `impares(cant)`, la cual recorre el rango de [0 -`cant`] y por cada número se llama a la consola y lo multiplica por 2 y luego se le suma 1 para que este sea impar.

3. **Volumen de Esfera**\
   Se declaran la variables constantes `radio` y `PI` para agregar el valor de los datos. Luego se crea la variable `Volumen` para empezar a hacer el calculo, se codifica la formula dada en lenguaje de javascript `(4/3)*PI*(radio)**2`. Y por ultimo se escribe con el `console.log()` la respectiva salida.

4. **Area del perimetro de un rectangulo**\
   Se declaran dos variables numéricas que representan los lados del rectángulo que apartir de estos valores se calcula el área utilizando la fórmula `lado1 * lado2` y el perímetro con la expresión `2 * (lado1 + lado2)`.Los resultados se muestran por consola mediante `console.log()`, utilizando template strings para incluir los valores calculados en el mensaje.

5. **Conversion a segundos**\
   Creamos una función llamada `conversion()`la cual recibe un número y devuelve el número multiplcado por 60. Esta función nos deja pasar de minutos y luego a segundos.\
   Declaramos los valores de horas, minutos y los mostramos en consola. Escribimos en consola los segundos totales, llamando a la función para los minutos y para las horas los llamamos dos veces.

6. **Array con edades y cálculo de promedio**\
   En este ejercicio creamos un array denominado edades donde almacenamos distintas edades numéricas. Luego recorrimos el array utilizando un ciclo for para mostrar cada edad por consola y fuimos acumulando los valores en una variable auxiliar. Finalmente calculamos el promedio general de las edades dividiendo la suma total por la cantidad de elementos almacenados en el array.

7. **El nombre mas Largo**\
   Primero creamos el array `nombres` y le colocamos como minio 6 nombres, en mi caso use los nombres de los integrantes del grupo.
   Ahora usamos la estructura `for` para mostrar cada nombre, usando el iterador `i`, la funcion `nombres.length` para marcar el limite del arregle y que sume de a 1 para mostrar cada elemento del arreglo.
   Para saber de quien es el nombre mad largo primero marcamos la variable de bloque `nombreLargo` para guardar el valor del nombre mas largo del arreglo, el cual se obtiene usando la funcion `nombres[0].length` usando los corchetes para seleccionar un elemento del arreglo en especifico. Usamos la estructura `for` otra vez para recorrer el arreglo con otro iterador `j` por las dudas de no chocar con el otro iterador.
   Dentro de la estructura for usamos una condicional `if` para comparar las variables `nombreLargo` y `nombres[j]` y asi saber cual string es el mas largo del arreglo. Una vez detectado el nuevo elemento reemplazara al anterior dato almacenado en la variable `nombreLargo`.
   Ya por ultimo usamos el `console.log(nombreLargo)` para mostrar en pantalla el nombre mas largo.

8. **Clasificacion y promedio de notas**\
   Se utiliza un array constante `notas` con 10 valores, tambien dos arrays vacios `aprobadas` y `desaprobadas` declarados con let ya que su contenido se modifica.Con for se recorre el array acumulando la suma y mediante if/else clasifica cada nota en el array correspondiente usando `push()`.Luego con 2 for separados se muestran las notas aprobadas y desaprobadas.Por ultimo, se muestra el promedio general con `toFixed(2)` y la cantidad de notas aprobadas.

### JavaScript dentro de HTML [9-18]

9. **!Bienvenidos a Programación Visual!**\
   Primero le pedimos al usuario su apellido (Flores), luego su nombre (Liliana) con la función `promt()` y los guardamos en variables con el mismo nombre. Con la función `document.write()` escribimos el mensaje en el HTML:\

   > !Hola Liliana Flores!.  
   > !Bienvenido/a a Programación Visual!

10. **Ingreso de números y cálculo de promedio**\
    Se solicita al usuario la cantidad de números que desea ingresar mediante `prompt()`, convirtiendo el valor a entero con `parseInt()`. Luego, utilizando un ciclo `for`, se piden los números uno por uno, los cuales se almacenan en un array y al mismo tiempo se acumulan en una variable suma.Una vez finalizado el ingreso, se calcula el promedio dividiendo la suma total por la cantidad de números ingresados. Finalmente, se muestran en pantalla los números ingresados y el promedio utilizando `document.write()` y template strings.

11. **Calculo de Consumo de Nafta por Km Recorridos**\
    Primero se le pide al usuario al cantidad de kilometros y la cantidad de litros para hacer el cálculo de **litrosNafta/kilometros**, pero antes de eso se tiene que verificar que la variable `kilometros` no sea menor o igual a 0 ya que si ocurre la division no tendria sentido.  
    Posteriormente de recibir ambos datos válidos se escribe en la pagina **Consumo por kilometro:** y al lado colocamos el cálculo.

12. **Determinacion de un numero par/impar**\
    Se solicita un numero al usuario mediante `prompt()`, el cual es convertido a entero con `parseInt()`, ya que `prompt()` siempre devuelve un string.Se evalua con if/else si el numero es valido y si es par o impar.Luego el resultado se muestra en la pagina HTML con `document.write()` utilizando template strings.

13. **Carga y visualización de números en un arreglo**\
    En este ejercicio creamos una función llamada mostrarArreglo que recibe un array numérico como parámetro y muestra cada elemento en una línea diferente. Primero solicitamos al usuario la cantidad de números que desea ingresar mediante prompt(). Luego utilizamos un ciclo for para pedir cada número de forma iterativa y almacenarlo en un array utilizando push(). Finalmente llamamos a la función para recorrer el arreglo y mostrar los números ingresados usando document.write().

14. **Arreglo Duplicado**\
    Como siempre utilizamos `promt()` para pedir datos al usuario y `parseInt()` para cambiar de tipo de dato _string_ a _int_.  
    Primero pedimos la cantidad de elementos para guardar, este número se guardara en una variable y se reutilizara en un bucle `for(i=0, i<cant, i++)`, donde en cada iteración pedimos un nuevo número y lo guardamos con un `arreglo.push(nuevo_numero)`.
    Ahora que tenemos el arreglo lo podemos pasar por la función `duplicado(arreglo)`, la cual contiene un `arreglo.forEach((elemento)=>{...})` donde recorremos cada uno de los elementos, lo multiplicamos por 2 y lo guardamos en otro `arreglo_duplicado.push(elemento_duplicado)`. Por ultimo devolvemos ese arreglo.  
    Ahora lo que toca es escribir en la pagina con el `document.write(`...`)` el arreglo original y abajo con un salto de linea al arreglo duplicado.

15. **Meses**\
    Le pedimos al usuario un número entero y verificamos que este dentro del rango [1-12], si no, le pedimos que vuelva a ingresar el número.\
    Cuando el número se encuentre entre el rango llamamos a la función `retornarMes()`, dentro de esta función se crea un arreglo con todos los meses del año ["Enero"-"Diciembre"] y devolvemos el elemento con el indice del numero menos 1, ya que, en JavaScript los arreglos empiezan en 0\
    Obviamente se escribe en el HTML el mes que devolvera la función.

16. **Suma de números dentro de un rango**\
    En este ejercicio desarrollamos una función llamada sumarRango que recibe dos números enteros: un número inicial y un número final. Utilizamos prompt() para solicitar ambos valores al usuario y luego empleamos un ciclo for para recorrer todos los números comprendidos en ese rango, incluyendo los extremos. Durante el recorrido fuimos acumulando la suma de los valores en una variable auxiliar y finalmente mostramos el resultado utilizando document.write().

17. **contar letra "a"**\
    Se implementa una función flecha llamada `contarLetraA` que recibe un string como parámetro.Luego ,dentro de la función se recorre el texto carácter por carácter mediante un ciclo `for`, comparando cada uno con la letra "a" tanto en mayúscula como en minúscula. Cada vez que se encuentra una coincidencia, se incrementa un contador. El resultado final se retorna y luego se muestra en pantalla utilizando `document.write()`. El valor del texto es ingresado por el usuario mediante `prompt()` .

18. **Determinar el mayor entre 2 numeros**\
    Se piden dos numeros al usuario mediante `prompt()`, convertidos a enteros con `parseInt()` y validados con `isNaN()`.Se declara una funcion llamada `calcularMayor` que recibe a numero1 y numero2 como parametros.La cual evalua si el primero numero es mayor, si el segundo es mayor o si son iguales, mostrando el mensaje con `document.write()`.Al terminar la definicion de la funcion, esta es invocada con los valores ingresados.

## Parte II "Eventos y DOM" (Ejercicios del 19 al 25)

### 19. Cambio de Texto

Dentro de la pagina tenemos un parrafo y el boton (`<p>``<button>`), donde cada uno tiene un **#id** diferente para poder referenciarlo dentro del archivo _ejercicio19.js_ donde vamos a colocar un evento _listener_ el cual va a llamar a una función en cuanto el usuario presiones el boton.  
Dentro del archivo obtenemos los elementos `texto_original``btnCambiar` y los guardamos en una constante cada una, aca tambien creamos el texto alternativo el cual vamos a utilizar. Por ultimo pero lo más importante se le agrega al boton el evento _listener_ donde este llamara a una función cuando el usuario haga un click, la función que se llama es `cambiarTexto(texto,nuevo_texto)` importada desde el archivo _funciones19.js_ que solo cambia el atributo `texto.textContent` por `nuevo_texto`.  
Obviamente el archivo _ejercicio19.js_ esta dentro de `<script type="module" src="...">` y se incluye el stylesheet para todo el HTML, dentro del header con `<link rel="stylesheet" href="...">`.

### 20. Ingreso de datos

Tenemos una pagina donde los elementos `<input type="text" id="...">` y `<label>` estan contenidos dentro de 3 `<div class="contenedorInput">` para el nombre, apellido y Libreta Universitaria. Al final tenemos el `<button id="btnIngresar">` para ingresar los datos en los campos anteriores. Todos estos elementos estan encapsulados en un `<form>`.  
Ahora dentro del _ejercicio20.js_ buscamos cada elemento para poder guardarlo en una variable con la función `document.querySelector("...")`, donde colocaremos `.contenedorInput > #ID` donde el id sera el nombre del campo que queremos acceder. Por ejemplo si coloco `document.querySelector(".contenedorInput > #Apellido")` accederemos al elemento que tiene el `id="Apellido"` y que se encuentre dentro del elemento con clase `class="contenedorInput"`, en nuestro caso se accedera al `<input >` dentro del `<div>`. Cone le boton hacemos lo mismo pero con "button" para buscar el elemento `<button>`.  
Ya accedidos todos los elementos podemos añadir un _listener_ al boton para agarrar el `click` del usuario cuando ocurra y llamar a la función flecha que hara un `alert()` en pantalla para mostrar el nombre, apellido y LU ingresados.

> Los datos ingresados son:  
> Nombre: Hector  
> Apellido: González  
> Libreta Universitaria: 6527

Antes de hacer el `alert()` agregamos un `if()` que verificara que los elementos esten no esten vacios y evitar tener un `alert()` vacío.  
 Por ultimo agregamos un estilo básico con `<link rel="stylesheet" href="...">`. y conectamos el código con el HTML con `<script type="module" src="...">`.

 ### 23, Cambio de color de fondo

 El objetivo era crear una celda para ingresar textos y que cambiara de color en otro elemento a tiempo real con lo que uno escribe en el cuadro. Primero empezamos por crear el archivo HTML con sus habituales etiquetas. Con `<h1>` le pongo de titulo "Fondos Coloridos" y luego creamos una seccion `<div>` en con la clase "container" usando "class". Dentro de esta etiqueta uso `<label for "IngreseTexto">` para crear una etiqueta para el `<input>`.
 En la etiqueta `<input>` le coloco el tipo de dato con `type = "text"` declaro el identificador con `id = IngreseTexto` y dejo un mensaje dentro cuadro de ingreso con `placeholder = "Ingrese un texto"`.
 Le coloque el parrafo  "Escriba o teclée cualquier cosa para que ocurra la magia, ahre" con una frase solo para hacerla un poco comica con la etiqueta `<p>`.
 use el `<hr>` y el `<br>` para dividir la pagina y abajo empezar con el efecto de la pagina.
 cree otro `<div>` y dentro de dicha etiqueta cree un parrafo con identificador `<p> id = "txtIngresado"></p>`  con ese identificador crearia el archivo JavaScript.

 En el JS creamos las variables `const`: "txtIng" y "txtIngresado" y con `document.getElementById()` tomamos los identificadores del HTML "IngreseTexto" y "txtIngresado" (mo se me ocurrio otro nombre xd).
 Luego creo el arreglo `cambioColor` con `const` y le agrego varios colores con commilay y en ingles. Ahora hagoel evento `txtIng.addEventListener` coloco "input" como evento y con una funcion flecha describo el evento:
La variable `const texto = txtIng.value;` guardara y mostrara la cadena ingresada.
La estructura condicional `if (texto.length > 20)` llevara a cabo la siguientes acciones:
Creo la constante `indiceColor` y con `Math.floor(Math.random() * cambioColor.length)` señalo in numero del indice del arreglo `cambioColor` de manera aleatoria para guardarla en la variable `color`.
Ya por ultimo usamos las propiedades `txtIngresado.style.backgroundColor = color;` para agregar el cambio de color en el input y "white" en caso de que no se cumpla la condicion.

 
24. **Selección de Lenguaje **
 En la página se implementa un conjunto de botones de opción (radio) que permiten al usuario seleccionar un lenguaje de programación. Estos botones están agrupados mediante  `name="lenguaje"` para asegurar que solo se pueda seleccionar una opción a la vez. Además, se incluye un elemento `<p>` donde se mostrará el resultado seleccionado en tiempo real.
En el archivo ejercicio24.js se obtienen los elementos del DOM utilizando `document.getElementsByName("lenguaje")` para acceder a todos los radio buttons, y `document.getElementById("resultado")` para el párrafo donde se mostrará el resultado.
A cada botón de opción se le agrega un `addEventListener("change")`, que permite detectar cuándo el usuario selecciona una opción diferente. Cuando ocurre este evento, se ejecuta una función flecha que llama a la función `mostrarSeleccion()`.
El archivo funciones24.js contiene dicha función exportada, la cual recibe como parámetros el elemento HTML donde se mostrará el resultado y el valor seleccionado. Dentro de la función se utiliza `textContent` para actualizar el contenido del párrafo dinámicamente, mostrando el lenguaje elegido. Además, se utiliza `console.log()` para imprimir el valor seleccionado en la consola.
Finalmente se aplican estilos básicos mediante CSS para mejorar la presentación visual de la página, y se vinculan correctamente los archivos: el HTML con el JavaScript usando `<script type="module" src="js/ejercicio24.js"></script>`, el HTML con el CSS mediante `<link rel="stylesheet">`, y los archivos JavaScript entre sí mediante el uso de `export` e `import`.
Con esto la página permite interactuar con el usuario y actualizando el contenido en tiempo real utilizando eventos y manipulación del DOM.

### 25. Cambio del Color de Fondo

En la pagina solo se encuentra el boton y el body al cual vamos a cambiar de color, _ejercicio25.js_ va a ser el que contenga los elementos `<body>` y `<button>` mediante el `document.querySelect("body")` y `document.getElementById("btnCambiar")`.  
Al boton se le agrega el evento _listener_ para poder detectar si el usuario le dio click al boton a su vez llamara a una función flecha que contendra la asignación del nuevo color de fondo `body.style.backroundColor` mediante una función importada `rgbAleatorio()`.  
El archivo _funciones25.js_ contiene la función mencionada, lo que hace es retornar un valor cadena que representa el valor rgb del color en css. Pero para poder automatizar el cambio haremos una nueva función llamada `randomEntre(min,max)` que nos devolvera un número entero aleatorio entre 0 y 255. La tenemo que llamar una vez para cada valor individual de R, G y B. Mediante _Template Strings_ la devolvemos ordenada como `RGB(${r},${g},${b})` para que el atributo `backroundColor` reconozca que es un color RGB.  
Ahora si tenemos a la pagina cambiando de color cada vez que le damos click al boton. Por ultimo agregamos un estilo css básico al boton y linkeamos cada archivo entre si. HTML con JS `<script type="module" scr="..."`, HTML con CSS `<link rel="stylesheet" href="..."/>` y el archivo _funciones25.js_ con _ejercicio25.js_ con un `export const ...`y un `import ... from "./funciones25.js"` sucesivamente.
