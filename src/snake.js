class Snake {
    
    constructor() {
        // starts at the center of the grid
        this.tail = [[9, 9]];
        this.currentDir = "U";

        // up, down, right, left
        this.dirs = { "U": [0, -1], "D": [0, 1], "R": [1, 0], "L": [-1, 0] };
    }
    
    move() {
        // shift every square of the body forward by one
        for (let i = this.tail.length - 1; i > 0; i--) {
            this.tail[i] = this.tail[i-1];
        }
        // move head
        this.tail[0] = Snake.plus(this.tail[0], this.dirs[this.currentDir]);
    }

    turn(dir) {
        // change the current direction
        this.currentDir = dir;
    }

    addSegment() {
        let newCoord = Snake.plus(this.tail[this.tail.length - 1], this.oppDirCoord());
        this.tail.push(newCoord);
    }

    oppDirCoord() {
        switch(this.currentDir) {
            case "U":
                return this.dirs["D"];
            case "D":
                return this.dirs["U"];
            case "R":
                return this.dirs["L"];
            case "L":
                return this.dirs["R"];
        }
    }

    static plus(c1, c2) {
        return [(c1[0] + c2[0]), (c1[1] + c2[1])];
    }

    static equals(c1, c2) {
        return (c1[0] === c2[0] && c1[1] === c2[1]);
    }

    // static?
    static isOpposite(c1, c2) {
        // checks if the second position is opposite the first
    }
}

module.exports = Snake;