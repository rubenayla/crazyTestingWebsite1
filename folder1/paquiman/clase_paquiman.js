var imagenes = [];
imagenes["pakivaca"] = "vaca.png";
imagenes["pakipollo"] = "pollo.png";
imagenes["pakicerdo"] = "cerdo.png";

class Pakiman{
	constructor(nombre_input,tipo_input,vida_input,ataque_input,sound_input){
		this.nombre = nombre_input;
		this.imagen = new Image();
		this.sonido = sound_input;
		this.tipo = tipo_input;
		this.vida = vida_input;
		this.ataque = ataque_input;
		this.imagen.src = imagenes[this.nombre];
	}
	hablar(){
		alert(this.sonido);
	}
	mostrar(){
		document.body.appendChild(this.imagen);
		document.write("<br /><strong>" + this.nombre.toUpperCase() + "</strong><br />");
		document.write("Vida: " + this.vida + "<br />");
		document.write("Ataque: " + this.ataque + "<br /><br />");

	}
}