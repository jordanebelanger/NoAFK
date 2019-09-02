import { Mover } from "./mover"
import { getRandomInteger } from './utils/random'
import { MouseKeyboardMover } from './movers/mouse+keyboard';

const minLoopInterval = 5000
const maxLoopInterval = 25000

var isReady = true

function main(minLoopInterval: number, maxLoopInterval: number, mover: Mover) {
    if (isReady) {
        isReady = false
        const nextMoveInterval = getRandomInteger(minLoopInterval, maxLoopInterval)
        console.log(`Moving randomly in ${Math.trunc(nextMoveInterval / 1000)} seconds`)
        setTimeout(() => {
            console.log('Moving randomly!')
            mover.moveRandomly()
            isReady = true
        }, nextMoveInterval)
    }
}

setInterval(() => {
    main(minLoopInterval, maxLoopInterval, new MouseKeyboardMover)
}, 1000)
