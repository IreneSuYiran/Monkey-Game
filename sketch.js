

var monkey , monkey_running;
var ground;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score;
var survivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;

  ground = createSprite(400, 350, 900, 10);
  

  
}


function draw() {
  background("white");
  
  ground.velocityX = -4;
  ground.x = ground.width/2;
  //console.log(ground.width);
  console.log(monkey.y);
  
  monkey.collide(ground);
  
  if(keyDown("space") && monkey.y > 300){
    monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  if(frameCount % 80 === 0){
    bananas();
  }
  
  console.log(bananaImage);
  
  drawSprites();
}

function bananas(){
  banana = createSprite(150, 315, 20, 20);
  banana.addImage("banana", bananaImage);
  banana.scale = 0.15;
  banana.lifeTime = 400;
}




