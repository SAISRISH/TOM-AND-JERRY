var tom,jerry;
var tomSittingImg,tomWalkingImg,TomStandingImg;
var jerryGoingToEatImg,jerryStandingImg,jerryThumbsUpImg,jerrySearchingImg;
var garden;
function preload() {
    gardenImg = loadImage("images/garden.png");
    tomSittingImg = loadImage("images/cat1.png");
    jerryStandingImg = loadImage("images/mouse1.png")
    tomWalkingImg = loadAnimation("images/cat2.png","images/cat3.png")
    jerryMovingImg = loadAnimation("images/mouse2.png","images/mouse3.png")
    tomEndImg = loadImage("images/cat4.png")
    jerryEndImg = loadImage("images/mouse4.png")
}

function setup(){
    createCanvas(1000,600);
    garden = createSprite(500,300,600,600)
    garden.addImage(gardenImg);
    garden.scale = 1; 

    tom = createSprite(900,500,20,50);
    tom.addImage(tomSittingImg);
    tom.scale = 0.1;

    jerry = createSprite(70,500,20,50);
    jerry.addImage(jerryStandingImg);
    jerry.scale = 0.1;
    //create tom and jerry sprites here

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x<(tom.width - jerry.width)/2)
{
    jerry.addAnimation("jerryEnd",jerryEndImg);
    jerry.changeAnimation("jerryEnd")

    tom.addAnimation("tomEnd",tomEndImg);
    tom.changeAnimation("tomEnd")
    tom.velocityX=0
}


    drawSprites();

}


function keyPressed(){

if(keyCode === LEFT_ARROW){
    tom.velocityX = -5;
    tom.addAnimation("walkingTom",tomWalkingImg); 
    tom.changeAnimation("walkingTom");
jerry.addAnimation("movingJerry",jerryMovingImg)
    jerry.changeAnimation("movingJerry")
    
}  




}
