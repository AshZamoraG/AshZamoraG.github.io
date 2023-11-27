
//Funcion para mostrar un contenido oculto

$('#mostrar').click(function() {
    $('.juego').css({
      'display':'grid'
    });
  });

//Funcion para ocultar el boton

$('#mostrar').click(function() {
    $('#mostrar').css({
      'display':'none'
    });
  });


//Funcion ara darle color a la cajas
$('#mostrar').mouseenter(function() {
    $(this).css('background-color', 'grey');
  });
  
  $('#mostrar').mouseleave(function() {
    $(this).css('background-color', '');
  });

//Funcion para hacer el efecto de sombras


$('.informacion').mouseenter(function() {
    $(this).css('box-shadow', '0 0.6rem 0.9rem black');
  });
  
  $('.informacion').mouseleave(function() {
    $(this).css('box-shadow', '');
  });
  