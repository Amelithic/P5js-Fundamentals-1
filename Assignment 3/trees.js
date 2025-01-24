function xmasTree(x,y) {
    this.x = x;
    this.y = y;

    var treeHeight = 140;
    var treeWidth = 10;

    this.display = function() {
        fill(treeStumpColour);
        rect(x, y-treeHeight, treeWidth,treeHeight); //x,y,width,height

        fill(treeLeaves1);
        triangle(x-48,y-40, x+(treeWidth/2),y-95, x+53,y-40);
        fill(treeLeaves2);
        triangle(x-36,y-70, x+(treeWidth/2),y-115, x+41,y-70);
        triangle(x-24,y-100, x+(treeWidth/2),y-135, x+29,y-100);
        fill(treeLeaves3);
        triangle(x-16,y-125, x+(treeWidth/2),y-155, x+21,y-125);
        
        //baubles
        fill(randomFromRange(50,255),randomFromRange(50,255),randomFromRange(50,255));
        circle(randomFromRange(x-45,x+47),randomFromRange(y-45,y-80), 5); //bottom section
        circle(randomFromRange(x-32,x+35),randomFromRange(y-75,y-100), 5); //middle section
        circle(randomFromRange(x-20,x+25),randomFromRange(y-105,y-120), 5); //middle section
        circle(randomFromRange(x-12,x+19),randomFromRange(y-120,y-140), 5); //top section
    } //end this.display()
} //end xmasTree()