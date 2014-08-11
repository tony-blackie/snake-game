/* Events */
document.addEventListener("keydown", function(event) {
    var buttonPressed,
        code;
    code = event.keyCode.toString();
    switch (code) {
        case "37":
            buttonPressed = "left";
            break;
        case "39":
            buttonPressed = "right";
            break;
        case "38":
            buttonPressed = "up";
            break;
        case "40":
            buttonPressed = "down";
            break;
        default: console.log("Something is wrong");
    }
    if (refresher === false){
        changeWay(buttonPressed);
    }
    refresher = true;
}, false);

var start = document.getElementById('start');
start.addEventListener("click", function(event) {
    if (event.target.id === 'startButton') {
        timer = setInterval(function(){
            refresher = false;
            setNextStep();
            getWay(snakeArr);
            tailToDelete = setCurrentCell(snakeArr);
            getCondition(snakeArr, fieldArr, fieldWidth);
            fieldChanger(snakeArr, fieldArr, fieldWidth, tailToDelete);
            setPoints(1);
        }, timerCounter);
    } else {
        if (event.target.id === 'pauseButton') {
            clearInterval(timer);
        }
    }
}, false);