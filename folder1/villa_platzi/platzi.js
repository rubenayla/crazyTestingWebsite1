var canvas1_object = document.getElementById("canvas1");
var canvas1 = canvas1_object.getContext("2d");

document.addEventListener("keydown",moveWolf);

//THE BACKGROUND
var background = {
  url: "tile.png",
  loadOK: false,
  x: 0,
  y: 0
}
background.image = new Image();
background.image.src = background.url;
background.image.addEventListener("load", loadBackground);
function loadBackground(){
  background.loadOK = true;
  drawing();
}


//CHICKENS
var chicken = {
  url: "pollo.png",
  loadOK: false,
  x: [],
  y: []
}
chicken.image = new Image();
chicken.image.src = chicken.url;
chicken.image.addEventListener("load", loadChickens);
function loadChickens(){
  for(var i=0; i < customRandom(15,50); i++){
    chicken.x[i] = customRandom(0,500-80);
    chicken.y[i] = customRandom(0,500-80);
  }
  chicken.loadOK = true;
  drawing();
}


//PIGS
var pig = {
  url: "cerdo.png",
  loadOK: false,
  x: [],
  y: []
}
pig.image = new Image();
pig.image.src = pig.url;
pig.image.addEventListener("load",loadPigs);
function loadPigs(){
  for(var i=0; i < customRandom(5,10); i++){
    pig.x[i] = customRandom(0,500-80);
    pig.y[i] = customRandom(0,500-80);
  }
  pig.loadOK = true;
  drawing();
}


//COWS
var cow = {
  url: "vaca.png",
  loadOK: false,
  x: [],
  y: []
};
cow.image = new Image();
cow.image.src = cow.url;
cow.image.addEventListener("load", loadCows);
function loadCows(){
  for(var i=0; i < customRandom(5,8); i++){
    cow.x[i] = customRandom(0,4)*(500-80)/4;
    cow.y[i] = customRandom(0,5)*(500-80)/5;
  }
  cow.loadOK = true;
  drawing();
}


//WOLF (Image from c4rlosviteri)
var wolf = {
  url: "wolf.png",
  loadOK: false,
  x: canvas1_object.width/2-40,
  y: canvas1_object.height/2-40,
  step: 20
}
wolf.image = new Image();
wolf.image.src = wolf.url;
wolf.image.addEventListener("load",loadWolf);
function loadWolf(){
  wolf.loadOK = true;
  drawing();
}
function moveWolf(event){
  if(event.key == "ArrowLeft"){wolf.x -= wolf.step;}
  else if(event.key == "ArrowUp"){wolf.y -= wolf.step;}
  else if(event.key == "ArrowRight"){wolf.x += wolf.step;}
  else if(event.key == "ArrowDown"){wolf.y += wolf.step;}
  //If it's out of the screen
  sizeX = canvas1_object.width-80;
  sizeY = canvas1_object.height-80;
  if(wolf.x < 0){wolf.x += sizeX;}
  else if(wolf.x > sizeX){wolf.x -= sizeX;}
  if(wolf.y < 0){wolf.y += sizeY;}
  else if(wolf.y > sizeY){wolf.y -= sizeY;}
  drawing();
}


//DRAW ALL
function drawing(){
  if(background.loadOK){
    canvas1.drawImage(background.image,background.x,background.y);
  }
  if(chicken.loadOK){
    for(var i=0; i < chicken.x.length; i++){
      canvas1.drawImage(chicken.image,chicken.x[i],chicken.y[i]);
    }
  }
  if(pig.loadOK){
    for(var i=0; i < pig.x.length; i++){
      canvas1.drawImage(pig.image,pig.x[i],pig.y[i]);
    }
  }
  if(cow.loadOK){
    for(var i=0; i < cow.x.length; i++){
      canvas1.drawImage(cow.image,cow.x[i],cow.y[i]);
    }
  }
  if(wolf.loadOK){
    //Move the wolf with the arrows
    canvas1.drawImage(wolf.image,wolf.x,wolf.y);
  }
}

function customRandom(minn,maxx){
  return(Math.floor(Math.random()*(maxx-minn+1))+minn);
}
