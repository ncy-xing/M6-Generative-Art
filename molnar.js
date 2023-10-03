var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var size = window.innerWidth;
var dpr = window.devicePixelRatio;
canvas.width = size * dpr;
canvas.height = size * dpr;
ctx.scale(dpr, dpr);


// Make a blue rectangle!
// ctx.fillStyle = "blue";
// ctx.fillRect(15, 20, 50, 200);

// Draw a randomized pattern on the screen
ctx.lineWidth = 4;
ctx.lineCap = 'round';
var step = 20;


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


for(var y = step; y < size - step; y += step) {
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
