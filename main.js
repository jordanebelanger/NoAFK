// Type "Hello World" then press enter.
var robot = require("robotjs");

setInterval(() => {
    robot.keyTap("w");    
    robot.keyTap("a");    
    robot.keyTap("s");    
    robot.keyTap("d");    
}, 15000);