//Author: Amelie McCarthy
//Date: 12-9-2024
//Purpose of program: Lab 1 Exercise 3

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(999);
  
  fill(color(180,165,105)); //change colour to gold
  noStroke(); //remove border
  
  //center circles
  circle(425,300, 150);
  fill(color(999)); //fill inner circle white
  circle(425,300, 115);

  fill(color(180,165,105)); //reset colour
  
  //cross shape
  rect(400,200,50,300); //vertical rectangle, extended by 100 in height
  rect(325,275, 200,50); //horizontal rectangle, meeting at centerpoints
  
  //remove circles at corners of cross
  fill(color(999)); //fill circles white
  circle(400,275, 20); //circle 1, of radius 20
  circle(400,325, 20); //circle 2
  circle(450,275, 20); //circle 3
  circle(450,325, 20); //circle 4

}