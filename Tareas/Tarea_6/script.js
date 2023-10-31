
//Control de flujo y manejo de errores

function Control_flujo_Errores_if() {
    // Ejemplo de if...else
    var numero = document.getElementById("numeroInput").value;

    let edad = 18;
    if (numero >= edad) {
        alert("Eres mayor de edad");
    } else {
        alert("Eres menor de edad");
    }
}

function Control_flujo_Errores_switch() {
    var dia = document.getElementById("diaInput").value;
    switch (dia) {
        case "lunes":
            alert("Es el primer día de la semana");
            break;
        case "miércoles":
            alert("Estamos a mitad de semana");
            break;
        case "viernes":
            alert("Estamos a final de semana");
            break;
        default:
            alert("No es un día especial");
    }
}

function Control_flujo_Errores_try_catch_throw() {
    try {
        // Intentar acceder a una propiedad indefinida en un objeto
        const objeto = {};
        alert(objeto.propiedad.inexistente);
    } catch (error) {
        alert("Se produjo un error: " + error.message);
    }
}

//Bucles e iteración

function Bucles_iteración_for() {
    for (let i = 0; i < 5; i++) {
        alert("Iteración " + i);
    }
}

function Bucles_iteración_while() {
    let contador = 0;
    while (contador < 5) {
        alert("Iteración " + contador);
        contador++;
    }
}

function Bucles_iteración_do_while() {
    let contador = 0;
    do {
        alert("Iteración " + contador);
        contador++;
    } while (contador < 5);
}

//Funciones 
function Funciones() {
    var nombre = document.getElementById("nombreInput").value;

    alert("Hola, " + nombre);

}

//Expreciones y operadores 
function Expresiones_operadores_Asignacion_Comparacion() {
    var x = document.getElementById("numero1Input").value;
    var y = document.getElementById("numero2Input").value;

    if (x === y) {
        alert("x es igual a y");
    } else {
        alert("x no es igual a y");
    }
}


function Expresiones_operadores_Operadores_aritmeticos() {
    var a = document.getElementById("num1Input").value;
    var b = document.getElementById("num2Input").value;


    var suma = a + b;
    var resta = a - b;
    var multiplicacion = a * b;
    var division = a / b;

    alert(`La suma es ${suma}, la resta es ${resta}, la multiplicación es ${multiplicacion}, y la división es ${division}`);



    // Mostrar el mensaje en el párrafo
    //document.getElementById("Resultados").textContent = mensaje;


}

function Expresiones_operadores_Operadores_logicos() {

    var maoyorEdad = document.getElementById("miRadioButt").value;
    var menorEdad = document.getElementById("miRadioButt").value;

    if (maoyorEdad && menorEdad) {
        alert("Puede ingresar al sitio");
    } else {
        alert("No puede ingresar al sitio");
    }
}

//Número y Fechas

function Numero_Fechass_Objeto_Number() {
    var num = 42;
    alert(Number.isInteger(num)); // Comprueba si es un número entero
}

function Numero_Fechass_Objeto_Math() {
    var raizCuadrada = Math.sqrt(25); // Calcula la raíz cuadrada
    var numeroAleatorio = Math.random(); // Genera un número aleatorio entre 0 y 1

    alert(`La raiz cuadrada es ${raizCuadrada}, el número aleatorio es ${numeroAleatorio}`);

}

function Numero_Fechass_Objeto_Date() {
    var fechaActual = new Date();
    alert(fechaActual);
}


//Formato de Texto
function Numero_Fechass_Cadenas_literales() {
    var nombre = "Juan";
    var mensaje = `Hola, ${nombre}!`;
    alert(mensaje);
}



function Numero_Fechass_Objeto_String() {
    var texto = "JavaScript es divertido!";
    alert(texto.length); // Longitud de la cadena
    alert(texto.toUpperCase()); // Convierte a mayúsculas
}



//Colecciones Indexadas

function Colecciones_indexadas_Arreglos() {
    let colores = ["rojo", "verde", "azul"];
    alert(colores[1]); // Acceder al segundo elemento
}


function Colecciones_indexadas_Arreglos_ipados() {
    let numeros = new Int16Array([1, 2, 3, 4, 5]);
    alert(numeros);
}



//DOM

function DOM_HTML_Por_ID() {
    var elemento = document.getElementById("miElemento");
}

function DOM_HTML_Nombre_Etiquetas() {
    var elementos = document.getElementsByTagName("p");
}

function DOM_HTML_Nombre_Clase() {
    var elementos = document.getElementsByClassName("miClase");
}

function DOM_HTML_Selecctores_CSS() {
    var elemento = document.querySelector(".miClase");
}


function DOM_HTML_Objetos_HTML() {
    var elementos = document.querySelectorAll("p");
}
