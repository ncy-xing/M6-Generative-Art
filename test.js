var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var size = window.innerWidth;
var dpr = window.devicePixelRatio;
canvas.width = size * dpr;
canvas.height = size * dpr;
ctx.scale(dpr, dpr);



// Make a blue rectangle!
ctx.fillStyle = "blue";
ctx.fillRect(15, 20, 50, 200);