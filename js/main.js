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
	});
	$('#rodulfo').on('click', function(){
		$('#foto').attr({
		    src:"image/rodulfo.jpg",
		    alt:"Rodulfo",
		    title:"Rodulfo"
		});
		$('#title_each_contact').html('Rodulfo Prieto');
		repeat();
	});
	$('#andrea').on('click', function(){
		$('#foto').attr({
		    src:"image/andrea.jpg",
		    alt:"Andrea Lamas",
		    title:"Andrea Lamas"
		});
		$('#title_each_contact').html('Andrea Lamas');
		repeat();
	});
	$('#mariapaula').on('click', function(){
		$('#foto').attr({
		    src:"image/mariapaula.jpg",
		    alt:"Maria Paula",
		    title:"Maria Paula"
		});
		$('#title_each_contact').html('Maria Paula Rivarola');
		repeat();
	});
	$('#katy').on('click', function(){
		$('#foto').attr({
		    src:"image/katy.jpg",
		    alt:"Katy",
		    title:"Katy"
		});
		$('#title_each_contact').html('Katy Sanchez');
		repeat();
	});
	$('#aldo').on('click', function(){
		$('#foto').attr({
		    src:"image/aldo.jpg",
		    alt:"Aldo",
		    title:"Aldo"
		});
		$('#title_each_contact').html('Aldo Alfaro');
		repeat();
	});
});



function repeat(){
	$('#subtitle_each_contact').html('<br>');
}

function escribir(){
	var cuerpo_del_mensaje = $('#input_del_mensaje');
	return cuerpo_del_mensaje.value;	
}

function decide(){
	var cuerpo_del_mensaje_valor=escribir();
	if (cuerpo_del_mensaje_valor!=='') {
		doMsg(cuerpo_del_mensaje_valor);
		clean();
	}
}
function doMsg(texto){
	var elemento=$('#bg-panel').append('<div class="mensajes msg-right"><div><span class="msg-contact">'+texto+'</span></div><div><span class="hora-2">11:14</span></div></div>');
}

function clean(){
	var cuerpo_del_mensaje = $('#input_del_mensaje');
	cuerpo_del_mensaje.value='';
	cuerpo_del_mensaje.focus();
}