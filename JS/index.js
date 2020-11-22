import Shape from "./Shape.js";

const game = document.getElementById("game");
game.style.backgroundColor = "grey";


var shapes = [ "square", "circle", "rectangle", "triangle"];
var colors = ["red", "green", "#6E44FF","#BA274A", "#2191FB", "#EF7A85","#4A6C6F","#C0BCB5"];
let shape = new Shape({
    form: shapes[Math.floor(Math.random()*shapes.length)],
    color: colors[Math.floor(Math.random()*colors.length)],
    position: {
        x: randomIntFromRange(game.clientWidth * 0.2, game.clientWidth * 0.8) + "px",
        y: randomIntFromRange(game.clientHeight * 0.2, game.clientHeight * 0.8) +"px",
    }
});

shape.create();
game.appendChild(shape.element);
shape.element.addEventListener("click", ()=>{
    shape.element = undefined;
    
    shape = new Shape({
        form: shapes[Math.floor(Math.random()*shapes.length)],
        color: colors[Math.floor(Math.random()*colors.length)],
        position: {
            x: randomIntFromRange(0, game.clientWidth * 0.8) + "px",
            y: randomIntFromRange(0, game.clientHeight * 0.8) +"px",
        }
    });
    console.log(shape);
    setTimeout(()=>{
        shape.create();
        game.appendChild(shape.element);
    }, Math.random()* 3000);
})

console.log(shape);

function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }