//Author: Amélie McCarthy
//Date: 20/11/24
//Purpose: Assignment 3 - Main file

// PERSONAL ADDITIONS:
// - Colour themes: when it's night, use different colour variables
// - Multiple house templates
// - Multiple car templates (and headlights that only show at night!)
// - Multiple snowman types
// - Spawn layers: house in back, then trees, then snowman, then road with cars
// - Cars have a chance to spawn randomnly each cycle
// - Sun and moon pass behind mountain background!
// - Bottom-left has text to track the frame count and the co-ordinates of the mouse
// - Template files for each element, including one for the static and dynamic colour themes!
// - Custom CSS styling for HTML file


/* VARIABLE DECLARATIONS */
var frameCount;
var day; //day/night state
var bg_img, fg_img; //day/night version
var moonX, moonY; //moon coords
var yLevel, houseArray, treeArray, snowmanArray; //street variables for houses
var carX, carY, car, carTypes; //car variables


/* DEFAULT FUNCTIONS */

function preload() {
  moon = loadImage('images/moon.png');
  sun = loadImage('images/sun.png');

  bg_day = loadImage('images/background-day.png');
  bg_night = loadImage('images/background-night.png');
  fg_day = loadImage('images/foreground-day.png');
  fg_night = loadImage('images/foreground-night.png');
}


function setup() {
  createCanvas(1200,800);

  // DEFAULT VARS
  frameCount = 1;
  day = true;
  moonY = 200;
  carX = -300;
  carY = 725;
  car = new Car1(carX,carY); //default is red car

  generateStreetValues();
  
  if (day==true) {
    moonX = width+300;
  } else {
    moonX = width+120;
  }

} //end setup()


function draw() {
  // sets background image based on day/night cycle
  if (day==true) {
    bg_img = bg_day;
  } else if (day==false) {
    bg_img = bg_night;
  }
  background(bg_img);
  frameCount++; 

  
  //Function call - makes moon cross the screen + daylight cycle
  moonMoving();

  // sets foreground image based on day/night cycle
  if (day==true) {
    fg_img = fg_day;
  } else if (day==false) {
    fg_img = fg_night;
  }
  image(fg_img, 0,0, width,height);

  //sets dynamic colour variables
  setVars();

  //displays all objects on street
  noStroke();
  showStreet();

  //controls car moving functions
  spawnCars();

  // FRAME COUNT TRACKER
  fill('white');
  textSize(24);
  textStyle(NORMAL);
  text(frameCount, 20,755);

  // FRAME CO-ORDS TRACKER
  text(Math.ceil(mouseX)+' '+Math.ceil(mouseY), 20,780);
} //end draw()


/* CUSTOM FUNCTIONS */

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

function moonMoving() {
  //check day/night state
  if (day==true) {
    image(sun, moonX,moonY, 350,350);
  } else {
    image(moon, moonX,moonY, 120,120);
  }

  
  //move X to right
  moonX-=1.5;

  //checks: 1. Moon rising/lowering, 2. If moon @ canvas boundary, reset and set to opposite day/night state
  if (moonX>=(width/2)-(350/2)) { //width/2 + half image size
    print(`x is above or equal ${width/2}`);
    moonY-=0.4;
  } else if (moonX<(width/2)-(350/2)) {
    print(`x is less than ${width/2}`);
    moonY+=0.4;

    if (moonX==-300) {
      //checking whether it's night/day
      if (day==true) {
        day = false;
        print('Night begins...');
        moonX=width+120; //resets X
        moonY=200;

      } else if (day==false) {
        day = true;
        print('Day begins...');
        moonX=width+300; //resets X
        moonY=400;

      } //end if 3
    } //end if 2
  }//end if

} //end moonMoving()

function showStreet() {
  //make street flat
  fill(snowColour); //snow
  rect(0,650, width,150);
  fill(roadColour); //road
  rect(0,700, width,100);
  fill(roadMarkColour);
  rect(0,750, width,2);

  houseArray.forEach(house => print(house)); //print each
  houseArray.forEach(house => house.display()); //display each

  treeArray.forEach(tree => tree.display()); //display each
  snowmanArray.forEach(snow => snow.display()); //displays each
} //end showStreet()

function generateStreetValues() {
  // INITIAL VALUES
  yLevel = 650;
  houseArray = [];
  treeArray = [];
  snowmanArray = [];
  let houseBuffer = 50;

  // ASSIGN HOUSES TO ARRAY
  for (var i=0; i<7; i++) {
    let startX = houseBuffer; //sets x value of house
    let currentHouseTypes = [new House1(startX, yLevel), new House2(startX, yLevel), new House3(startX, yLevel)];

    houseArray[i] = currentHouseTypes[Math.floor(Math.random() * currentHouseTypes.length)]; //pick random house type
    houseBuffer += 160; // Increase buffer for next house
  } //end for
  
  for (i=0; i<3; i++) {
    treeArray[i] = new xmasTree(randomFromRange(100,1100),randomFromRange(660,680));
  }
  for (i=0; i<3; i++) {
    let snowmanX = randomFromRange(100,1100); //random within canvas
    let snowmanY = randomFromRange(680,695); //below street level
    //1 in 3 chance of spawning with hat, scarf, or blank
    let snowmanTypes = [new snowman(snowmanX,snowmanY), new snowmanWithScarf(snowmanX,snowmanY), new snowmanWithHat(snowmanX,snowmanY)];
    
    snowmanArray[i] = snowmanTypes[Math.floor(Math.random() * snowmanTypes.length)]; //pick random snowman type
  }
  print(houseArray);
  print(treeArray);
  print(snowmanArray);
} //end generateStreetValues()

function generateNewCar() {
  carTypes = [new policeCar(carX,carY), new Car1(carX,carY), new Car2 (carX,carY)];
  car = carTypes[Math.floor(Math.random() * carTypes.length)]; //pick random car type
  print(car);
}

function spawnCars() {
  car.x += 5; // Move car to the right
  car.display(); // Update car display at new position

  // Reset car position and regenerate a new car when it moves out of canvas
  if (car.x > width) {
    car.x = -300;
    generateNewCar(); // Assign a new car type
  }
}
