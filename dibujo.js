var texto = document.getElementById("texto_cantidad");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");

function dibujarLinea(color,xi,yi,x,y){
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.moveTo(xi,yi);
	lienzo.lineTo(x,y);
	lienzo.stroke();
	lienzo.closePath();
}

function dibujoPorClick(){
	
	var cantidad_lineas = texto.value;
	//el fondo del canvas
	lienzo.fillStyle = "#FFF";
	lienzo.fillRect(0,0,d.width,d.height);

	for(var p=0; p <= d.width; p+=d.width/cantidad_lineas){
	dibujarLinea('#'+(parseInt(15-p*13/d.width)).toString(16)+'4'+(parseInt(p*13/300)).toString(16),0,p,p,300);
	}
}
