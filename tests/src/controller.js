/* Controller */
function setNextStep() {
    function calculateNextMove(lastEvent) {
        var currentDirection;
        switch (lastEvent) {
            case "up":
                currentDirection = snakeArr[0].currentCell - fieldWidth;
                if (snakeArr[0].currentCell >= 0 && snakeArr[0].currentCell <= fieldWidth) {
                    currentDirection = snakeArr[0].currentCell + fieldWidth * (fieldWidth - 1);
                }
                break;
            case "down":
                currentDirection = snakeArr[0].currentCell + fieldWidth;
                if (snakeArr[0].currentCell >= fieldWidth * (fieldWidth - 1) && snakeArr[0].currentCell <= fieldWidth * fieldWidth) {
                    currentDirection = currentDirection % fieldWidth;
                }
                break;
            case "left":
                currentDirection = snakeArr[0].currentCell - 1;
                if (currentDirection % fieldWidth === fieldWidth - 1) {
                    currentDirection += fieldWidth;
                }
                break;
            case "right":
                currentDirection = snakeArr[0].currentCell + 1;
                if (currentDirection % fieldWidth === 0) {
                    currentDirection -= fieldWidth;
                }
                break;
            default:
                console.log("Something is wrong");
        }
        return currentDirection;
    }
    var curDirection;
    curDirection = calculateNextMove(lastEvent);
    snakeArr[0].nextCell = curDirection;
}

function changeWay(buttonPressed) {
    switch (buttonPressed) {
        case "up":
            if (lastEvent !== "down") {
                lastEvent = "up";
            //    refresher = true;
            }
            break;
        case "down":
            if (lastEvent !== "up") {
                lastEvent = "down";
            //    refresher = true;
            }
            break;
        case "left":
            if (lastEvent !== "right") {
                lastEvent = "left";
            //    refresher = true;
            }
            break;
        case "right":
            if (lastEvent !== "left") {
                lastEvent = "right";
            //    refresher = true;
            }
            break;
        default:
            console.log("Something is wrong");
    }
}

function gameOver() {
    var points,
        pointBoard,
        newScore;
    //gameCounter += 1;
    clearInterval(timer);
    alert("You lose!");
    points = document.getElementById('points');
    localStorage.setItem('Player' + gameCounter, points.innerHTML);
    newScore = document.createElement('div');
    pointBoard = document.getElementById('menu');
    newScore.innerHTML = localStorage.getItem("Player" + gameCounter);
    pointBoard.appendChild(newScore);
}
function setPoints(num) {
    var currentPoints,
        pointsTable;
    pointsTable = document.getElementById("points");
    currentPoints = parseInt(pointsTable.innerHTML, 10);
    currentPoints = currentPoints + num;
    pointsTable.innerHTML = currentPoints;
}
function eatApple(snakeArr, fieldArr, currentFieldCellApple) {
    snakeArr[snakeArr.length] = {
        nextCell: snakeArr[snakeArr.length - 1].currentCell,
        currentCell: 0
    };
    initApple(fieldArr, fieldWidth, currentFieldCellApple);
    setPoints(100);
}
function getWay(snakeArr) {
    var i,
        j;
    j = snakeArr.length;
    for (i = 0; i < j; i++) {
        if (i === 0) {
            continue;
        }
        snakeArr[i].nextCell = snakeArr[i-1].currentCell;
    }
}
function setCurrentCell(snakeArr) {     // move snake
    var i,
        j,
        lastCell;

    j = snakeArr.length;
    lastCell = snakeArr[snakeArr.length - 1].currentCell;
    for (i = 0; i < j; i++) {
        snakeArr[i].currentCell = snakeArr[i].nextCell;
    }
    return lastCell;
}

function fieldChanger(snakeArr, fieldArr, fieldWidth, tailToDelete) {
    function drawResults(fieldWidth) {
        var i,
            j,
            k,
            head;

        for (i = 0; i < fieldWidth; i++) {  // snake drawing with DOM
            for (j = 0; j < fieldWidth; j++) {
                if (fieldArr[i][j].snake === true) {
                    k = j + i * fieldWidth;
                    head = document.getElementById(k.toString());
                    head.style.backgroundColor = "black";
                } else {
                    if (fieldArr[i][j].snake === false && fieldArr[i][j].apple === false && fieldArr[i][j].lab === false) {
                        k = j + i * fieldWidth;
                        head = document.getElementById(k.toString());
                        head.style.backgroundColor = "white";
                    }
                }
            }
        }
    }

        var i,
            j,
            currentCellToDraw,
            leftFromDivision,
            integerPart;

        j = snakeArr.length;
        for (i = 0;  i < j; i++) {  // copy snake position to field
            currentCellToDraw = snakeArr[i].currentCell;
            leftFromDivision = currentCellToDraw % fieldWidth;
            integerPart = (parseInt(currentCellToDraw / fieldWidth, 10));
            fieldArr[integerPart][leftFromDivision].snake = true;
        }
        currentCellToDraw = tailToDelete;   // delete tail from the last position
        leftFromDivision = currentCellToDraw % fieldWidth;
        integerPart = (parseInt(currentCellToDraw / fieldWidth, 10));
        fieldArr[integerPart][leftFromDivision].snake = false;


    drawResults(fieldWidth);
    return fieldArr;
}

function getCondition(snakeArr, fieldArr, fieldWidth) {
    var currentSnakePos,
        leftFromDivision,
        integerPart;

    currentSnakePos = snakeArr[0].currentCell;
    leftFromDivision = currentSnakePos % fieldWidth;
    integerPart = (parseInt(currentSnakePos / fieldWidth, 10));

    if (fieldArr[integerPart][leftFromDivision].apple === true) {
        eatApple(snakeArr, fieldArr, snakeArr[0].currentCell);
        setCurrentCell(snakeArr);
    } else {
        if (fieldArr[integerPart][leftFromDivision].snake === true || fieldArr[integerPart][leftFromDivision].lab === true) {
            gameOver();
        }
    }
}
