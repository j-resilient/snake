const Snake = require("./snake");
const Apple = require("./apple");
class Board {
    constructor() {
        this.snake = new Snake();
        this.apple = new Apple();
    }

    checkForHit() {
        if (this.snake.tail.some(pos => Snake.equals(pos, this.apple.pos))) {
            this.snake.addSegment();
            this.apple.newApple();
        }
    }
}

module.exports = Board;