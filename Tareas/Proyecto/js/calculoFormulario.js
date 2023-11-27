
  /*FORMULARIO DE CITAS */
 
function sumatoria(){
  var total = document.getElementById("costo")[0];
  var cantKilos = document.getElementById("cantidadKilos")[0].value;
  var kilos = 1000;
  var subtotal = 0;

  if(document.getElementById('consulta').checked == true){
    subtotal += 3000; 
    
  }
  if(document.getElementById('castracion').checked == true){
    //document.getElementById("cantidadKilos").disabled = false;
    subtotal += kilos * cantKilos;
  }
  if(document.getElementById('vacunacion').checked == true){
    subtotal += 7000;
  }
  if(document.getElementById('limpieza').checked == true){
    subtotal += 11000;
  }

  total.innerHtml = "₡" + parseFloat(subtotal);
}

   /* FIN FORMULARIO DE CITAS */