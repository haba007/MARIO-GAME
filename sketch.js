var back1;
var back2;




function setup() {
  createCanvas(displayWidth,displayHeight);

}

function preload (){

back2=loadImage("background.jpg") 



}


function draw() {
 // background(255,255,255);  
back1=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight)
back1.addImage(back2)
back1.velocityX=10;
back1.velocityY=0;
back1.scale=0.6;
drawSprites();
}

