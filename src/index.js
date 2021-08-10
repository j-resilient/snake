console.log("webpack is working");
const SnakeView = require("./snake-view");

$(() => {
    const $el = $(".snake");
    new SnakeView($el);
})