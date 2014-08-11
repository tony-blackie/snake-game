describe("createField", function() {
    var i,
        j,
        fieldArr = [];
    it("createField should have defined fieldWidth", function() {
        expect(fieldWidth).toBeDefined();
    });
    beforeEach(function() {
        i = 0;
        i += 1;
        j = 0;
        j += 1;
    });
    xit("Properties of fieldArr[i][j] should be falsy", function() {
        expect(fieldArr[i][j].snake).toBeFalsy();
        expect(fieldArr[i][j].lab).toBeFalsy();
        expect(fieldArr[i][j].apple).toBeFalsy();

    });
    it("createField should return fieldArr", function() {
        expect(createField()).toEqual(fieldArr);
    });
});

describe("initSnake", function() {
    var snakeArr = [
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
    it("snakeArr should be defined", function() {
        expect(snakeArr).toBeDefined();
    });
    xit("Should return snakeArr", function() {
       expect(initSnake()).toEqual(snakeArr);
    });

});
describe("initApple", function() {
    var apple = Math.floor(Math.random() * (fieldWidth * fieldWidth - fieldWidth + 1) + fieldWidth);
    it("Apple should be >= 0 && <= fieldWidth * fieldWidth", function() {
        expect(apple).toBeGreaterThan(0);
        expect(apple).toBeLessThan(fieldWidth * fieldWidth - 1);
    });
});