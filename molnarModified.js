var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var size = window.innerWidth;
var dpr = window.devicePixelRatio;
canvas.width = size * dpr;
canvas.height = size * dpr;
ctx.scale(dpr, dpr);

// Draw a randomized pattern on the screen
ctx.lineWidth = 4;
ctx.lineCap = 'round';
var step = 20;

// Set RBG values for drawing a purple gradient
var base_r = 226;
var base_g = 224;
var base_b = 255;

var max_r = 37;
var max_g = 32;
var max_b = 107;


function draw(x, y, width, height, positions) {
    ctx.save();
    // Move to the (x, y) position.
    ctx.translate(x + width/2, y + height/2);
    
    // Rotate a bit at random.
    ctx.rotate(Math.random() * 5);
    
    // Re-center.
    ctx.translate(-width/2, -height/2);
    

    for(var i = 0; i <= positions.length; i++) {
        ctx.beginPath();
        ctx.moveTo(positions[i] * width, 0);
        ctx.lineTo(positions[i] * width, height);
        ctx.stroke();
    }
    ctx.restore();
}

// Let's use a variable to represent a third of the canvas size for convenience.
var aThirdOfHeight = size/3;

colorCount = 0;

for(var y = step; y < size - step; y += step) {
    colorCount++;
    // Set color
    console.log("step = ", y);
    ctx.strokeStyle = `rgb(
        ${Math.floor(base_r - ((base_r - max_r) / (colorCount/step)))},
        ${Math.floor(base_g - ((base_g - max_g) / (colorCount/step)))},
        ${Math.floor(base_b - ((base_b - max_b) / (colorCount/step)))}`;
    console.log("strokeStyle = " + ctx.strokeStyle);

    for(var x = step; x < size - step; x += step) {
        // If we're in the first third...
        if(y < aThirdOfHeight) {
            draw(x, y, step, step, [0.5]);

        // If we're in the second third...
        } else if(y < aThirdOfHeight * 2) {
            draw(x, y, step, step, [0.2, 0.8]);
        
        // For the final third...
        } else {
            draw(x, y, step, step, [0.1, 0.5, 0.9]);
        }
    }
}
