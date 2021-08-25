const Snake = require("./snake");
const Apple = require("./apple");
class Board {
    constructor() {
        this.snake = new Snake();
        this.apple = new Apple();
    }

    checkForHit() {
        if (this.snake.tail.some(pos => Snake.equals(pos, this.apple.pos))) {
            console.log("yo");
            this.apple.newApple();
            // grow the snake tail
        }
    }
}

module.exports = Board;