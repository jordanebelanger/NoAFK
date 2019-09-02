import robot = require("robotjs")
import { Mover } from "../mover"
import { getRandomInteger, shuffleArray, pickOneFrom } from "../utils/random"

export class MouseKeyboardMover implements Mover {

    private static readonly whispers: string[] = [
        "/w LolRoflmaoKeker Hello mister!",
        "/w DerpsonMother Mommy gimme cookie",
        "/w NagaOverMother Naga stole my boat",
    ]

    moveRandomly() {
        this.moveAround()
        this.whisperSomeone()
        this.rotateCamera()
    }

    private moveAround() {
        const verticalMove = pickOneFrom(shuffleArray(["w", "s"]))
        const sideMove = pickOneFrom(shuffleArray(["a", "d"]))

        robot.setKeyboardDelay(getRandomInteger(1, 5) * 100)

        robot.keyToggle(verticalMove, "down")
        robot.keyToggle(sideMove, "down")
        robot.keyToggle(verticalMove, "up")
        robot.keyToggle(sideMove, "up")
    }

    private whisperSomeone() {
        robot.keyTap("enter")
        robot.typeStringDelayed(pickOneFrom(MouseKeyboardMover.whispers), (getRandomInteger(5, 10) * 10) * 60)
        robot.keyTap("enter")
    }

    private rotateCamera() {
        const screenSize = robot.getScreenSize()
        robot.mouseToggle("down", "left")
        robot.mouseToggle("down", "right")
        robot.moveMouseSmooth(getRandomInteger(1, 5) * 0.2 * screenSize.width, getRandomInteger(1, 5) * 0.2 * screenSize.height)
        robot.mouseToggle("up", "left")
        robot.mouseToggle("up", "right")
    }

} 
