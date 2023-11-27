/*VALIDACIONES */
$(document).ready(function() {
    $('#formulario').submit(function() {
      var fecha = new Date();
  
      var fechaNacimiento = document.getElementById('fechaNacimiento').value;
  
      var cumpleanos = new Date(fechaNacimiento);
      var edad = fecha.getFullYear() - cumpleanos.getFullYear();
  
      var numTelefono = document.getElementById('telefono').value;
  
      var numCedula = document.getElementById('cedula').value;
  
      var nombre = document.getElementById('nombre').value;
  
      var error = 0;
  
      if (nombre.toString().length < 15) {
        alert('El nombre debe contener almenos 15 letras');
        error = 1;
      }
  
      if (numCedula.toString().length < 9) {
        alert('El número de cédula debe ser de 9 digitos');
        error = 1;
      }
  
      if (numTelefono.toString().length != 8) {
        alert('El número de telefono debe ser de 8 digitos');
        error = 1;
      }
  
      if (edad < 16) {
        alert('Debe ser mayor de 16 años');
        error = 1;
      }
  
      if (error == 1) {
      } else {
        var genero = document.getElementById('genero');
        if (document.getElementById('Femenino').checked == true) {
          genero.value = 'Femenino';
        } else {
          genero.value = 'Masculino';
        }
  
        var gradoEstudio = document.getElementById('gradoEstudio');
        var EdadForm = document.getElementById('edad');
        EdadForm.value = edad;
  
        if (document.getElementById('Basica').selected == true) {
          gradoEstudio.value = 'Basica';
        } else {
          if (document.getElementById('Primaria').selected == true) {
            gradoEstudio.value = 'Primaria';
          } else {
            if (document.getElementById('Secundaria').selected == true) {
              gradoEstudio.value = 'Secundaria';
            } else {
              if (document.getElementById('Universitaria').selected == true) {
                gradoEstudio.value = 'Universitaria';
              }
            }
          }
        }
  
        var url = 'php/enviodemail.php';
  
        $.ajax({
          type: 'POST',
          url: url,
          data: $('#formulario').serialize(),
          success: function(data) {
            $('#resultado').html(data);
          }
        });
      }
      return false;
    });
  });
  /*FIN DE VALIDACIONES */




document.getElementById("form").onsubmit = function (event) {
  // Evitar que el formulario se envíe de manera predeterminada
  event.preventDefault();

  // Enviar el formulario usando JavaScript
  const form = event.target;
  const formData = new FormData(form);

  fetch(form.action, {
      method: form.method,
      headers: {
          'Accept': 'application/json'
      },
      body: formData
  })
  .then(response => response.json())
  .then(data => {
      alert('Se registro de manera exitosa', data);
      // Puedes realizar acciones adicionales después de enviar el formulario, si es necesario
  })
  .catch(error => {
      alert('Error al enviar el formulario:', error);
  });
};
  