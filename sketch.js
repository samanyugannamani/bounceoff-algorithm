var movingrect;
var fixedrect;

function setup() {
  createCanvas(800,400);
  
  movingrect=createSprite(400,200,80,30);
  movingrect.shapeColor="blue";
  movingrect.debug=true;
  fixedrect=createSprite(400,500,30,80);
  fixedrect.shapeColor="blue";
  fixedrect.debug=true;
  movingrect.velocityY=5;
 fixedrect.velocityY=-5;
}

function draw() {
  background(255,255,255);  

 if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2
  &&fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2
  ){
    movingrect.velocityX=movingrect.velocityX*(-1);
    fixedrect.velocityX=fixedrect.velocityX*(-1);
  }
  if(movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2
    &&fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2){
      movingrect.velocityY=movingrect.velocityY*(-1);
    fixedrect.velocityY=fixedrect.velocityY*(-1);
    }
 
 

  drawSprites();
}