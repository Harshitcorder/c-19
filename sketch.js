var ship
var space
var Meteor,meteorGroup
var rand
var score=0

function preload(){
shipImg=loadImage("spaceship.jpg")
spaceImg=loadImage("space.jpg")
MeteorImg=loadImage("Meteor.jpg")
StarImg=loadImage("star.jpg")
overImg=loadImage("10.webp")
}
function setup() {
 createCanvas(500,600)
space=createSprite(500,300)
space.scale=2
 space.addImage("space.jpg",spaceImg)
 space.velocityY=5
 ship=createSprite(200,500,)
 ship.addImage("spaceship.jpg",shipImg)
 ship.scale=0.07
 over=createSprite(250,300)
 over.addImage("10.webp",overImg)
 meteorGroup = new Group();
 over.visible=false
over.scale=0.5

 
 
 }

function draw() {
background(200)
if(meteorGroup.isTouching(ship)){
over.visible=true

}
 drawSprites()
 if(space.y > 400){
    space.y = 300
}
 if(keyDown("left_arrow")){
    ship.x=ship.x-5
  }
  if(keyDown("right_arrow")){
    ship.x=ship.x+5
  }
  spawnMeteor()
  
}
function spawnMeteor(){
  if (frameCount % 50 === 0) {
  Meteor=createSprite(rand)
  Meteor.addImage("Meteor.jpg",MeteorImg)
  rand= Math.round(random(200,500))
  Meteor.velocityY=15
  Meteor.scale=0.09
  Meteor.lifetime = 100;
  Meteor.depth = Meteor.depth;
  Meteor.depth = Meteor.depth + 1;
  meteorGroup.add(Meteor);
 
  
  }

}
