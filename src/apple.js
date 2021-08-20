class Apple {
    constructor() {
        this.pos = this._randomPos();
    }

    _randomPos() {
        return [Math.round(Math.random() * 20), Math.round(Math.random() * 20)];
    }

    newApple() {
        this.pos = this._randomPos();
    }
}

module.exports = Apple;