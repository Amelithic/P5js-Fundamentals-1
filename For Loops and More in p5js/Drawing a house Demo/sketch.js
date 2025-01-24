//Author: Amélie McCarthy
//Date: 19-09-24
//Purpose: Using functions to modularise code & draw images

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

//other
var x; //mouse click count var
var skip; // skip button

//test
//array test
//var skip_styling = [color:'roof_colour',
 //                  font-style:'italic']
//print(skip_styling);


function setup() {
  createCanvas(800, 800);
  
  //note: p5js doesn't seem to recognise global variable values unless assigned in setup
  house_colour = color('#FAEBD7');
  house_colour_shadow = color('#e6d3ba');
  roof_colour = color('#7e95a9');
  sky_colour = color('#cfedef');
  grass_colour = color('#aec494')
  car_colour = color('#CD5C5C');
  wheel_colour = color('#51585f');
  tree_bark = color('#7c6454');
  tree_leaves = color('#7bad74');
  x = 0;
  
  //Skip to all elements being visible
  fill(roof_colour);
  textStyle(ITALIC);
  skip = createButton('Skip').position(650,40);
  
  //CSS styling, can only change one value per style()
  skip.style('color',roof_colour);
  skip.style('font-style','italic');
  skip.style('font-size','20px');
  skip.style('background','none')
  skip.style('border','none');
  
  //error:
  //skip.mousePressed(maxElements()); 
}

function draw() {  
  //background
  strokeWeight(0);
  strokeCap(SQUARE);
  background(sky_colour);
  fill(grass_colour);
  rect(0,500, 800,300);
  
  //message on top of screen
  fill(wheel_colour);
  textSize(24);
  textStyle(NORMAL);
  text('Click the canvas to make each element appear!', 50,60);
    

  
  
  //used a global x variable to count mouse clicks, one item added each time mouse is clicked
  //note: inefficient
  if ((x==1) || (x==2) || (x==3) || (x>=4)) {
    house();
  }
  if ((x==2) || (x==3) || (x>=4)) {
    car();
  } 
  if ((x==3) || (x>=4)) {
    tree();
  } 
  if (x>=4) {
    snowman();
  } //end if

}


function mouseClicked() {
  x += 1;
  print(`Click count: ${x}`); //template string to print click count, an alternative to concatenated string and var
}

//function for button to skip to when all elements visible (click count 4)
function maxElements() {
  x = 4;
  print(`Click count was forced set to ${x} (max).`)
}


//Functions for each element:
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
  fill(car_colour);
  rect(420,420,50,80);
  fill(wheel_colour);
  circle(460,460,8);
  
  //windows
  stroke(roof_colour);
  strokeWeight(2);
  fill(sky_colour);
  square(330,340,50); //window 1
  square(420,340,50); //window 2
  square(330,420,50); //window 3
  
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
}

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
}

function tree() {
  fill(tree_bark);
  rect(100,400, 20,100);
  fill('#56463b');
  rect(100,400, 8,100);
  
  fill(tree_leaves);
  ellipse(70,400, 60, 60);
  ellipse(150,400, 60, 60);
  ellipse(110,390, 90, 110);
}

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
}