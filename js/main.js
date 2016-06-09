$(document).ready(function(){
	$('#laboratoria').on('click', function(){
		$('#foto').attr({
		    src:"image/logocodeacademy.png",
		    alt:"Emily Vivanco",
		    title:"Emily Vivanco"
		});
		$('#title_each_contact').html('Laboratoria Perú');
		$('#subtitle_each_contact').html('Ana María, Aldo, Gian, Mariana, Papu, Tú');
		$('#bg-panel').html('<div class="mensajes msg-left"><div><span class="name-contact skyblue">Andrea Lamas</span></div><div><span class="msg-contact">Chicos han visto el nuevo corte de Aldo?</span></div><div><span class="hora-2">11:12</span></div></div><div class="mensajes msg-left"><div><span class="name-contact fucsia">Mariana Costa</span></div><div><span class="msg-contact">¿Finalmente se corto?</span></div><div><span class="hora-2">11:13</span></div></div><div class="mensajes msg-left"><div><span class="name-contact verde">Maria Paula Rivarola</span></div><div><span class="msg-contact">Jajaja Sii finalmente se corto!!</span></div><div><span class="hora-2">11:13</span></div></div><div class="mensajes msg-right"><div><span class="msg-contact">Antes parecia mufasa jajajaja</span></div><div><span class="hora-2">11:14</span></div></div><div class="mensajes msg-right"><div><span class="msg-contact">Ahora si esta decente</span></div><div><span class="hora-2">11:18</span></div></div><div class="mensajes msg-left"><div><span class="name-contact skyblue">Andrea Lamas</span></div><div><span class="msg-contact">¿Por qué se lo habrá cortado?</span></div><div><span class="hora-2">11:20</span></div></div><div class="mensajes msg-left"><div><span class="name-contact mostaza">Aldo Alfaro</span></div><div><span class="msg-contact">Ya ya ya, hacia mucho calor que más</span></div><div><span class="hora-2">11:25</span></div></div><div class="mensajes msg-left"><div><span class="name-contact skyblue">Andrea Lamas</span></div><div><span class="msg-contact">Esta siguiendo los pasos de Juan Diego!</span></div><div><span class="hora-2">11:30</span></div></div><div class="mensajes msg-left"><div><span class="name-contact verde">Maria Paula Rivarola</span></div><div><span class="msg-contact">Nunca!!! Juan Diego es único</span></div><div><span class="hora-2">11:31</span></div></div>');
	});
	$('#raymi').on('click', function(){
		$('#foto').attr({
		    src:"image/raymi.jpg",
		    alt:"Raymi",
		    title:"Raymi"
		});
		$('#title_each_contact').html('Raymi Saldomando');
		repeat();
		$('#bg-panel').html('<div class="mensajes msg-left"><div><span class="msg-contact">Es que primero tienes que linkear el script</span></div><div><span class="hora-2">12:10</span></div></div><div class="mensajes msg-left"><div><span class="msg-contact">del jquery y luego usas la librería</span></div><div><span class="hora-2">12:10</span></div></div><div class="mensajes msg-left"><div><span class="msg-contact">Por eso te sale error</span></div><div><span class="hora-2">12:12</span></div></div><div class="mensajes msg-right"><div><span class="msg-contact">Ahhhh, ahora entiendo</span></div><div><span class="hora-2">12:13</span></div></div><div class="mensajes msg-right"><div><span class="msg-contact">Muchas gracias Raymi</span></div><div><span class="hora-2">12:14</span></div></div><div class="mensajes msg-left"><div><span class="msg-contact">De nada, y ya sabes, cualquier consulta, me pasas la voz</span></div><div><span class="hora-2">12:17</span></div></div>');
	});
	$('#mariana').on('click', function(){
		$('#foto').attr({
		    src:"image/mariana.jpg",
		    alt:"Mariana",
		    title:"Mariana"
		});
		$('#title_each_contact').html('Mariana Costa');
		repeat();
		$('#bg-panel').html('<div class="mensajes msg-left"><div><span class="msg-contact">Holaaaaa</span></div><div><span class="hora-2">12:10</span></div></div><div class="mensajes msg-right"><div><span class="msg-contact">Marianaaa felicidadeees </span></div><div><span class="hora-2">12:13</span></div></div><div class="mensajes msg-right"><div><span class="msg-contact">Lucía llenará de luz Laboratoria</span></div><div><span class="hora-2">12:14</span></div></div><div class="mensajes msg-left"><div><span class="msg-contact">Graciaas, más tarde les mando una foto de la bebe</span></div><div><span class="hora-2">12:17</span></div></div>');
	});
	$('#ana').on('click', function(){
		$('#foto').attr({
		    src:"image/anamaria.jpg",
		    alt:"Ana María",
		    title:"Ana María"
		});
		$('#title_each_contact').html('Ana María Martinez Franklin');
		repeat();
		$('#bg-panel').html('<div class="mensajes msg-left"><div><span class="msg-contact">Que tal chama, cómo estás</span></div><div><span class="hora-2">12:10</span></div></div>');
	});
	$('#rodulfo').on('click', function(){
		$('#foto').attr({
		    src:"image/rodulfo.jpg",
		    alt:"Rodulfo",
		    title:"Rodulfo"
		});
		$('#title_each_contact').html('Rodulfo Prieto');
		repeat();
		$('#bg-panel').html('<div class="mensajes msg-left"><div><span class="msg-contact">Suerte a todas con el examen</span></div><div><span class="hora-2">2:15</span></div></div><div class="mensajes msg-left"><div><span class="msg-contact">Me han dicho que está re-difícil</span></div><div><span class="hora-2">2:17</span></div></div>');
	});
	$('#andrea').on('click', function(){
		$('#foto').attr({
		    src:"image/andrea.jpg",
		    alt:"Andrea Lamas",
		    title:"Andrea Lamas"
		});
		$('#title_each_contact').html('Andrea Lamas');
		repeat();
		$('#bg-panel').html('<div class="mensajes msg-left"><div><span class="msg-contact">Te faltan corregir algunas tildes en tu CV</span></div><div><span class="hora-2">3:20</span></div></div><div class="mensajes msg-right"><div><span class="msg-contact">Gracias por las recomendaciones, Andrea</span></div><div><span class="hora-2">3:34</span></div></div>');
	});
	$('#mariapaula').on('click', function(){
		$('#foto').attr({
		    src:"image/mariapaula.jpg",
		    alt:"Maria Paula",
		    title:"Maria Paula"
		});
		$('#title_each_contact').html('Maria Paula Rivarola');
		repeat();
		$('#bg-panel').html('<div class="mensajes msg-left"><div><span class="msg-contact">Ya te reuniste con tu mentor?</span></div><div><span class="hora-2">7:30</span></div></div><div class="mensajes msg-right"><div><span class="msg-contact">Sí! Joe te va a pasar la foto</span></div><div><span class="hora-2">7:48</span></div></div>');
	});
	$('#katy').on('click', function(){
		$('#foto').attr({
		    src:"image/katy.jpg",
		    alt:"Katy",
		    title:"Katy"
		});
		$('#title_each_contact').html('Katy Sanchez');
		repeat();
		$('#bg-panel').html('<div class="mensajes msg-left"><div><span class="msg-contact">¿Qué te parece el examen?</span></div><div><span class="hora-2">3:20</span></div></div><div class="mensajes msg-right"><div><span class="msg-contact">Ayúdame, Katy, por favor :´&#40</span></div><div><span class="hora-2">3:34</span></div></div>');
	});
	$('#aldo').on('click', function(){
		$('#foto').attr({
		    src:"image/aldo.jpg",
		    alt:"Aldo",
		    title:"Aldo"
		});
		$('#title_each_contact').html('Aldo Alfaro');
		repeat();
		$('#bg-panel').html('<div class="mensajes msg-left"><div><span class="msg-contact">Dale like a las publicaciones en Laboratoria</span></div><div><span class="hora-2">3:20</span></div></div><div class="mensajes msg-right"><div><span class="msg-contact">Listo!</span></div><div><span class="hora-2">3:34</span></div></div>');
	});
});

function repeat(){
	$('#subtitle_each_contact').html('<br>');
}

var horas, minutos;

function hora_peru(){
	var datos=new Date();
   	horas=datos.getHours();
   	minutos=datos.getMinutes();

   	if (horas<10) {horas='0'+horas.string();}
   	if (minutos<10) {minutos='0'+minutos;}
}

function doMsg(texto){
	hora_peru();

	var elemento=$('#bg-panel').append('<div class="mensajes msg-right"><div><span class="msg-contact">'+texto+'</span></div><div><span class="hora-2">'+horas+':'+minutos+'</span></div></div>');
}



function escribir(){
	var cuerpo_del_mensaje = $('#input_del_mensaje');
	return cuerpo_del_mensaje.val();	
}

function clean(){
	var cuerpo_del_mensaje = $('#input_del_mensaje');
	cuerpo_del_mensaje.val("");
	cuerpo_del_mensaje.focus();
}

function decide(){
	var cuerpo_del_mensaje_valor=escribir();
	if (cuerpo_del_mensaje_valor!=='') {
		doMsg(cuerpo_del_mensaje_valor);
		clean();
	}
}

$('#input_del_mensaje').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        decide();
    }
});

function escribir1(){
	var texto_busqueda = $('#input_de_busqueda');
	return texto_busqueda.val().toLowerCase();	
}


var nombres_buscar=['laboratoria', 'raymi', 'saldomando', 'mariana', 'costa', 'ana', 'maria', 'martinez', 'Franklin', 'rodulfo', 'prieto', 'andrea', 'lamas', 'maria', 'paula', 'Rivarola', 'katy', 'sanchez', 'aldo', 'alfaro'];


var ids=['laboratoria', 'raymi', 'mariana', 'ana', 'rodulfo', 'andrea', 'mariapaula', 'katy', 'aldo']

function mostrar(contacto, numero){
	var variable=contacto;
	for (var j = 0; j < ids.length; j++) {
		if (j!==numero) {
			
			$('#'+ids[j]).css('display', 'none');
		}else{
			$('#'+variable).css('display', 'block !important');
		}
	}
}

function buscar(){
	for (var i = 0; i < nombres_buscar.length; i++) {
		if (texto_busqueda_valor==nombres_buscar[i]) {
			var k=i;
			if (k===0) {
				mostrar('laboratoria', 0);
			}
			else if (k==1||k==2) {
				mostrar('raymi', 1);
			}else if (k==3||k==4) {
				mostrar('mariana', 2);
			}else if (k==5||k==6||k==7||k==8) {
				mostrar('ana', 3);
			}else if (k==9||k==10) {
				mostrar('rodulfo', 4);
			}else if (k==11||k==12) {
				mostrar('andrea', 5);
			}else if (k==13||k==14||k==15) {
				mostrar('mariapaula', 6);
			}else if (k==16||k==17) {
				mostrar('katy', 7);
			}else if (k==18||k==19) {
				mostrar('aldo', 8);
			}else{
				$('div.contact-zone').html('No se encontró ningún contacto que coincida con su búsqueda');
			}
		}
	}
}

function clean1(){
	var texto_busqueda = $('#input_de_busqueda');
	texto_busqueda.val("");
	texto_busqueda.focus();
}


var texto_busqueda_valor;
function decide1(){
	texto_busqueda_valor=escribir1();
	if (texto_busqueda_valor!=='') {
		buscar();
		clean1();
	}
}

$('#input_de_busqueda').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        decide1();
    }
});

