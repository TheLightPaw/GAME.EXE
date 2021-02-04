var backgroundImg, space, bg1
function preload() {
    backgroundImg = addImage("sprites/space")
}
function setup() {
    space = createCanvas(windowWidth, windowHeight);
    
}
function draw() {
    background(0)
    bg1 = createSprite(windowWidth / 2, windowHeight / 2)
    bg1.addImage(backgroundImg)
    
    drawSprites()
}