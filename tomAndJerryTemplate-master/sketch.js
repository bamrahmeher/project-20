
var cat;
var mouse;

function preload() {
   this.image=loadImage("images/cat1")
   this.image=loadImage("images/jerryOne") 
   
}

function setup(){
    createCanvas(1000,800);
   
    cat = new Cat(900,350,70,70);
    mouse = new Mouse(850,350,50,50)
    garden = new Garden(400,height,1000,20)

}

function draw() {

    background(Garden);
   cat.display();
   mouse.display();
    
    drawSprites();
}


function keyPressed(){

  if(keyDown===LEFT_ARROW){
      cat.velocityX=-5
      cat.addAnimation("catRunning",catImg2)
      cat.changeAnimation("catRunning")
  }


}
