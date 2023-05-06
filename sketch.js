
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var bow , arrow,  backgrnd, redbn, blubn, greenbn, pinkbn, redB, pinkB, greenB, blueB, arrowGroup, select_balloon;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgrndImage;

var score =0;
function preload(){
  
  backgrndImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgrndImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
   score = 0;  
 redB = createGroup();
 greenB = createGroup();
 blueB = createGroup();
 pinkB = createGroup();
 arrowGroup = createGroup();
  }

function draw() {
 background(0);
 

 if(gameState === PLAY)
 {
      /*Uncomment correct option 
        according to PLAY state*/  
      // // moving ground
       scene.velocityX = -3 
      // //destroy bow
      // bow.destroy();
      // //reset the background
      if (scene.x < 0){
          scene.x = scene.width/2;
         }
      // //moving bow
      bow.y = World.mouseY      
      // //stop background movement
      // scene.velocityX = 0;
      score = score + Math.round(frameCount/100);
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();  
  }
  
  //creating continous enemies
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 60 == 0) {
    switch(select_balloon ){
      case 1: redBalloon();
      break;
      case 2:blueBalloon();
      break;
      case 3:pinkBalloon();
      break;
      case 4:greenBalloon();
      break;
      default:break;
    }
  }
 }

 if (frameCount>1000) {
  redbn.destroyEach();
  bluebn.destroyEach();
  greenbn.destroyEach();
  pinkbn.destroyEach();
  arrowGroup.destroyEach();
  gameState=END; 
}

  if (gameState === END) {
    /*Uncomment correct option 
      according to END state*/  
      // // moving ground
      // scene.velocityX = -3 
      // //destroy bow
      bow.destroy();
      // //reset the background
      // if (scene.x < 0){
      //     scene.x = scene.width/2;
      //    }
      // //moving bow
      // bow.y = World.mouseY      
      // //stop background movement
      scene.velocityX = 0;
     // redB.setVelocityXEach (0);
     // greenB.setVelocityXEach (0);
     // blueB.setVelocityXEach (0);
     // pinkB.setVelocityXEach (0);

  }

drawSprites();
  text("Score: "+ score, 300,50);
}

function redBalloon() {
  var redbn = createSprite(0,Math.round(random(20, 370)), 10, 10);
  redbn.addImage(red_balloonImage);
  redbn.velocityX = 3;
  redbn.lifetime = 150;
  redbn.scale = 0.1;
  redB.add(redbn);
}

function blueBalloon() {
  var bluebn = createSprite(0,Math.round(random(20, 370)), 10, 10);
  bluebn.addImage(blue_balloonImage);
  bluebn.velocityX = 3;
  bluebn.lifetime = 150;
  bluebn.scale = 0.1;
  blueB.add(bluebn);
}

function greenBalloon() {
  var greenbn = createSprite(0,Math.round(random(20, 370)), 10, 10);
  greenbn.addImage(green_balloonImage);
  greenbn.velocityX = 3;
  greenbn.lifetime = 150;
  greenbn.scale = 0.1;
  greenB.add(greenbn);
}

function pinkBalloon() {
  var pinkbn = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pinkbn.addImage(pink_balloonImage);
  pinkbn.velocityX = 3;
  pinkbn.lifetime = 150;
  pinkbn.scale = 1
  pinkB.add(pinkbn);
}

// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
 arrowGroup.add(arrow);

}
