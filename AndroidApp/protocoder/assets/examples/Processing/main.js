/*
*	Processing example 
*   The usage its pretty similar to the original processing, just prepend 
*   the processing (p.) object to the methods to access them ie. p.rect  
*
*/

var processing = ui.addProcessing(0, 0, 500, 500);

var x = 100; 
var size;
var c; 
var count = 0.0;

processing.setup(function(p) {
    p.size(192, 157); 
    p.background(0); 
    p.frameRate(25);
    c = 100;
});

processing.draw(function(p) { 
    p.fill(0, 20);
    p.rect(0, 0, p.width, p.height);
    p.noStroke();
    p.fill(255);
    
    size = p.mouseX / 10;
    for(var i = 20; i < p.width - 20; i+=10 ) {
        p.ellipse(i, p.height / 2 - 100+ p.mouseY + x * p.sin(count + i), size, size);
    }
    count += 0.1;
});