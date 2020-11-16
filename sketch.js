var canvas, backgroundImage;

var gameState = 0;
var playerCount=0
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, track, car1_img, coin, fence, fence_img, coin_img, coin1,coin2,coin3,coin4,coin5
var score


function preload(){
  track = loadImage("../images/background.jpg");
  car1_img = loadImage("../images/Player.png");
car1_img.scale=0.1
coin_img= loadImage("../images/coin.png")
fence_img = loadImage("../images/fence.png")

 
  ground = loadImage("../images/background.jpg");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  car1 = createSprite(displayWidth/2, displayHeight/2+200)
  car1_img.resize(200,200);
car1.addImage("car",car1_img);


  /*database = firebase.database();
  game = new Game();
  game.getState();
  game.start();*/
}


function draw(){

  background(ground)
/*  if(playerCount === 1){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
*/
camera.position.y=car1.y;
if (keyDown("up"))
{
  car1.y=car1.y-6;
}  

if (keyDown("right"))
{
  car1.x=car1.x+6;
}  
if (keyDown("left"))
{
  car1.x=car1.x-6;
}  

drawSprites();
spwancoins()

if(car1.isTouching(coin))
{
  score=score+2;
}
if(car1.isTouching(coin1))
{
  score=score+1;
}
if(car1.isTouching(coin2))
{
  score=score+5;
}
if(car1.isTouching(coin3))
{
  score=score+3;
}
if(car1.isTouching(coin4))
{
  score=score+4;
}

spawnfence();

text("score "+score, 1500,500);

}


function spwancoins()
{
  fence = createSprite(500,20)
  fence_img.resize(600,100)
  fence.addImage("fence",fence_img)

  if (frameCount%300===0)
{
 textSize(20);
 stroke("red")
 //strokeWidth(6);

 coin = createSprite(random(50,950), random (50,-950),20,20)
 coin.addImage("coin",coin_img)
 text("3",coin.x, coin.y-100);
 
 coin1 = createSprite(random(50,950), random (50,-950),20,20)
 coin1.addImage("coin1",coin_img)
 text("3",coin1.x, coin1.y-100);

 coin2 = createSprite(random(50,950), random (50,-950),20,20)
 coin2.addImage("coin2",coin_img)
 text("3",coin2.x, coin2.y-100);

 coin3 = createSprite(random(50,950), random (50,-950),20,20)
 coin3.addImage("coin3",coin_img)
 text("3",coin3.x, coin3.y-100);

 coin4 = createSprite(random(50,950), random (50,-950),20,20)
 coin4.addImage("coin4",coin_img)
 text("3",coin4.x, coin4.y-100);

 coin5 = createSprite(random(50,950), random (50,-950),20,20)
 coin5.addImage("coin5",coin_img)
 text("3",coin5.x, coin5.y-100);
  }


}

function spawnfence()
{
if(frameCount%150===0)
{
  fence = createSprite(random(50,4000), random (50,-950))
  fence_img.resize(600,100)
  fence.addImage("fence",fence_img)
}
}