class Player {
    constructor(x, y, col=[240, 240, 25], strokecol=[200, 200, 50],
        keys={
            up:    UP_ARROW,
            down:  DOWN_ARROW,
            left:  LEFT_ARROW,
            right: RIGHT_ARROW
    }) {
        this.x = x;
        this.y = y;

        this.vx = 0;
        this.vy = 0;

        this.keys = keys;

        this.color = col;
        this.strokecolor = strokecol; 
    }

    draw() {

        stroke(this.strokecolor[0],this.strokecolor[1],this.strokecolor[2]);
        fill(this.color[0],this.color[1],this.color[2]);
        strokeWeight(3.5);
        circle(this.x, this.y, 32);

        // DEV TOOLS:
        line(
            this.x,
            this.y,
            this.x + this.vx * 16,
            this.y + this.vy * 16,
            )
    }

    collision(other) {
        let d = dist(this.x, this.y, other.x, other.y);

        if(d < 32) {
            this.vx = -this.vx;
            this.vy = -this.vy;
        }
    }
    
    move() {

        this.x = this.x + this.vx;
        this.y = this.y + this.vy;

        this.vx *= 0.95;
        this.vy *= 0.95;

        this.x = max(0,min(width-16,  this.x));
        this.y = max(0,min(height-16, this.y));


    }

    inputs() {
        if (keyIsDown) {

            if (keyIsDown(this.keys.up))    this.vy -= 0.5;
            if (keyIsDown(this.keys.down))  this.vy += 0.5;

            if (keyIsDown(this.keys.left))  this.vx -= 0.5;
            if (keyIsDown(this.keys.right)) this.vx += 0.5;
        }
    }
}