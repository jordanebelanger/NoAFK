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

function movementNameForKey(key) {
    switch(key) {
        case "w":
          return "FORWARD"
        case "a":
            return "LEFT"
        case "s":
            return "BACK"
        case "d":
            return "RIGHT"
    } 
}

function moveRandomly() {
    var moves = ["w", "a", "s", "d"];
    shuffle(moves);
    for (let i=0; i<moves.length; i++) {
        const key = moves[i]
        console.log(`MOVE ${movementNameForKey(key)}!`)
        robot.keyTap(key);
    }
}

console.log("Started random movement loop...")

var isReady = true;
setInterval(() => {
    if (isReady) {
        isReady = false;
        const nextMoveInterval = getRandomInteger(minLoopInterval, maxLoopInterval);
        console.log(`Moving randomly in ${Math.trunc(nextMoveInterval / 1000)} seconds`)
        setTimeout(() => {
            moveRandomly();
            isReady = true;
        }, nextMoveInterval)
    }
}, 5000)
