/* Main program */

    var fieldWidth,
        fieldArr,
        snakeArr,
        timerCounter,
        timer,
        lastEvent,
        tailToDelete,
        refresher,
        gameCounter;
    fieldWidth = 20;
    fieldWidth = generateDOM(fieldWidth);
    fieldArr = createField(fieldWidth);
    snakeArr = [
        {
            nextCell: 0,
            currentCell: 0
        },
        {
            nextCell: 0,
            currentCell: 0
        },
        {
            nextCell: 0,
            currentCell: 0
        }];
    snakeArr = initSnake(snakeArr);
    lastEvent = "right";
    timerCounter = 200;
    gameCounter = 0;
    initApple(fieldArr, fieldWidth, null);
