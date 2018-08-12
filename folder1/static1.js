var texto_lineas = document.getElementById("input_text1");
var boton1 = document.getElementById("boton1");
boton1.addEventListener("click", dibujoPorClick);

var d = document.getElementById("canvas1");
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
	var cantidad_lineas = texto_lineas.value;
	//el fondo del canvas
	lienzo.fillStyle = "#e0e0e9";
	lienzo.fillRect(0,0,d.width,d.height);
	var w = 0, h = 0;
	while(w <= d.width){
		dibujarLinea("#000",0,h,w,d.height);
		w += d.width/cantidad_lineas;
		h += d.height/cantidad_lineas;
	}
}
