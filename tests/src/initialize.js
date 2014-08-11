/* Initialization module */
function generateDOM(fieldWidth) {
    var fieldCell,
        documentFragment,
        counterLength,
        fieldHolder,
        i;

    if (fieldWidth === undefined) {  // if no width of field, set 20 as default
        fieldWidth = 20;
    }
    documentFragment = document.createDocumentFragment();
    counterLength = fieldWidth * fieldWidth;

    for (i = 0; i < counterLength; i++) {   // initialize field with divs
        fieldCell = document.createElement('div');
        fieldCell.className = 'fieldCell';
        fieldCell.id = i;
        documentFragment.appendChild(fieldCell);
    }
    fieldHolder = document.getElementById('innerField');
    fieldHolder.appendChild(documentFragment);
    return fieldWidth;
}

function createField(fieldWidth) {
    var fieldArr = [],
        j,
        i;

    for (i = 0; i < fieldWidth; i++) {  //initialize as an array of objects
        fieldArr[i] = [];
        for (j = 0; j < fieldWidth; j++) {
            fieldArr[i][j] = {
                snake: false,       // is cell a snake
                lab: false,        // is cell a labyrinth)
                apple: false        // does the cell contain food
            };
        }
    }
    return fieldArr;
}
function initSnake(snakeArr) {
    var i,
        j;
    j = snakeArr.length;
    for (i = 0; i < j; i++) {
        snakeArr[i].currentCell = 3 * fieldWidth + 5 - i;   //  start from 3rd row, head on 5th column
    }
    return snakeArr;
}
function initApple(fieldArr, fieldWidth, lastApple) {
    function drawApple(fieldWidth, lastApple) {
        var i,
            j,
            k,
            head;
        for (i = 0; i < fieldWidth; i++) {  // snake drawing with DOM
            for (j = 0; j < fieldWidth; j++) {
                if (fieldArr[i][j].apple === true) {
                    k = j + i * fieldWidth;
                    head = document.getElementById(k.toString());
                    head.style.backgroundColor = "red";
                }
            }
        }
        if (lastApple !== null) {
            head = document.getElementById(lastApple.toString());
            head.style.backgroundColor = "white";
        }
    }

    var currentCellToDraw,
        leftFromDivision,
        integerPart,
        apple;

    apple = Math.floor(Math.random() * (fieldWidth * fieldWidth - fieldWidth + 1) + fieldWidth);    // random place for apple
    console.log("apple = " + apple);
    currentCellToDraw = apple;  // finding the fieldCell with this generated number
    leftFromDivision = currentCellToDraw % fieldWidth;
    integerPart = (parseInt(currentCellToDraw / fieldWidth, 10));
    if (fieldArr[integerPart][leftFromDivision].snake === false && fieldArr[integerPart][leftFromDivision].lab === false) { //checks if the fieldCell is free for apple (not snake or labyrinth)
        fieldArr[integerPart][leftFromDivision].apple = true;
    } else {
        initApple(fieldArr, fieldWidth, lastApple);
    }

    if (lastApple !== null) {   // will be null, if it's the first apple
        currentCellToDraw = lastApple;   // delete apple from the last position
        leftFromDivision = currentCellToDraw % fieldWidth;
        integerPart = (parseInt(currentCellToDraw / fieldWidth, 10));
        fieldArr[integerPart][leftFromDivision].apple = false;
    }
        drawApple(fieldWidth, lastApple);   //sets style for apple
}

function drawLabirynth() {  // for future labirynths
    var i,
        j,
        k,
        head;

    for (i = 0; i < fieldWidth; i++) {  // draw labyrinth DOM
        for (j = 0; j < fieldWidth; j++) {
            if (fieldArr[i][j].lab === true) {
                k = j + i * fieldWidth;
                head = document.getElementById(k.toString());
                head.style.backgroundColor = "green";
            }
        }
    }
}