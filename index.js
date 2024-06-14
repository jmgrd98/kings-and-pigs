import Player from "./js/classes/Player.js";

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

const player = new Player(ctx, canvas);

const keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    s: {
        pressed: false
    },
    d: {
        pressed: false
    },
    arrowUp: {
        pressed: false
    },
    arrowDown: {
        pressed: false
    },
    arrowLeft: {
        pressed: false
    },
    arrowRight: {
        pressed: false
    },
}

function animate() {
    window.requestAnimationFrame(animate);
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    if (keys.d.pressed) {
        player.velocity.x = 1;
    } else if (keys.a.pressed) {
        player.velocity.x = -1;
    }

    player.draw();
    player.update();
}

animate();

window.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight' || event.key === 'd') {
        keys.d.pressed = true;
    } else if (event.key === 'ArrowLeft' || event.key === 'a') {
        keys.a.pressed = true;
    } else if (event.key === 'ArrowUp' || event.key === 'w') {

        if (player.velocity.y === 0) {
            player.velocity.y = -10;
        }

    } else if (event.key === 'ArrowDown' || event.key === 's') {
        player.velocity.y = 10;
    }
});

window.addEventListener('keyup', (event) => {
    if (event.key === 'ArrowRight' || event.key === 'd') {
        keys.d.pressed = false;
    } else if (event.key === 'ArrowLeft' || event.key === 'a') {
        keys.a.pressed = false;
    }
});
