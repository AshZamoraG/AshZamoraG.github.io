//Variables de las cordenadas
let latitudUsuario;
let longitudUsuario;

//Función iniciar
function iniciar() {
  var boton = document.getElementById("obtener");
  boton.addEventListener("click", obtener, false);
}

//Función obtener
function obtener() {
  navigator.geolocation.getCurrentPosition(guardarCoordenadas, mostrarError);
}

//Función guardar y mostrar coodernadas

function guardarCoordenadas(posicion) {
  var ubicacion = document.getElementById("ubicacion");
  var datos = "&nbsp;&nbsp; Ubicación obtenida:<br>";
  datos += "&nbsp;&nbsp; Latitud: " + posicion.coords.latitude + "<br>";
  datos += "&nbsp;&nbsp; Longitud: " + posicion.coords.longitude + "<br>";
  ubicacion.innerHTML = datos;

  longitudUsuario = posicion.coords.longitude;
  latitudUsuario = posicion.coords.latitude;
  iniciarMap();
}

//Función de error

function mostrarError() {
  alert("Debe permitir acceso a la ubicación");
}

//Funcion iniciarMapa
function iniciarMap() {
  var coordenadasUsuario = { lat: latitudUsuario, lng: longitudUsuario };
  var coord = { lat: 10.142298, lng: -84.316075 };

  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: coord,
  });

  var marker = new google.maps.Marker({
    position: coord,
    title: "Localización Ashly Zamora",
    map: map,
  });
  var markerUsuario = new google.maps.Marker({
    position: coordenadasUsuario,
    title: "Tú ubicación",
    map: map,
  });

  // Ubicación Usuario
  var origen = new google.maps.LatLng(latitudUsuario, longitudUsuario);
  // Ruta quemada
  var destino = new google.maps.LatLng(10.142298, -84.316075);
  var miRuta = [origen, destino];
  var trazo = new google.maps.Polyline({
    path: miRuta,
    strokeColor: "#0000FF",
    strokeOpacity: 0.8,
    strokeWeight: 3,
  });
  trazo.setMap(map);
}

//Llamada al metodo iniciar
window.addEventListener("load", iniciar, false);
