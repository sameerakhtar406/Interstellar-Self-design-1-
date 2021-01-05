var Start,SImg
var TARS,TMoving
var Ground,GImg
var moon,mImg
var obGroup,obImg
var cGroup,c1,c2,c3,c4,c5,c6
var Radio
var Battery
var score=0

var GameState="Start"

function preload(){
  SImg=loadImage("My Post.jpg")

  TMoving=loadAnimation("01.png","1.png","2.png");
  
  GImg=loadImage("GImg1.png")
  
  mImg=loadImage("moon.png")
  
  obImg=loadImage("obs.png")
  
  c1=loadImage("ob.png")
  c2=loadImage("ob1.png")
  c3=loadImage("ob2.png")
  c4=loadImage("ob3.png")
  c5=loadImage("ob4.png")
  c6=loadImage("ob5.png")

  Radio=loadSound("Radio.mp3")

  Battery=loadImage("Bat.png");

}
function setup() {
  createCanvas(1365,620);
  
  Start=createSprite(683,310,70,70);
  Start.addImage(SImg);
  Start.scale=0.6
  TARS=createSprite(150,430,20,20);
  TARS.addAnimation("TM",TMoving);
  
  Ground=createSprite(600,570,1200,20);
  Ground.addImage(GImg);
  Ground.velocityX=-3
  Ground.x=Ground.width/2

  obGroup= createGroup();
  cGroup= createGroup();
}

function draw() {
  background(0,162,207);
  if(GameState==="Start"){
   TARS.visible=false
   Ground.visible=false
   Radio.play();
   if(keyCode===13){
    GameState="Play"
  }
  }
  if(GameState==="Play"){
    Start.visible=false
    TARS.visible=true
    Ground.visible=true
  if(Ground.x<0){
    Ground.x=Ground.width/2
  }
  spawnObstacles();
  spawnComms();
  spawnBattery();

  }
  
  drawSprites();
}
function spawnObstacles() {
  if (frameCount % 130 === 0) {
    var OBS = createSprite(600,523,40,10);
    OBS.addImage(obImg);
    OBS.scale = 1;
    OBS.velocityX = -3;
    OBS.lifetime = 300;
    
    obGroup.add(OBS);
  }
}
function spawnComms(){
  if (frameCount % 350 === 0){
    var comms = createSprite(600,(random(300,480)),10,40);
    comms.velocityX = -7
    
     var rand = Math.round(random(1,6));
     switch(rand) {
       case 1: comms.addImage(c1);
               break;
       case 2: comms.addImage(c2);
               break;
       case 3: comms.addImage(c3);
               break;
       case 4: comms.addImage(c4);
               break;
       case 5: comms.addImage(c5);
               break;
       case 6: comms.addImage(c6);
               break;
       default: break;
     }
    
     //obstacle.scale = 0.5;
      comms.lifetime = 300;
    
     cGroup.add(comms);
  }
 }
 function spawnBattery() {
  if (frameCount % 1200 === 0) {
    var  BAT= createSprite(600,180,40,10);
    BAT.addImage(Battery);
    BAT.scale = 1;
    BAT.velocityX = -3;
    BAT.lifetime = 300;
    
    //obGroup.add(OBS);
  }
}
