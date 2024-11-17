//Author: Amélie McCarthy
//Date: 15/11/24
//Purpose: Assignment 2

//TODO: Add other creative ideas

/* VARIABLE DECLARATIONS */

var bgColour, bgSlider, bgSliderText, bgSliderDiv;
var circleX,circleY,circleSize, myCircle;
var speed, speedBtn, canvasMenu;
var testAudio;
var SETU_logo;
var frameCount;


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
  console.log('Frame count: '+frameCount);

  // SLIDER VALUE == BACKGROUND
  bgColour = bgSlider.value(); //get value from slider
  background(bgColour); //uses slider value as greyscale colour value for bg
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


function doubleClicked(event) {
  //if ((mouseX<=circleX+(circleSize/2)) && (mouseX>=circleX-(circleSize/2)) && (mouseY<=circleY+(circleSize/2)) && (mouseY>=circleY-(circleSize/2))) {
  if ((mouseX<=width) && (mouseX>=width-150) && (mouseY<=160) && (mouseY>=10)) {
    print('yes');
    rect(100,100,100,100);
  }

  //check if working
  console.log(event);
} //end doubleClicked() 


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
    print('boundary');
    fill(random(255),random(255),random(255));
    frameChecker(200, playHoverSound); //very 15 seconds, plays sound - added to reduce lag
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


function playSound(soundFile) {
  if (soundFile.isLooping()) {
    soundFile.stop();
    print('sound stopped');
  } else if ((soundFile == testSound) && (soundFile.isPlaying())) {
    soundFile.stop();
    print('sound stopped');
  } else {
    soundFile.play();
    print('sound playing...');
  }
}

function playHoverSound() {
  playSound(hoverSound);
}
function playTestSound() {
  playSound(testSound);
}


function frameChecker(x,func) {
  if (frameCount % x) {
    func();
  }
}