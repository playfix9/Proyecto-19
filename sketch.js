var avionImg,carreImg,meteoImg,coinImg;
var avion, carre,meteo,coin;
var gameState = "iniciar";
var puntu=0;
var puntu1=0;
var obsgru,coingru;
var perdisteImg,perdiste;
var te1 = "presiona r para reinicar";
function preload(){
avionImg = loadImage("avion.png");
carreImg = loadImage("carre.png");
meteoImg = loadImage("meteorito.png");
coinImg = loadImage("moneda.png");
perdisteImg = loadImage("over.png");
}

function setup() {
 createCanvas(1200,600);
 carre = createSprite(300,210);
 carre.addImage(carreImg);
 carre.scale=1.5;
 carre.velocityX=+15;
 carre.visible=false; 
 obsgru = createGroup();
 coingru = createGroup();
barrera1 = createSprite(100,610,150,20);
barrera2 = createSprite(100,-10,150,20);

}

function draw() {
 background(0);
 fill("white");
 textSize(30);
 text("Ayuda a el avion a esquivar los obstaculos",300,300);
 text("Presiona i para empezar",370,350);
 
 
 if(carre.x>800){
    carre.x=carre.width/2;
     }

 if(keyDown("i")&&gameState==="iniciar"){
gameState="juego";
carre.visible=true;
avion = createSprite(110,300);
avion.addImage(avionImg);
avion.scale=0.3;
avion.debug=false;



 }

if(gameState==="juego"){
puntu=puntu+Math.round(getFrameRate()/60);
avion.velocityY = +10;
monedas();
obstaculos();
if(avion.isTouching(obsgru)){
    over()
}
if(avion.isTouching(coingru)){
    puntu1=puntu1+1;
    coingru.destroyEach(avion);
}

if(keyDown("space")&&gameState==="juego"){
avion.velocityY=-15;
}


}
 drawSprites();   
 if(gameState==="juego"){

text("Puntuacion:   "+puntu1,450,50);
 }
}

function obstaculos(){
if(frameCount%70==0){
meteo = createSprite(1200,Math.round(random(0,600)));
meteo.addImage(meteoImg);
meteo.velocityX=-(6+puntu/100);
meteo.scale=0.1;
meteo.lifetime=300;
obsgru.add(meteo);
}
}
function monedas(){
if(frameCount%70==0){
coin = createSprite(1200,Math.round(random(0,600)));
coin.addImage(coinImg);
coin.velocityX=-15;
coin.lifetime=300;
coin.scale=0.21;
coingru.add(coin);
}
}
function over(){
obsgru.destroyEach();
coingru.destroyEach();
carre.velocityX=0;
gameState="over";
avion.y=300;
avion.velocityY=0;
avion.visible=false;
perdiste= createSprite(600,300);
perdiste.addImage(perdisteImg);
perdiste.scale=0.5;

}

