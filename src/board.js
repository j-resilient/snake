const Snake = require("./snake");
const Apple = require("./apple");
class Board {
    constructor() {
        this.snake = new Snake();
        this.apple = new Apple();
    }
}

module.exports = Board;