const Board = require("./board");

class View {
    constructor($el) {
        this.$el = $el;
        this.board = new Board();
        this._createGrid();

        $(document).on("keydown", e => this._handleKeyEvent(e.which) );

        // use setInterval: call step() every half-second
        setInterval(() => {
            this.step();
            this.board.checkForHit();
        }, 3000);
    }

    _handleKeyEvent(keyCode) {
        switch (keyCode) {
            case 38:
                this.board.snake.turn("U");
                break;
            case 40:
                this.board.snake.turn("D");
                break;
            case 39:
                this.board.snake.turn("R");
                break;
            case 37:
                this.board.snake.turn("L");
                break;
        }
    }

    _createGrid() {
        for (let row = 0; row < 20; row++) {
            for (let col = 0; col < 20; col++) {
                let $square = $('<div></div>');
                $square.addClass('box');
                $square.data("pos", [col, row]);
                // the snake starts at the center of the grid
                if (col === 9 && row === 9) { $square.addClass('green'); }
                this.$el.append($square);
            }
        }
    }

    step() {
        this.board.snake.move();
        this.render();
    }

    render() {
        const $boxes = $("div.box");
        for (let i = 0; i < $boxes.length; i++) {
            let $currentBox = $($boxes[i]);
            let boxPos = $currentBox.data("pos");
            if (this.board.snake.tail.some(pos => pos[0] === boxPos[0] && pos[1] === boxPos[1])) {
                $currentBox.addClass('green');
                $currentBox.removeClass('red');
            } else if (this.board.apple.pos[0] === boxPos[0] && this.board.apple.pos[1] === boxPos[1]) {
                $currentBox.addClass('red');
            } else {
                $currentBox.removeClass('green red');
            }
        }
    }
}

module.exports = View;