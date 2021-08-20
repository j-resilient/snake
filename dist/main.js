/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Snake = __webpack_require__(/*! ./snake */ \"./src/snake.js\");\nclass Board {\n    constructor() {\n        this.snake = new Snake();\n        // later we'll store apples\n    }\n}\n\nmodule.exports = Board;\n\n//# sourceURL=webpack://snake/./src/board.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("console.log(\"webpack is working\");\nconst SnakeView = __webpack_require__(/*! ./snake-view */ \"./src/snake-view.js\");\n\n$(() => {\n    const $el = $(\".snake\");\n    new SnakeView($el);\n})\n\n//# sourceURL=webpack://snake/./src/index.js?");

/***/ }),

/***/ "./src/snake-view.js":
/*!***************************!*\
  !*** ./src/snake-view.js ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Board = __webpack_require__(/*! ./board */ \"./src/board.js\");\n\nclass View {\n    constructor($el) {\n        this.$el = $el;\n        this.board = new Board();\n        this._createGrid();\n\n        $(document).on(\"keydown\", e => this._handleKeyEvent(e.which) );\n\n        // use setInterval: call step() every half-second\n        setInterval(() => {\n            this.step();\n        }, 3000);\n    }\n\n    _handleKeyEvent(keyCode) {\n        switch (keyCode) {\n            case 38:\n                this.board.snake.turn(\"U\");\n                break;\n            case 40:\n                this.board.snake.turn(\"D\");\n                break;\n            case 39:\n                this.board.snake.turn(\"R\");\n                break;\n            case 37:\n                this.board.snake.turn(\"L\");\n                break;\n        }\n    }\n\n    _createGrid() {\n        for (let row = 0; row < 20; row++) {\n            for (let col = 0; col < 20; col++) {\n                let $square = $('<div></div>');\n                $square.addClass('box');\n                $square.data(\"pos\", [col, row]);\n                // the snake starts at the center of the grid\n                if (col === 9 && row === 9) { $square.addClass('green'); }\n                this.$el.append($square);\n            }\n        }\n    }\n\n    step() {\n        this.board.snake.move();\n        this.render();\n    }\n\n    render() {\n        const $boxes = $(\"div.box\");\n        for (let i = 0; i < $boxes.length; i++) {\n            let $currentBox = $($boxes[i]);\n            let boxPos = $currentBox.data(\"pos\");\n            if (this.board.snake.tail.some(pos => pos[0] === boxPos[0] && pos[1] === boxPos[1])) {\n                $currentBox.addClass('green');\n            } else {\n                $currentBox.removeClass('green');\n            }\n        }\n    }\n}\n\nmodule.exports = View;\n\n//# sourceURL=webpack://snake/./src/snake-view.js?");

/***/ }),

/***/ "./src/snake.js":
/*!**********************!*\
  !*** ./src/snake.js ***!
  \**********************/
/***/ ((module) => {

eval("class Snake {\n    \n    constructor() {\n        // starts at the center of the grid\n        this.tail = [[9, 9]];\n        this.currentDir = \"U\";\n\n        // up, down, right, left\n        this.dirs = { \"U\": [0, -1], \"D\": [0, 1], \"R\": [1, 0], \"L\": [-1, 0] };\n    }\n    \n    move() {\n        // move the snake in the current direction\n        for (let i = 0; i < this.tail.length; i++) {\n            this.tail[i] = Snake.plus(this.tail[i], this.dirs[this.currentDir]);\n        }\n    }\n\n    turn(dir) {\n        // change the current direction\n        this.currentDir = dir;\n    }\n\n    addSegment() {\n        // add a new segment to the end of the snake\n    }\n\n    // static?\n    static plus(c1, c2) {\n        // sum and return the coordinates\n        return [(c1[0] + c2[0]), (c1[1] + c2[1])];\n    }\n\n    // static?\n    static equals(c1, c2) {\n        // check if the coordinates are equal\n    }\n\n    // static?\n    static isOpposite(c1, c2) {\n        // checks if the second position is opposite the first\n    }\n}\n\nmodule.exports = Snake;\n\n//# sourceURL=webpack://snake/./src/snake.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;