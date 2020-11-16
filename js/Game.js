class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    car1 = createSprite(100,200);
    car1_img.resize(80,80)
    car1.addImage("car1",car1_img);

    fence = createSprite(500,20)
    fence_img.resize(600,100)
    fence.addImage("fence",fence_img)
   coin = createSprite(random(50,950), random (50,-950),20,20)
   coin.addImage("coin",coin_img)
   coin1 = createSprite(random(50,950), random (50,-950),20,20)
   coin1.addImage("coin1",coin_img)
   coin2 = createSprite(random(50,950), random (50,-950),20,20)
   coin2.addImage("coin2",coin_img)
   coin3 = createSprite(random(50,950), random (50,-950),20,20)
   coin3.addImage("coin3",coin_img)
   coin4 = createSprite(random(50,950), random (50,-950),20,20)
   coin4.addImage("coin4",coin_img)
   coin5 = createSprite(random(50,950), random (50,-950),20,20)
   coin5.addImage("coin5",coin_img)

    cars = [car1];
  }

  play(){
    form.hide();
    
    Player.getPlayerInfo();
    player.getcarsAtEnd()
    if(allPlayers !== undefined){
      background(rgb(198,135,103));
      image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
      
      //var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 175 ;
      var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = x + 200;
        //use data form the database to display the cars in y direction
        y = displayHeight - allPlayers[plr].distance;
        cars[index-1].x = x;
        cars[index-1].y = y;
       // console.log(index, player.index)

       
        if (index === player.index){
          stroke(10);
          fill("red");
          ellipse(x,y,60,60);
          cars[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y;
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }

    if(player.distance > 3860){
      gameState = 2;
      player.rank=player.rank+1
Player.updatecarsAtEnd(player.rank)
    }

   
    drawSprites();
  }

  end(){
    console.log("Game Ended");
    console.log(player.rank)
  }
}
