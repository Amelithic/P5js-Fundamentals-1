function Spruce(x,y) {
    this.x = x;
    this.y = y;

    var treeHeight = 140;
    var treeWidth = 10;

    this.display = function() {
        fill('#432a0b');
        rect(x, y-treeHeight, treeWidth,treeHeight); //x,y,width,height

        fill('#1e4222');
        triangle(x-48,y-40, x+(treeWidth/2),y-95, x+53,y-40);
        fill('#2f5333');
        triangle(x-36,y-70, x+(treeWidth/2),y-115, x+41,y-70);
        triangle(x-24,y-100, x+(treeWidth/2),y-135, x+29,y-100);
        fill('#3f6444');
        triangle(x-16,y-125, x+(treeWidth/2),y-155, x+21,y-125);


    } //end this.display()
} //end Spruce()

function Oak(x,y) {
    this.x = x;
    this.y = y;

    var treeHeight = 80;
    var treeWidth = 15;

    this.display = function() {
        fill('#885318');
        rect(x, y-treeHeight, treeWidth,treeHeight); //x,y,width,height

        fill('#556d1d');
        ellipse(x-20+(treeWidth/2),y-75, 50,50);
        ellipse(x+20+(treeWidth/2),y-75, 50,50);
        fill('#667c2c');
        ellipse(x-35+(treeWidth/2),y-60, 40,40);
        ellipse(x+35+(treeWidth/2),y-60, 40,40);
        ellipse(x+(treeWidth/2),y-85, 60,60);
        fill('#778b3b');
        ellipse(x+(treeWidth/2),y-50, 60,40);

    } //end this.display()
} //end Oak()

function Cypress(x,y) {
    this.x = x;
    this.y = y;

    var treeHeight = 50;
    var treeWidth = 10;

    this.display = function() {
        fill('#4f3e28');
        rect(x, y-treeHeight, treeWidth,treeHeight); //x,y,width,height

        fill('#306329');
        ellipse(x+(treeWidth/2),y-65, 60,50);
        fill('#41743a');
        ellipse(x+(treeWidth/2),y-85, 50,50);
        fill('#52854b');
        ellipse(x+(treeWidth/2),y-110, 30,35);
        ellipse(x+(treeWidth/2),y-130, 10,15);



    } //end this.display()
} //end Cypress()

function Redwood(x,y) {
    this.x = x;
    this.y = y;

    var treeHeight = 175;
    var treeWidth = 15;

    this.display = function() {
        fill('#5e3d13');
        rect(x, y-treeHeight, treeWidth,treeHeight); //x,y,width,height

        fill('#3b4b13');
        triangle(x-48+(treeWidth/2),y-120, x+(treeWidth/2),y-150, x+48+(treeWidth/2),y-120);
        fill('#4a5a24');
        triangle(x-40+(treeWidth/2),y-140, x+(treeWidth/2),y-165, x+40+(treeWidth/2),y-140);
        triangle(x-32+(treeWidth/2),y-160, x+(treeWidth/2),y-185, x+32+(treeWidth/2),y-160);
        fill('#596935');
        triangle(x-24+(treeWidth/2),y-180, x+(treeWidth/2),y-205, x+24+(treeWidth/2),y-180);
        triangle(x-16+(treeWidth/2),y-200, x+(treeWidth/2),y-215, x+16+(treeWidth/2),y-200);

    } //end this.display()
} //end Redwood()