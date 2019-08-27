var robot = require("robotjs");

const minLoopInterval = 15000;
const maxLoopInterval = 300000;

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function moveRandomly() {
    var moves = ["w", "a", "s", "d"];
    shuffle(moves);
    for (let i=0; i<moves.length; i++) {
        robot.keyTap(moves[i]);
    }
}

var isReady = true;
setInterval(() => {
    if (isReady) {
        isReady = false;
        setTimeout(() => {
            moveRandomly();
            isReady = true;
        }, getRandomInteger(minLoopInterval, maxLoopInterval))
    }
}, 5000)
