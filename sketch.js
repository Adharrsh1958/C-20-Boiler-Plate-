var fixed_rectangle, moving_rectangle;
function setup() {
  createCanvas(screen.width,screen.height);
  fixed_rectangle = createSprite(800, 350, 100, 50);
  fixed_rectangle.shapeColor = "cyan";
  moving_rectangle = createSprite(800,350,50,100);
  moving_rectangle.shapeColor = "cyan";
}

function draw() {
  background(0,0,0);  
  moving_rectangle.x=World.mouseX;
  moving_rectangle.y=World.mouseY;
  if ((moving_rectangle.x-fixed_rectangle.x<fixed_rectangle.width/2+moving_rectangle.width/2)&&
  (fixed_rectangle.x-moving_rectangle.x<fixed_rectangle.width/2+moving_rectangle.width/2)&&
  (fixed_rectangle.y-moving_rectangle.y<fixed_rectangle.height/2+moving_rectangle.height/2)&&
  (moving_rectangle.y-fixed_rectangle.y<fixed_rectangle.height/2+moving_rectangle.height/2)){
    fixed_rectangle.shapeColor = "#00ff00";
    moving_rectangle.shapeColor = "#ffff00";
  }
  else {
    fixed_rectangle.shapeColor = "cyan";
    moving_rectangle.shapeColor = "cyan";
  }
  drawSprites();
}