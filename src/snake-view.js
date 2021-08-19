const Board = require("./board");

class View {
    constructor($el) {
        this.$el = $el;
        this.board = new Board();
        this._createGrid();
        // bind a listener to detect key events, use jquery on with "keydown"
        // use setInterval: call step() every half-second
    }

    _createGrid() {
        for (let row = 0; row < 20; row++) {
            for (let col = 0; col < 20; col++) {
                let $square = $('<div></div>');
                $square.addClass('box');
                $square.data("pos", [col, row]);
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
        
    }
}

module.exports = View;