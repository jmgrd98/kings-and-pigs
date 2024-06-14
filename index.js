import Player from "./js/classes/Player.js";

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

const player = new Player(ctx, canvas);

function animate() {
    window.requestAnimationFrame(animate);
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    player.draw();
    player.update();
}

animate();
