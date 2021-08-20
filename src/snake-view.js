const Board = require("./board");

class View {
    constructor($el) {
        this.$el = $el;
        this.board = new Board();
        this._createGrid();

        // for (let i = 0; i < 3; i++) {
        //     setTimeout(() => {
        //         this.board.snake.move();
        //         this.render();
        //     }, 5000);
        //     // this.board.snake.turn("R");
        // }
        // bind a listener to detect key events, use jquery on with "keydown"
        // use setInterval: call step() every half-second
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

    handleKeyEvent(e) {
        // look up e.keyCode
        // turn snake
    }

    step() {
        // call Snake#move
        // redraw board - render
    }

    render() {
        const $boxes = $("div.box");
        for (let i = 0; i < $boxes.length; i++) {
            let $currentBox = $($boxes[i]);
            let boxPos = $currentBox.data("pos");
            if (this.board.snake.tail.some(pos => pos[0] === boxPos[0] && pos[1] === boxPos[1])) {
                $currentBox.addClass('green');
            } else {
                $currentBox.removeClass('green');
            }
        }
    }
}

module.exports = View;