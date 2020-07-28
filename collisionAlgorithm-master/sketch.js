var fixedRect, movingRect,rect1,rect2,rect3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  rect1=createSprite(200,200,50,50);
  rect1.shapeColor="green";
  rect1.velocityY=2;
  rect2=createSprite(200,800,50,50);
  rect2.shapeColor="green";
  rect2.velocityY=-2;

}

function draw() {
  background(0,0,0);  
 bounceOff(rect1,rect2);


 
  drawSprites();
}
