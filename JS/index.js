import Shape from "./Shape.js";
import Timer from "./Timer.js";

const game = document.getElementById("game");
game.style.backgroundColor = "grey";

var shapes = [ "square", "circle", "rectangle", "triangle"];
var colors = ["red", "green", "#6E44FF","#BA274A", "#2191FB", "#EF7A85","#4A6C6F","#C0BCB5","#336600", "#ffff66", "#ff66a3", "#6666ff", "#5c8a8a"];

let shape = new Shape({
    form: shapes[Math.floor(Math.random()*shapes.length)],
    color: colors[Math.floor(Math.random()*colors.length)],
    position: {
        x: randomIntFromRange(game.clientWidth * 0.2, game.clientWidth * 0.8) + "px",
        y: randomIntFromRange(game.clientHeight * 0.2, game.clientHeight * 0.8) +"px",
    }
});

function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

shape.create();
shape.timer = new Timer();
shape.timer.create();
shape.onClick();
game.appendChild(shape.element);
