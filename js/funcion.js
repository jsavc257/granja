// JavaScript Document
$(document).on("pagecreate","#vacas",function(){
  $("#vaquita").on("tap",function(){
    $("#precio").text("$12,500.00");
   });                       
});

$(document).on("pagecreate","#vacas",function(){
  $("#vaquita").on("taphold",function(){
  $("#descri").text("Excelente Becerro, Producción promedio de la madre de 12 lts en potrero Becerro de 7 meses, cría de vaca Simbrah y toro Cebu/Suizo Muy buen desarrollo");
  });                       
});



$(document).on("pagecreate","#vacas",function(){
  $("#vaquita2").on("tap",function(){
    $("#precio2").text("$15,500.00");
   });                       
});

$(document).on("pagecreate","#vacas",function(){
  $("#vaquita2").on("taphold",function(){
  $("#descri2").text("Excelente Becerro, Producción promedio de la madre de 20 lts en potrero Becerro de 8 meses");
  });                       
});




$(document).on("pagecreate","#vacas",function(){
  $("#usa1").on("swipe",function(){
    $("#indica1").text("1.-Para ver el precio precione la imagen");
	$("#indica2").text("2.-Para descripción sostenga su dedo en la imagen");
	$("#indica3").text("3.-Ofertas deslize su dedo a la izquierda en la palabra 'Oferta'");
	$("#indica4").text("4.-Descuentos deslize su dedo a la derecha en la palabra 'Descuento'");
  });                       
});


$(document).on("pagecreate","#vacas",function(){
  $("#ofe1").on("swipeleft",function(){
    $("#oferta").text("$9,500.00");
  });
});

$(document).on("pagecreate","#vacas",function(){
  $("#des1").on("swiperight",function(){
 $("#descuento").text("35% pago de contado");
  }); 
  
  // para imagen 2
  $(document).on("pagecreate","#vacas",function(){
  $("#oferta2").on("swipeleft",function(){
    $("#ofer2").text("$10,500.00");
  });
});

$(document).on("pagecreate","#vacas",function(){
  $("#descuento2").on("swiperight",function(){
 $("#descu2").text("45% pago de contado");
  }); 
  });
  
});

//Funcion para simular enviar datos
$(document).ready(function() {

    $('#simula_envio').click(function(){

        var dataString = $('#form_registro').serialize();

        alert('Datos que se enviaran: '+dataString);

        $.ajax({
            type: "POST",
            url: "account.php",
            data: dataString,
            success: function(data) {

            }
        });
    });
});