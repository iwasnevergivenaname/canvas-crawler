console.log("hey");

// first reference is to movement tag
let movementDisplay = document.getElementById("movement");

// canvas
let  game = document.getElementById("game");
// set some canvas configs
game.setAttribute("height", 400);
game.setAttribute("width", 800);

// context
let ctx = game.getContext("2d");
// draw a box
// set a fill color
ctx.fillStyle = "white";
// set line color
ctx.strokeStyle = "red";
// set line width
ctx.lineWidth = 5;
// call the fillRect to draw the fill square
ctx.fillRect(10, 10, 100, 100);
// call strokeRect to draw the line rectangle
ctx.strokeRect(10, 10, 100, 100);

// drawBox func
function drawBox(x, y, size, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, size, size);
}
drawBox(200, 100, 200, "hotpink");
