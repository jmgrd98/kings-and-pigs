export default class Player {
    constructor(ctx, canvas) {  // Accept the context and canvas as parameters
        this.ctx = ctx;
        this.canvas = canvas;
        this.position = {
            x: 100,
            y: 100
        }

        this.width = 100;
        this.height = 100;
        this.sides = {
            bottom: this.position.y + this.height,
            right: this.position.x + this.width,
            left: this.position.x,
            top: this.position.y
        }
    }

    draw() {
        this.ctx.fillStyle = 'red';
        this.ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update() {
        if (this.sides.bottom < this.canvas.height) {  // Use the canvas passed to the class
            this.position.y++;
            this.sides.bottom = this.position.y + this.height;
        }
    }
}
