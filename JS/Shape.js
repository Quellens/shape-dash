import Timer from "./Timer.js";

var shapes = [ "square", "circle", "rectangle", "triangle"];
var colors = ["red", "green", "#6E44FF","#BA274A", "#2191FB", "#EF7A85","#4A6C6F","#C0BCB5","#336600", "#ffff66", "#ff66a3", "#6666ff", "#5c8a8a"];

export default class Shape {
    constructor({form, color, position}){
    this.form = form,
    this.color = color,
    this.position = position,
    this.element;
    this.timer = null;
    }
    create() {
        if(this.form == "circle"){
            var circle = document.createElement("button");
            circle.style.backgroundColor = this.color;
            circle.style.borderRadius = "50%";
            circle.style.width = "20vmin";
            circle.style.height = "20vmin";
            this.element = circle;
        } else if(this.form == "rectangle"){
            var rectangle = document.createElement("button");
            rectangle.style.backgroundColor = this.color;
            rectangle.style.width = "25vmin";
            rectangle.style.height = "12vmin";
            this.element = rectangle;
        } else if(this.form == "triangle"){
            const possibilities = ["Right","Top","Left","Bottom"];
            const direction = possibilities[Math.floor(Math.random() * 4)];
            var triangle = document.createElement("div");
            triangle.classList.add(direction);
            triangle.style["border" + direction]  = "15vmin solid " + this.color;
            this.element = triangle;
        } else if(this.form == "square"){
            var square = document.createElement("button");
            square.style.backgroundColor = this.color;
            square.style.width = "20vmin";
            square.style.height = "20vmin";
            this.element = square;
        }

        this.element.style.position = "absolute";
        this.element.style.left = this.position.x;
        this.element.style.top = this.position.y;
    }

    remove(){
        this.element.remove();
    }

    onClick(){
        this.element.addEventListener("click", () => {
          this.timer.remove();
          this.remove();
          setTimeout(() => {
            const newShape = new Shape({
                form: shapes[Math.floor(Math.random()*shapes.length)],
                color: colors[Math.floor(Math.random()*colors.length)],
                position: {
                    x: randomIntFromRange(game.clientWidth * 0.2, game.clientWidth * 0.8) + "px",
                    y: randomIntFromRange(game.clientHeight * 0.2, game.clientHeight * 0.8) +"px",
                }
            });
            this.form = newShape.form;
            this.color = newShape.color;
            this.position = newShape.position;
            this.create(); 
            document.getElementById("game").appendChild(this.element);
            this.timer = new Timer();
            this.timer.create(); 
            this.onClick(); 
          }, 3000 * Math.random());

        })
    }
}


function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
  