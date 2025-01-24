//Author: Amélie McCarthy
//Date: 2-10-24
//Purpose: Demonstration of for loops

var x;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
  
  // Counts 1-10
  for (x=1; x<=10; x++) {
    console.log(x);
  }
  
  // Counts 10-1
  for (x=10; x>=1; x--) {
    console.warn(x);
    
    //test:
    
    textSize(20);
    text(x+20,x*10,x);
  }
  
  // Counts in increments of 2
  for (x=0; x<=10; x+=2) {
    console.error(x);
  }

  ellipse(200,200,200,200);
  noLoop();
}