let player;
let player2;

function setup() {
    createCanvas(innerWidth, innerHeight);
    player = new Player(width/4 * 3, height/2);

    player2 = new Player(width/4, height/2, [240, 25, 25,], [200, 50, 50], {
        up:    87,
        down:  83,
        left:  65,
        right: 68
    });
}

function draw() {
    background(51);

    player.inputs();
    player.collision(player2);
    player.move();
    player.draw();

    player2.inputs();
    player2.collision(player);
    player2.move();
    player2.draw();
}