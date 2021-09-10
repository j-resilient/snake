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

    endGame() {
        if (this.offBoard()) {
            return true;
        }
        return false;
    }

    offBoard() {
        let onBoard = false;
        for (const seg of this.snake.tail) {
            if (seg[0] < 0 || seg[0] > 19 || seg[1] < 0 || seg[1] > 19) {
                onBoard = true;
                break;
            }
        }
        return onBoard;
    }
}

module.exports = Board;