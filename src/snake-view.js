const Board = require("./board");

class View {
    constructor($el) {
        this.$el = $el;
        this.board = new Board();
        this.render();
        // bind a listener to detect key events, use jquery on with "keydown"
        // use setInterval: call step() every half-second
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
        // render board
        // let $square = $('<div></div>');
        // $square.addClass('green');
        // $square.addClass('box');
        // this.$el.append($square);

        for (let row = 0; row < 20; row++) {
            for (let col = 0; col < 20; col++) {
                let $square = $('<div></div>');
                $square.addClass('box');
                if (col === 9 && row === 9) {
                    $square.addClass('green');
                }
                this.$el.append($square);
            }
        }
    }
}

module.exports = View;