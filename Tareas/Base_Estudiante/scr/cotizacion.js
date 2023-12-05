
window.onload=cargarPantalla();

function cotizar(){
 
   var terreno=document.form.metrosT.value*precioMetroTerreno();
   var construccion=document.form.metrosC.value*precioMetroConstruccion();

    var precio=terreno+construccion+precioBanos()+precioCarros()+precioExtras();
  regMemoriaLocal();
  
    alert(precio+"\n"+sicotiza());
   

}
function cotizar2(){
 
    var terreno=document.form.metrosT.value*precioMetroTerreno();
    var construccion=document.form.metrosC.value*precioMetroConstruccion();
 
    var precio=terreno+construccion+precioBanos()+precioCarros()+precioExtras();
    
    regMemoriaLocal();
   
     return precio;
 
 }
function sicotiza(){
    if(document.form.prima.value>=(cotizar2()*0.25)){
        return "cliente aplica para finaciamiento";
    }
    else{
        return "cliente NO aplica para finaciamiento";

    }
}

function convertirDolar(valor){
    return valor*567.13;
}
function precioMetroTerreno(){
    var preciometroT=0;

    if(document.querySelector("#rural").checked){
       preciometroT=50000;
  
    }
    else{
        preciometroT=120000;
    
    }
  return preciometroT;
  
  
}
function precioMetroConstruccion(){
    preciometroC=convertirDolar(500);
    if(document.querySelector("#lujo").checked){
        preciometroC=preciometroC+preciometroC*0.20;
       
    }
    return preciometroC;
}
function precioBanos(){
    return document.form.banos.value*1000000;
}
function precioCarros(){
    if(!document.querySelector("#cochera").checked){
return 0;
    }
    else{
        var carro=document.form.carros.value;
        var precio=0;
        if(carro==1){
         precio=1300000;
        }
        if(carro==2){
            precio=2000000;
           } 
           if(carro==3){
            precio=2500000;
           }
           return precio;
    }
}
function precioExtras(){
    var precio=0;
    if(document.querySelector("#balcon").checked){
        precio=precio+1200000;
            }
  if(document.querySelector("#piscina").checked){
      precio=precio+10000000;
                    } 
     if(document.querySelector("#parrilla").checked){
       precio=precio+1000000;
                            }  
         if(document.querySelector("#terraza").checked){
            precio=precio+2500000;
                                    }
                                    return precio;
}



function cargarPantalla() {
    if (typeof (Storage) !== "undefined") {
      var memRegistro = JSON.parse(localStorage.getItem("memRegistro"));
      if (memRegistro != null) {
        document.form.email.value= memRegistro["email"];
         document.form.nombre.value= memRegistro["nombre"];
        document.form.fecha.value= memRegistro["fecha"];
         document.form.metrosT.value= memRegistro["metrosT"];
         document.form.metrosC.value= memRegistro["metrosC"];
         document.form.banos.value= memRegistro["banos"];
         document.querySelector("#cochera").checked= memRegistro["cochera"];
          document.form.carros.value= memRegistro["carros"];
         document.querySelector("#balcon").checked= memRegistro["balcon"];
         document.querySelector("#piscina").checked= memRegistro["piscina"];
          document.querySelector("#parrilla").checked= memRegistro["parrilla"];
           document.querySelector("#terraza").checked= memRegistro["terraza"];
           document.form.prima.value= memRegistro["prima"];
           document.querySelector("#rural").checked=memRegistro["lujo"];

           if (memRegistro["ubicacion"]=="rural"){
            document.querySelector("#rural").value=true;
           }
           if(memRegistro["ubicacion"]=="urbana"){
            document.querySelector("#urbana").value=true;
           }
      
      
        }

    
       
      
    }
    getDate();
  }

  function getDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
  
    if(dd<10) {
        dd = '0'+dd
    } 
  
    if(mm<10) {
        mm = '0'+mm
    } 
  
    today = yyyy + '-' + mm + '-' + dd;
   
    document.form.fecha.value = today;
  }
  
  
  
  function regMemoriaLocal() {
    if (typeof (Storage) !== "undefined") {
      var memRegistro = JSON.parse(localStorage.getItem("memRegistro"));
      var arreglo = {
        "email": document.form.email.value,
        "nombre": document.form.nombre.value,
        "fecha": document.form.fecha.value,
        "metrosT": document.form.metrosT.value,
        "metrosC": document.form.metrosC.value,
        "lujo": document.querySelector("#lujo").checked,
        "ubicacion":(document.querySelector("#rural").checked?"rural":"urbana") ,
        "banos": document.form.banos.value,
         "cochera":document.querySelector("#cochera").checked,
          "carros": document.form.carros.value,
          "balcon":document.querySelector("#balcon").checked,
          "piscina": document.querySelector("#piscina").checked,
          "parrilla": document.querySelector("#parrilla").checked,
          "terraza": document.querySelector("#terraza").checked,
          "prima": document.form.prima.value,

          

          
      };
  
  
      localStorage.setItem("memRegistro", JSON.stringify(arreglo));
  
    }

  }

 function mostrarcotizacion(){
     var tabla=document.getElementById("mostrar");
     var form=document.form;
     var hilera="";
     if(document.querySelector("#balcon").checked){
         hilera="balcon";
             }
   if(document.querySelector("#piscina").checked){
    hilera=hilera+",piscina";
      
                     } 
      if(document.querySelector("#parrilla").checked){
        hilera=hilera+",parrilla";
        
                             }  
          if(document.querySelector("#terraza").checked){
    hilera=hilera+",terraza";
           
                                     }
                                    
     tabla.innerHTML="<tr><td>Nombre</td><td>"+form.nombre.value+"</td></tr>"+
     "<tr><td>Email</td><td>"+form.email.value+"</td></tr>"+
     "<tr><td>Fecha</td><td>"+form.fecha.value+"</td></tr>"+
     "<tr><td>Metros de construccion</td><td>"+form.metrosC.value+"</td></tr>"+
     "<tr><td>Metros de terreno</td><td>"+form.metrosT.value+"</td></tr>"+
     "<tr><td>Acabado de lujo</td><td>"+(document.querySelector("#lujo").checked?"si":"no")+"</td></tr>"+

     "<tr><td>Ubicacion</td><td>"+(document.querySelector("#rural").checked?"rural":"urbana")+"</td></tr>"+
     "<tr><td>Cantidad de baños</td><td>"+form.banos.value+"</td></tr>"+
     "<tr><td>Cochera</td><td>"+(document.querySelector("#cochera").checked?"si":"no")+"</td></tr>"+
     "<tr><td>Carros</td><td>"+form.carros.value+"</td></tr>"+
     "<tr><td>Extras</td><td>"+hilera+"</td></tr>"+
     "<tr><td>Prima</td><td>"+form.prima.value+"</td></tr>"+
     "<tr><td>Cotizacion</td><td>"+cotizar2()+"</td></tr>"+
     "<tr><td>"+sicotiza()+"</td></tr>"

    
     
     ;
 }

 

