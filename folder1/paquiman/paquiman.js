var pakivaca = new Pakiman("pakivaca","tierra", 150, 30,"muu");
var pakipollo = new Pakiman("pakipollo","tierra-aire", 80, 60, "paquipollo");
var pakicerdo = new Pakiman("pakicerdo","tierra", 160, 60, "miau");

var coleccion = [];
coleccion.push(new Pakiman("pakivaca","tierra", 150, 30,"muu"));
coleccion.push(new Pakiman("pakipollo","tierra-aire", 80, 60, "paquipollo"));
coleccion.push(new Pakiman("pakicerdo","tierra", 160, 60, "miau"));

for(var p of coleccion){  //"of" brings the object. "in" brings the index ("of" behaves like the "in" in python)
	p.mostrar();
}
/*
for(var p in coleccion){
	coleccion[p].mostrar();
}
*/
