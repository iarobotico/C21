var backg,backgimg
var player,playerimg
var gameState = "play"
var ob,obimg,obGroup
var ob2,ob2img,ob2Group
var ob3,ob3img,ob3Group
var score




function preload(){
    backgimg = loadImage("Road.png")
    playerimg = loadAnimation("Runner-1.png","Runner-2.png")
    obimg = loadImage("obstacle1.png")
    obimg2 = loadImage("obstacle2.png")
    obimg3 = loadImage("obstacle3.png")

}

function setup() {
    createCanvas(1200,600)

    backg = createSprite(300,300)
    backg.addImage(backgimg)
    backg.velocityX = -2
    

    player = createSprite(300,300)
    player.scale= 0.1
    player.addAnimation("running",playerimg)

    ob2Group = new Group()
    obGroup = new Group()
    ob3Group = new Group()

    score = 0

    player.setCollider("rectangle",0,0,80,0);
    player.debug = true


 
}

function draw() {
    
    


    if(gameState == "play"){
        player.y = World.mouseY;

        if(backg.x<0){
            backg.x = 300
          }



    createob()
    drawSprites()
    
    if(obGroup.isTouching(player)){
        gameState = "end"
    }

    
    }

    else if(gameState == "end"){
        fill (255,0,0)
        textSize(50)
      text("GAME OVER",500,300)
    }
 
}

function createob() {

    if (frameCount % 100 == 0) {
        ob =createSprite(1100,Math.round(random(50, 550)));
        ob.scale =0.2;
        ob.velocityX = -2
        ob.addImage(obimg);
        ob.setLifetime=170;
        obGroup.add(ob)
        
    }
  }
  if (frameCount % 200 == 0) {
    ob2 =createSprite(1100,Math.round(random(50, 550)));
    ob2.scale =0.2;
    ob2.velocityX = -2
    ob2.addImage(ob2img);
    ob2.setLifetime=170;
    ob2Group.add(ob2)
    
}
if (frameCount % 300 == 0) {
    ob3 =createSprite(1100,Math.round(random(50, 250)));
    ob3.scale =0.2;
    ob3.velocityX = -2
    ob3.addImage(ob3img);
    ob3.setLifetime=170;
    ob3Group.add(ob3)
    
}




  