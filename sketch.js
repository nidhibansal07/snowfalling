const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var backgroundImg;
var man;
var manImg;
var back;
var invisibleGround;
var snowfall=[]
function preload() {
    backgroundImg=loadImage("snow1.jpg")
    manImg=loadImage("man.png")
    back=loadImage("snow2.jpg")
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;


    
man=createSprite(200,600)
man.addImage(manImg)
man.scale=0.4
man.debug = false;
man.setCollider("circle",0,0,400);

invisibleGround = createSprite(600,680,1200,20);
invisibleGround.visible = false;

    
}

function draw(){
  
    
    Engine.update(engine);
    background(backgroundImg);

    textSize(20);
  fill("BLACK");
  stroke("black")
  text("PRESS SPACE TO MAKE THE MAN WALK",400,150);
       text("PRESS UP ARROW TO JUMP",400,170)
    if(man.x>=1100){
      
      man.x=100
    }
    
   
    if(frameCount%20===0){
      snowfall.push(new Snowfall(random(100,800),10,10))
      
    }
    for(var j=0;j<snowfall.length;j++){
      snowfall[j].display()
    }


    if(keyDown ("UP_ARROW")){

        man.velocityY = man.velocityY-5
  
    }

    man.velocityY = man.velocityY + 0.8

    man.collide(invisibleGround);
  
    drawSprites()
  }

function keyPressed(){
  

  if(keyCode=== 32){
    man.velocityX= man.velocityX+5
  }



}

