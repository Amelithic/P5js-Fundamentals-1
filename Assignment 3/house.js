//Author: Amélie McCarthy
//Date: 2/12/24
//Purpose: House templates


// Individual elements
function buildWindow(x,y,w,h,colour) {
    fill(windowColour);
    rect(x,y,w,h); //window

    strokeWeight(2); //window bars
    stroke(colour);
    line(x,y+(h/2), x+w,y+(h/2));
    line(x+(w/2),y, x+(w/2),y+h);
    //window frame
    line(x,y, x+w,y);
    line(x,y+h, x+w,y+h);
    line(x,y, x,y+h);
    line(x+w,y, x+w,y+h);
    noStroke();
}

// Houses

function House1(x,y) {
    this.x = x;
    this.y = y;

    var houseHeight = 120;
    var houseWidth = 150;
    this.width = houseWidth;

    this.display = function() {
        fill(baseColour1); //base shape
        rect(x,(y-houseHeight), houseWidth,houseHeight);

        fill(shadowColour1); //shadow
        rect(x, (y-houseHeight), 5,houseHeight);
        rect((x+houseWidth)-20,(y-houseHeight)-40, 10,40); //chimney stem
        fill(accentColour1);
        rect((x+houseWidth)-23,(y-houseHeight)-40, 16,6); //chimney top

        fill(roofColour1); //roof
        triangle(x,(y-houseHeight), x+(houseWidth/2),(y-houseHeight)-50, x+houseWidth,(y-houseHeight));

        buildWindow(x+30,(y-houseHeight)+30,40,40,roofColour1); //window

        fill(accentColour1);
        rect((x+houseWidth)-60,y-70, 40,70); //door
        fill(roofColour1);
        circle((x+houseWidth)-56,y-40, 5); //door knob
    } //end this.display()
} //end House1()

function House2(x,y) {
    this.x = x;
    this.y = y;

    var houseHeight = 180;
    var houseWidth = 150;
    this.width = houseWidth;

    this.display = function() {
        fill(baseColour2); //base shape
        rect(x,(y-houseHeight), houseWidth,houseHeight);

        fill(shadowColour2); //shadow
        rect(x, (y-houseHeight), 5,houseHeight);
        rect((x+houseWidth)-20,(y-houseHeight)-40, 10,40); //chimney stem
        fill(accentColour2);
        rect((x+houseWidth)-23,(y-houseHeight)-40, 16,6); //chimney top

        fill(roofColour2); //roof
        triangle(x,(y-houseHeight), x+(houseWidth/2),(y-houseHeight)-50, x+houseWidth,(y-houseHeight));

        buildWindow(x+15,(y-houseHeight)+30,50,35,roofColour2); //window
        buildWindow((x+houseWidth)-65,(y-houseHeight)+30,50,35,roofColour2); //window
        buildWindow(x+15,y-60,50,35,roofColour2); //window

        fill(accentColour2);
        rect((x+houseWidth)-60,y-70, 40,70); //door
        fill(roofColour2);
        circle((x+houseWidth)-56,y-40, 5); //door knob
    } //end this.display()
} //end House2()

function House3(x,y) {
    this.x = x;
    this.y = y;

    var houseHeight = 140;
    var houseWidth = 150;
    this.width = houseWidth;

    this.display = function() {
        fill(baseColour3); //base shape
        rect(x,(y-houseHeight), houseWidth,houseHeight);

        fill(shadowColour3); //shadow
        rect(x, (y-houseHeight), 5,houseHeight);
        rect((x+houseWidth)-20,(y-houseHeight)-40, 10,40); //chimney stem
        fill(accentColour3);
        rect((x+houseWidth)-23,(y-houseHeight)-40, 16,6); //chimney top

        fill(roofColour3); //roof
        triangle(x,(y-houseHeight), x+(houseWidth/2),(y-houseHeight)-65, x+houseWidth,(y-houseHeight));

        buildWindow(x+15,(y-houseHeight)+40,30,70,roofColour3); //window
        buildWindow((x+houseWidth)-45,(y-houseHeight)+40,30,70,roofColour3); //window


        fill(accentColour3);
        rect((x+houseWidth/2)-20,y-70, 40,70); //door
        fill(roofColour3);
        circle((x+houseWidth/2)-16,y-40, 5); //door knob
    } //end this.display()
} //end House3()
