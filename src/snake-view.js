// require board
class View {
    constructor($el) {
        this.$el = $el;
        // build a board
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
    }
}

module.exports = View;