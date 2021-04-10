
var gameState = 0,form,game,player;
var database,playerCount=0,allPlayers;
var cars=[],car1,car2,car3,car4;
var car1Img,car2Img,car3Img,car4Img,track,ground;

function preload(){
car1Img = loadImage("Classes/Images/car1.png")
car2Img = loadImage("Classes/Images/car2.png")
car3Img = loadImage("Classes/Images/car3.png")
car4Img = loadImage("Classes/Images/car4.png")
track = loadImage("Classes/Images/track.jpg")
ground = loadImage("Classes/Images/ground.png")
}
function setup() {
  createCanvas(displayWidth,displayHeight-120);
  //Engine.create();
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(200);  
  game.getState()
  if(playerCount == 4){

    game.updateState(1)
  }
  if(gameState == 1){
    clear()
    game.play()
  }
}