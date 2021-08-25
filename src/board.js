const Snake = require("./snake");
const Apple = require("./apple");
class Board {
    constructor() {
        this.snake = new Snake();
        this.apple = new Apple();
    }

    checkForHit() {
        if (this.snake.tail.some(pos => pos[0] === this.apple.pos[0] && pos[1] === this.apple.pos[1])) {
            this.apple.newApple();
            // grow the snake tail
        }
    }
}

module.exports = Board;