import robot = require("robotjs")
import { getRandomInteger, shuffleArray } from "./utils/rand";

const minLoopInterval = 15000;
const maxLoopInterval = 60000;

robot.setKeyboardDelay(100)

function moveRandomly() {
    var moves = ["w", "a", "s", "d"];
    shuffleArray(moves);
    for (let i=0; i<moves.length; i++) {
        const key = moves[i]
        robot.keyToggle(key, "down");
    }
    robot.keyTap("space")
    for (let i=0; i<moves.length; i++) {
        const key = moves[i]
        robot.keyToggle(key, "up");
    }
    robot.keyTap("space")
}

var isReady = true;
function main() {
    if (isReady) {
        isReady = false;
        const nextMoveInterval = getRandomInteger(minLoopInterval, maxLoopInterval);
        console.log(`Moving randomly in ${Math.trunc(nextMoveInterval / 1000)} seconds`)
        setTimeout(() => {
            console.log('Moving randomly!')
            moveRandomly();
            isReady = true;
        }, nextMoveInterval)
    }
}
main()
setInterval(() => {
    main()
}, 5000)
