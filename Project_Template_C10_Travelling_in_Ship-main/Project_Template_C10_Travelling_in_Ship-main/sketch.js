
var boat, up_down
var sea, seaImage

function preload(){
up_down = loadAnimation("ship-3.png" ,"ship-2.png","ship-4.png")
  seaImage= loadImage("sea.png")
}
function setup(){
  createCanvas(1600,800);
  sea=createSprite(1600,190,600,10)
  sea.velocityX=2
sea.addImage('sea.png', seaImage)


boat = createSprite(200,240,20,50);
boat.addAnimation("boat", up_down);
edges = createEdgeSprites();
createEdgeSprites()
boat.scale=0.5

  
  
}

function draw() {
  background("blue");
  if (sea.x=0) {
sea.x=sea.width/2
  }



 drawSprites()
}
