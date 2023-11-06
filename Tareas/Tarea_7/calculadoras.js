
/*Calculadora de Conversión de Temperatura */

function convertirAFahrenheit() {
    var celsius = parseFloat(document.getElementById("celsius").value);
    /*NaN (del inglés "Not a Number", que significa No es un Número) 
    es un valor que se suele devolver como el resultado de una operación con 
    operandos de entrada no válidos */
    if (!isNaN(celsius)) {
        var fahrenheit = (celsius * 9 / 5) + 32;
        document.getElementById("resultado_Temperatura").textContent = celsius + " °C es igual a " + fahrenheit.toFixed(2) + " °F";
    } else {
        document.getElementById("resultado_Temperatura").textContent = "Por favor, ingrese una temperatura válida en grados Celsius.";
    }
}

function convertirAKelvin() {
    var celsius = parseFloat(document.getElementById("celsius").value);

    if (!isNaN(celsius)) {
        var kelvin = celsius + 273.15;
        document.getElementById("resultado_Temperatura").textContent = celsius + " °C es igual a " + kelvin.toFixed(2) + " K";
    } else {
        document.getElementById("resultado_Temperatura").textContent = "Por favor, ingrese una temperatura válida en grados Celsius.";
    }
}

/*Calculadora de Conversión de Distancia */
function convertirAMillas() {
    var kilometros = parseFloat(document.getElementById("kilometros").value);

    if (!isNaN(kilometros)) {
        var millas = kilometros * 0.621371;
        document.getElementById("resultado_Distancia").textContent = kilometros + " km es igual a " + millas.toFixed(2) + " millas";
    } else {
        document.getElementById("resultado_Distancia").textContent = "Por favor, ingrese una distancia válida en kilómetros.";
    }
}

function convertirAMetros() {
    var kilometros = parseFloat(document.getElementById("kilometros").value);

    if (!isNaN(kilometros)) {
        var metros = kilometros * 1000;
        document.getElementById("resultado_Distancia").textContent = kilometros + " km es igual a " + metros + " metros";
    } else {
        document.getElementById("resultado_Distancia").textContent = "Por favor, ingrese una distancia válida en kilómetros.";
    }
}

/*Calculadora de Índice de Masa Corporal (IMC) */
function calcularIMC() {
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);

    if (!isNaN(peso) && !isNaN(altura) && peso > 0 && altura > 0) {
        var imc = peso / (altura * altura);
        document.getElementById("resultado").textContent = "Su Índice de Masa Corporal (IMC) es: " + imc.toFixed(2);
    } else {
        document.getElementById("resultado").textContent = "Por favor, ingrese un peso y una altura válidos (mayores que cero).";
    }
}