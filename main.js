// Type "Hello World" then press enter.
var robot = require("robotjs");

// Type "Hello World".

async function loop(runFunc) {
    await runFunc()
}

setInterval(() => {
    robot.keyTap("w");    
    robot.keyTap("a");    
    robot.keyTap("s");    
    robot.keyTap("d");    
}, 15000);