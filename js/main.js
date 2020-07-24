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
// ctx.fillStyle = "white";
// set line color
// ctx.strokeStyle = "red";
// set line width
// ctx.lineWidth = 5;
// call the fillRect to draw the fill square
// ctx.fillRect(10, 10, 100, 100);
// call strokeRect to draw the line rectangle
// ctx.strokeRect(10, 10, 100, 100);

// drawBox func
function drawBox(x, y, size, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, size, size);
}

// crawler constructor function
function Crawler(x, y, w, h, color) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color;
    this.alive = true;
    this.render = function() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }
}

// character refs
let ogre = new Crawler(300, 100, 80, 120, "chartreuse");
let hero = new Crawler(20, 100, 50, 50, "hotpink");

// shows green ogres where you click
game.addEventListener("click", (e) => {
    // clear game board
    ctx.clearRect(0, 0, game.width, game.height);
    //make sure hero renders
    hero.render();
    // move ogre
    ogre.x = e.offsetX;
    ogre.y = e.offsetY;
    // render ogre
    ogre.render();
});

