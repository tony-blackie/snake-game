describe("setCurrentCell", function() {
    var i,
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

    beforeEach(function() {
        i = 0;
        i += 1;
    });
    it("Should have defined fields currentCell and nextCell of snakeArr[i]", function() {
        expect(snakeArr[snakeArr.length - 1].currentCell).toBeDefined();
        expect(snakeArr[i].currentCell).toBeDefined();
        expect(snakeArr[i].nextCell).toBeDefined();
    });
});
xdescribe("setNextStep", function() {
    var curDirection,
        lastEvent = 'right',
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
            }],
        i = 0;
    afterEach(function() {
        i += 1;
    });
    it("Should return currentDirection", function() {
        expect(snakeArr[0]).toBeDefined();
        expect(lastEvent).toBeDefined();
        expect(setNextStep()).toEqual(curDirection);
    });
    it("Should calculate next move", function() {
        expect(snakeArr).toBeDefined();
        expect(snakeArr[i].currentCell).toBeGreaterThan()

    });
});
describe("gameOver", function() {
    var timer = 0;
    it("Should stop timer and write result", function() {
        expect(timer).toBeDefined();
    });
});
describe("SetPoints", function() {
    var num = 0;
    it("Should write points to the pointTable", function() {
        expect(num).not.toBeNaN();
    });
});