class Snake {
    
    constructor() {
        // starts at the center of the grid
        this.tail = [[9, 9]];
        this.currentDir = "U";

        // up, down, right, left
        this.dirs = { "U": [0, -1], "D": [0, 1], "R": [1, 0], "L": [-1, 0] };
    }
    
    move() {
        // move the snake in the current direction
        for (let i = 0; i < this.tail.length; i++) {
            this.tail[i] = Snake.plus(this.tail[i], this.dirs[this.currentDir]);
        }
    }

    turn(dir) {
        // change the current direction
        this.currentDir = dir;
    }

    addSegment() {
        // add a new segment to the end of the snake
    }

    // static?
    static plus(c1, c2) {
        // sum and return the coordinates
        return [(c1[0] + c2[0]), (c1[1] + c2[1])];
    }

    // static?
    static equals(c1, c2) {
        // check if the coordinates are equal
    }

    // static?
    static isOpposite(c1, c2) {
        // checks if the second position is opposite the first
    }
}

module.exports = Snake;