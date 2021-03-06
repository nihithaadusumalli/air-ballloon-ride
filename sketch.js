var balloon, background;

function preload(){
  backgroundImg = loadImage("images/1.png");
 // balloonImg = loadImage("images/2.png","images/3.png","images/4.png");
}  

function setup() {
  database = firebase.database();
  console.log(database)
  createCanvas(800,400);
  balloon = createSprite(400, 200, 50, 50);
  balloon.addAnimation("balloon",balloonImage);
  balloon.scale = 0.4;
}

function draw() {
  background(backgroundImg);

  if(keyDown(LEFT_ARROW)){
    balloon.x = balloon.x - 10;
  }

  else if(keyDown(RIGHT_ARROW)){
    balloon.x = balloon.x + 10;
  }

  else if(keyDown(UP_ARROW)){
    balloon.y = balloon.y - 10;
  }

  else if(keyDown(DOWN_ARROW)){
    balloon.y = balloon.y + 10;
  }

  //background(255,255,255);  
  drawSprites();
}