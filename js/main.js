console.log("hey");

// first reference is to movement tag
let movementDisplay = document.getElementById("movement");

// canvas
let game = document.getElementById("game");
// set some canvas configs
game.setAttribute("height", 400);
game.setAttribute("width", 800);

// context
let ctx = game.getContext("2d");

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
    this.render = function () {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }
}

// character refs
let ogre = new Crawler(300, 100, 80, 120, "chartreuse");
let hero = new Crawler(200, 100, 50, 50, "hotpink");


// checking for any over lap of hero onto ogre
function detectHit() {
    if (hero.x + hero.w > ogre.x &&
        hero.x < ogre.x + ogre.w &&
        hero.y + hero.h > ogre.y &&
        hero.y < ogre.y + ogre.h) {
        console.log("💥collision💥");
        ogre.alive = false;
    }
}

// game loop
function gameLoop() {
//    clear canvas
    ctx.clearRect(0, 0, game.width, game.height);
//    display x y co-ords of hero to DOM
    movementDisplay.textContent = `x: ${hero.x} & y: ${hero.y}`;
//    check if ogre is alive
    if (ogre.alive) {
        ogre.render();
        detectHit();
    }
//    render hero
    hero.render();
}

// movement
// w: 87 a: 65 s: 83 d:68
function movementHandler(e) {
//    user presses W,
    switch (e.keyCode) {
        // W keypress moves up
        case (87):
            if (hero.y > 0) hero.y -= 10;
            break;
        //    S keypress moves down
        case (83):
            if (hero.y + hero.h < game.height) hero.y += 10;
            break;
        //    A keypress moves left
        case (65):
            if (hero.x > 0) hero.x -= 10;
            break;
        //    D keypress right
        case (68):
            if (hero.x + hero.w < game.width) hero.x += 10;
            break;
        default:
            console.log("something is wrong with keypress");
    }
}

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

document.addEventListener("keydown", movementHandler);

let runGame = setInterval(gameLoop, 60);