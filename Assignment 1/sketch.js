//Author: Amélie McCarthy
//Date: 7-10-24
//Purpose: Assignment 1


// VARIABLES

//colour variables, must declare outside of function to make global
var house_colour;
var house_colour_shadow;
var roof_colour;
var sky_colour;
var grass_colour;
var car_colour;
var wheel_colour;
var tree_bark;
var tree_leaves;
var spaceship_colour;
var windowRandomColour;
var SlowedFrameRate;

//other
var clicks; //mouse click count var
var skip; // skip button
var clouds; //amount of cloud circles
var doorX, doorY; //door coordinates var
var day; //day/night state
var bg_img; //day/night version
var moonX, moonY; //moon coords

//rect coords
var x, y, l, w;




// MAIN FUNCTIONS

function preload() {
  moon = loadImage('images/moon.png');
  sun = loadImage('images/sun.png');

  bg_img_day = loadImage('images/field.png');
  bg_img_night = loadImage('images/field-night.png');

} //end preload()


function setup() {
  createCanvas(800, 800);
  
  //note: p5js doesn't seem to recognise global variable values unless assigned in setup
  //assign variable values
  house_colour = color('#FAEBD7');
  house_colour_shadow = color('#e6d3ba');
  roof_colour = color('#7e95a9');
  sky_colour = color('#cfedef');
  grass_colour = color('#aec494')
  car_colour = color('#CD5C5C');
  wheel_colour = color('#51585f');
  tree_bark = color('#7c6454');
  tree_leaves = color('#7bad74');
  spaceship_colour = color('#df303d');
  windowRandomColour = color(randomFromRange(220,255), randomFromRange(180,255), randomFromRange(65,185)); //initial colour value
  SlowedFrameRate = 1;
  clicks = 0;
  
  //rect coords
  x = 550;
  y = 650;
  l = 200; //length
  w = 100; //width

  //default state of day/night cycle
  day = false;
  moonY = 200;
  
  if (day==true) {
    moonX = -300;
  } else {
    moonX = -120;
  }
  
  
} //end setup()


function draw() {  
  strokeWeight(0);
  strokeCap(SQUARE);
  
  // function that runs processes that must only happen @ framerate divisions
  frameChecker();

  // sets background image based on day/night cycle
  if (day==true) {
    bg_img = bg_img_day;
  } else if (day==false) {
    bg_img = bg_img_night;
  }
  background(bg_img);

  //Function call - makes moon cross the screen + daylight cycle
  moonMoving();
  
  // BACKGROUND COMPONENTS
  house();
  car();
  tree();
    
  //moving rectangle
  noStroke();
  fill(155, 225, 135, 150);
  rect(x,y,l,w);
  //move functions upon W,A,S,D pressed on canvas
  keyPressed();

  // FOREGROUND COMPONENTS
  displayClouds();
  snowman();
  spacecraft();

  //nightime sets overlay
  if (day==false) {
    fill(39,27,74,60);
    rect(0,0,800,800);
  }
    
  //message on top of screen
  fill(255);
  textSize(24);
  textStyle(NORMAL);
  text('Assignment 1 - Amélie McCarthy', 50,60);

  SlowedFrameRate ++; //this counts frames, used in if statements to run functions at divisions of this number
} //end draw()




// COMPONENT FUNCTIONS

function house() {
  fill(house_colour);
  square(300,300,200); //house
  
  stroke(house_colour_shadow);
  strokeWeight(8);
  line(302,300,300,500); //shadow
  
  strokeWeight(0);
  fill(roof_colour);
  triangle(300,300, 400,200, 500,300); //roof
  
  //door
  doorX=420;
  doorY=420;

  if ((mouseX>doorX) && (mouseX<doorX+50) && (mouseY>doorY) && (mouseY<doorY+80)) {
    //open door
    fill(wheel_colour);
    rect(doorX,doorY,50,80);
    windows(windowRandomColour);
  } else {
    //closed door
    fill(car_colour);
    rect(doorX,doorY,50,80);
    
    //show doorknob
    fill(wheel_colour);
    circle(460,460,8);

    windows(sky_colour);
  }
  
  //window bars
  line(355,340,355,390); //window 1 - vertical
  line(330,365,380,365); //window 1 - horizontal
  
  line(445,340,445,390); //window 2 - vertical
  line(420,365,470,365); //window 2 - horizontal
  
  line(355,420,355,470); //window 3 - vertical
  line(330,445,380,445); //window 3 - horizontal
  
  //chimney
  strokeWeight(0);
  fill(house_colour);
  quad(450,250, 475,275, 475,220, 450,220); //chimney stem
  fill(house_colour_shadow);
  rect(442,220, 40,5); //chimney top
} //end house()


function car() {
  angleMode(DEGREES);
  fill(car_colour);
  arc(600,485, 100,100, 180,360); //main shell
  fill(sky_colour);
  arc(600,485, 90,90, 270,360); //car window 1
  arc(590,485, 60,80, 180,270); //car window 2
  fill(car_colour);
  rect(530,465, 150,30, 25); //boot
  
  fill(wheel_colour);
  circle(560,495, 30); //wheel 1
  circle(650,495, 30); //wheel 2
  
  strokeWeight(2);
  line(565,450, 550,445); //car antenna
  strokeWeight(0);
} //end car()


function tree() {
  fill(tree_bark);
  rect(100,400, 20,100);
  fill('#56463b');
  rect(100,400, 8,100);
  
  fill(tree_leaves);
  ellipse(70,400, 60, 60);
  ellipse(150,400, 60, 60);
  ellipse(110,390, 90, 110);
} //end tree()


function snowman() {
  strokeWeight(2);
  fill(255);
  stroke('#94b0b0');
  circle(180,700, 120); //largest circle
  stroke('#b2caca');
  circle(180,630, 90); //medium circle
  stroke('#e0f1f1');
  circle(180,580, 60); //smallest circle
  
  strokeWeight(0);
  fill(car_colour);
  triangle(190,590, 200,590, 210,620);
  fill(wheel_colour);
  circle(180,580, 10);
  ellipse(205,580, 5,10);
} //end snowman()


function displayClouds() {
  noStroke();

  //draws 6 clouds
  for (clouds=1; clouds<=6; clouds++) {
    fill((clouds*20),(clouds*25),200, 220);
    circle(550+(30*clouds),150,60);
  }
  //draws smaller 6 clouds
  for (clouds=1; clouds<=6; clouds++) {
    fill((clouds*20),(clouds*25),200, 220);
    circle(650+(30*clouds),70,40);
  }

  //draws 5 clouds above tree
  for (clouds=1; clouds<=5; clouds++) {
    fill((clouds*20),(clouds*25),200, 220);
    circle(50+(20*clouds),300,40);
  }
  //draws 4 clouds above tree
  for (clouds=1; clouds<=4; clouds++) {
    fill((clouds*20),(clouds*25),200, 220);
    circle(5+(30*clouds),270,40);
  }

} //end displayClouds()


function spacecraft() {
  var spaceX = 170;
  var spaceY = 130;
  
  //top of spaceship
  fill(spaceship_colour);
  circle(spaceX,spaceY,80);

  //spaceship beam
  fill(0,255,230,50);
  quad(spaceX+10,spaceY+60, spaceX-10,spaceY+60, spaceX-100,spaceY+400, spaceX+100,spaceY+400);
  ellipse(spaceX, spaceY+400, 200, 35);

  fill(random(255), random(255), random(255));
  var top_circle;
  //draws top circles based on spaceship circle object
  for (top_circle=1; top_circle<=3; top_circle++) {
    circle(spaceX-50+(top_circle*25), spaceY, 20);
  }
  //draws bottom circles based on spaceship quad coords
  for (top_circle=1; top_circle<=3; top_circle++) {
    circle(spaceX-70+(top_circle*35), spaceY+60, 20);
  }

  //bottom of spaceship
  fill(spaceship_colour);
  quad(spaceX+20,spaceY+20, spaceX-20,spaceY+20, spaceX-60,spaceY+60, spaceX+60,spaceY+60);

} //end spacecraft()

function stars(starCount, starSize) {
  var z;
  for (z=1; z<=starCount; z++) {
    //print(z);
    fill(sky_colour);
    circle(randomFromRange(0,800), randomFromRange(0,450), starSize);
  }
} //end star()


// INTERACTIVE FUNCTIONS

function windows(windowState) {
  stroke(roof_colour);
  strokeWeight(2);
  fill(windowState);
  square(330,340,50); //window 1
  square(420,340,50); //window 2
  square(330,420,50); //window 3
} //end windows()


function moonMoving() {
  //check day/night state
  if (day==true) {
    image(sun, moonX,moonY-150, 350,350);
  } else {
    image(moon, moonX,moonY, 120,120);
    if (SlowedFrameRate % 20 == 0) {
      stars(15, 5);
    }
    if (SlowedFrameRate % 5 == 0) {
      stars(50, 2);
    }
  }
  
  //move X to right
  moonX++;

  //checks: 1. Moon rising/lowering, 2. If moon @ canvas boundary, reset and set to opposite day/night state
  if (moonX<=400) {
    print('x is less or equal to 400');
    moonY-=0.25;
  } else if (moonX>400) {
    print('x is above 400');
    moonY+=0.25;

    if (moonX==width+300) {
      //checking whether it's night/day
      if (day==true) {
        day = false;
        print('Night begins...');
        moonX=-120; //resets X
        moonY=200;

      } else if (day==false) {
        day = true;
        print('Day begins...');
        moonX=-300; //resets X
        moonY=300;

      } //end if 3
    } //end if 2
  }//end if

} //end moonMoving()


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
  x+=5; //increase x value
  
  //if x is beyond border, move back in
  if (x==width-l+5) {
    x=width-l;
  } //end if

} //end moveRight()


function moveLeft() {
  x-=5; //decrease x value
  
  //if x is beyond border, move back to zero
  if (x==-5) {
    x=0;
  } //end if

} //end moveLeft()

function moveUp() {
  y-=5; //decrease y value, to be nearer to the top
  
  //if y is beyond border, move back to zero
  if (y==-5) {
    y=0;
  } //end if

} //end moveUp()


function moveDown() {
  y+=5; //increase y value, to be nearer to the bottom
  
  //if y is beyond border, move back to zero
  if (y==height-w+5) {
    y=height-w;
  } //end if

} //end moveDown()


//must use different technique to get random colour from a range, e.g. for random colour of yellow in windows
function randomFromRange(min, max) {
  /**returns random value between 0-1 multiplied by max/min input
    Math.floor converts float to nearest integer
    '+ min' allows both min and max to be included in random output **/

  return Math.floor(Math.random() * (max-min +1)) + min;
  
} //end randomFromRange()


function frameChecker() {
  print(SlowedFrameRate);

  // note: default = 60fps
  // every 5 frames, sets a value for windowRandomColour var
  if (SlowedFrameRate % 30 == 0) {
    windowRandomColour = color(randomFromRange(220,255), randomFromRange(180,255), randomFromRange(65,185));
    return windowRandomColour;
  }
} //end frameChecker()