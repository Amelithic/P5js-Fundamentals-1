//Author: Amélie McCarthy
//Date: 15/11/24
//Purpose: Assignment 2


/* VARIABLE DECLARATIONS */

var bgColour, bgSlider, bgSliderText, bgSliderDiv;
var circleX,circleY,circleSize, myCircle;
var speed, speedBtn, canvasMenu;
var testAudio;
var SETU_logo;
var frameCount;
var yLevel, platformWidth, platformHeight, treeArray, treeDisplayArray, treeBuffer;

const platformSize = [300, 400, 500, 600, 700, 800];


/* DEFAULT FUNCTIONS */

function preload() {
  // LOAD IMAGES
  SETU_light_logo = loadImage('images/SETU_light.png');
  SETU_dark_logo = loadImage('images/SETU_dark.png');
  pfp = loadImage('images/pfp.png');

  // LOAD SOUND EFFECT
  hoverSound = loadSound('sounds/chord.wav');
  testSound = loadSound('sounds/flourish.mp3');
}


function setup() {
  createCanvas(800,800);

  // MENU ABOVE CANVAS
  canvasMenu = createDiv('');
  canvasMenu.id('canvas_menu');

  // SLIDER
  bgSliderDiv = createDiv(''); //container to have slider and label beside each other in menu
  bgSliderText = createP('Change BG colour:');
  bgSliderText.style('line-height','0pt'); //makes slider closer to text
  bgSlider = createSlider(0,255, 150); //min, max, default - for greyscale bg

  bgSliderDiv.child(bgSliderText); //move element into div
  bgSliderDiv.child(bgSlider); //move element into div
  canvasMenu.child(bgSliderDiv); //moved to the menu

  // DEFAULT VARS
  circleX=100;
  circleY=100;
  circleSize=100;
  speed = 5;
  frameCount = 1;
  SETU_logo = SETU_dark_logo;


  // REGENERATE TREES BUTTON
  generateTreeValues();
  regenDiv = createDiv(''); //container to have slider and label beside each other in menu
  regenIcon = createImg('images/tree-icon.png'); //icon beside button
  regenBtn = createButton('Regenerate trees'); //button
  regenBtn.mouseClicked(generateTreeValues);


  regenDiv.child(regenIcon); //move element into div
  regenDiv.child(regenBtn) //move element into div
  canvasMenu.child(regenDiv); //move to the menu

  // TEST AUDIO
  testAudio = createButton('Test Audio');
  testAudio.mouseClicked(playTestSound);
  canvasMenu.child(testAudio);

  // SPEED BUTTON
  speedBtn = createButton('Adjust speed'); //speed button
  speedBtn.mouseClicked(Speedy); //function called after speed variable default value assigned
  canvasMenu.child(speedBtn); //move to the menu

} //end setup()


function draw() {
  // FRAME COUNT
  frameCount++; 
  //console.log('Frame count: '+frameCount);

  // SLIDER VALUE == BACKGROUND
  bgColour = bgSlider.value(); //get value from slider
  background(bgColour); //uses slider value as greyscale colour value for bg
  
  // FRAME TRACKER
  textSize(24);
  textStyle(NORMAL);
  text(Math.ceil(mouseX)+' '+Math.ceil(mouseY), 20,780); //Math.ceil() rounds float to nearest integer

  // TREE GENERATOR
  //treesTest(); //uncomment to see my tree objects!
  generateTrees();
  noStroke();

  // CHANGES ELEMENTS TO WHITE IF BACKGROUND TOO DARK
  if (bgColour <= 125) {
    fill(255);
    SETU_logo = SETU_light_logo;
  } else {
    fill(0);
    SETU_logo = SETU_dark_logo;
  }

  // IMAGES
  image(SETU_logo, 20,0, 150,150); //SETU LOGO
  image(pfp, width-165,10, 150,150); //PROFILE IMAGE


  // CIRCLE
  onHoverCircle(); //sets fill colour to random on hover
  myCircle = circle(circleX,circleY,circleSize);
  keyPressed(); //move functions upon W,A,S,D pressed on canvas
} //end draw()


/* CUSTOM FUNCTIONS */

function keyPressed() {
  //key binding
  if ((key === 'w') || (key === 'W') || (keyCode === UP_ARROW)) {
    moveUp();
  }
  if ((key === 'a') || (key === 'A') || (keyCode === LEFT_ARROW)) {
    moveLeft();
  }
  if ((key === 's') || (key === 'S') || (keyCode === DOWN_ARROW)) {
    moveDown();
  }
  if ((key === 'd') || (key === 'D') || (keyCode === RIGHT_ARROW)) {
    moveRight();
  }
} //end keyPressed()


function moveRight() {
  circleX+=speed; //increase x value
  
  //if x is beyond border, move back in
  if (circleX>=width-(circleSize/2)+speed) {
    circleX=width-(circleSize/2);
  } //end if

} //end moveRight()


function moveLeft() {
  circleX-=speed; //decrease x value
  
  //if x is beyond border, move back to zero
  if (circleX<=(circleSize/2)-speed) {
    circleX=(circleSize/2);
  } //end if

} //end moveLeft()


function moveUp() {
  circleY-=speed; //decrease y value, to be nearer to the top
  
  //if y is beyond border, move back to zero
  if (circleY<(circleSize/2)) {
    circleY=(circleSize/2);
  } //end if

} //end moveUp()


function moveDown() {
  circleY+=speed; //increase y value, to be nearer to the bottom
  
  //if y is beyond border, move back ins
  if (circleY>height-(circleSize/2)) {
    circleY=height-(circleSize/2);
  } //end if

} //end moveDown()


function onHoverCircle() {
  if ((mouseX<=circleX+(circleSize/2)) && (mouseX>=circleX-(circleSize/2)) && (mouseY<=circleY+(circleSize/2)) && (mouseY>=circleY-(circleSize/2))) {
    fill(random(255),random(255),random(255));//randomises colour
    frameChecker(200, playHoverSound); //every 15 seconds, plays sound - added to reduce lag
  } //end if
} //end onHoverCircle()


function Speedy() {
  var speedPrompt = prompt("Enter a Value:", speed); //prompt box: message, default value (speed var)

  //Only changes speed if a value was inputed, or else prompt box returns NULL
  if (speedPrompt != null) {
    var speedIn = int(speedPrompt); //convert prompt value to int
    speed = speedIn; //assign value to speed global variable
    //return speed
  } //end if
} //end Speedy()


// UTILITIES FUNCTIONS 
function playSound(soundFile) {
  if (soundFile.isLooping()) {
    soundFile.stop();
    print('Sound stopped.');
  } else if ((soundFile == testSound) && (soundFile.isPlaying())) {
    soundFile.stop();
    print('Sound stopped.');
  } else {
    soundFile.play();
    print('Sound playing...');
  }
} //end playSound()

function playHoverSound() {
  playSound(hoverSound);
} //end playHoverSound()
function playTestSound() {
  playSound(testSound);
} //end playTestSound()


function frameChecker(x,func) {
  if (frameCount % x) {
    func();
  }
} //end frameChecker()


//must use different technique to get random colour from a range, e.g. for random colour of yellow in windows
function randomFromRange(min, max) {
  /**returns random value between 0-1 multiplied by max/min input
    Math.floor converts float to nearest integer
    '+ min' allows both min and max to be included in random output **/

  return Math.floor(Math.random() * (max-min +1)) + min;
  
} //end randomFromRange()


// ADDITIONS

function treesTest() {
  var tree1 = new Spruce(500,500);
  tree1.display();
  var tree2 = new Oak(200,500);
  tree2.display();
  var tree3 = new Cypress(350,500);
  tree3.display();
  var tree4 = new Redwood(650,500);
  tree4.display();
} //end treesTest()

function generateTrees() {
  fill('#4f3e28');
  triangle(((width-platformWidth)/2),yLevel+5, (width/2),(yLevel+5+platformHeight), (width-(width-platformWidth)/2),yLevel+5); //island size from random values
  fill('#667c2c');
  rect(((width-platformWidth)/2)-2,yLevel, width-(width-platformWidth)+2, 10, 15); //grass on island

  treeDisplayArray.forEach(tree => tree.display()); //display each
} //end generateTrees()

function generateTreeValues() {
  // INITIAL VALUES
  yLevel = randomFromRange(300,700);
  platformWidth = platformSize[Math.floor(Math.random() * platformSize.length)]; //random from array
  platformHeight = randomFromRange(30,120);
  treeArray = []; //codes for types of tree
  treeDisplayArray = [];
  treeBuffer = 100;

  // DISPLAY STATS
  print('Island size: '+platformWidth);
  print('Trees possible: '+((platformWidth-100)/100));

  // ASSIGN TREE TYPES
  for (var i=0; i<((platformWidth-100)/100); i++) {
    treeArray[i] = randomFromRange(0,3); //pick one of 4 tree object options
  } //end for
  
  // ASSIGN TREE OBJECTS AND CO-ORDS
  for (i in treeArray) {
    let startX = (width - platformWidth) / 2 + treeBuffer;
    if (treeArray[i] === 0) {
      treeDisplayArray.push(new Spruce(startX, yLevel));
    } else if (treeArray[i] === 1) {
      treeDisplayArray.push(new Oak(startX, yLevel));
    } else if (treeArray[i] === 2) {
      treeDisplayArray.push(new Cypress(startX, yLevel));
    } else if (treeArray[i] === 3) {
      treeDisplayArray.push(new Redwood(startX, yLevel));
    } //end if
    treeBuffer += 100; // Increase buffer for next tree
  } //end for
  
  // DISPLAY TREE TYPES
  //print(treeArray); //tree types as values 0-3
  print(treeDisplayArray);
} //end generateTreeValues()