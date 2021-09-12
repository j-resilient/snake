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
        if (this.offBoard() || this.snakeHitItself()) {
            return true;
        }
        return false;
    }

    snakeHitItself() {
        let tail = this.snake.tail.slice(1, this.snake.tail.length);
        return tail.some(seg => Snake.equals(this.snake.tail[0], seg));
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