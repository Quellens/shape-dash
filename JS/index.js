import Shape from "./Shape.js";

const game = document.getElementById("game");
game.style.backgroundColor = "grey";


var shapes = [ "square", "circle", "rectangle", "triangle"];
var colors = ["red", "green"];
const shape = new Shape({
    form: shapes[Math.floor(Math.random()*shapes.length)],
    color: colors[Math.floor(Math.random()*colors.length)],
    position: {
        x: randomIntFromRange(game.clientWidth * 0.2, game.clientWidth * 0.8) + "px",
        y: randomIntFromRange(game.clientHeight * 0.2, game.clientHeight * 0.8) +"px",
    }
}
    );
shape.create();

console.log(shape);

function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }