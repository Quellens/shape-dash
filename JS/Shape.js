export default class Shape {
    constructor({form, color, position}){
    this.form = form,
    this.color = color,
    this.position = position,
    this.element;
    }
    create() {
        if(this.form == "circle"){
            var circle = document.createElement("button");
            circle.style.backgroundColor = this.color;
            circle.style.borderRadius = "50%";
            circle.style.width = "20vmin";
            circle.style.height = "20vmin";
            document.getElementById("game").appendChild(circle);
            this.element = circle;
        } else if(this.form == "rectangle"){
            var rectangle = document.createElement("button");
            rectangle.style.backgroundColor = this.color;
            rectangle.style.width = "25vmin";
            rectangle.style.height = "12vmin";
            document.getElementById("game").appendChild(rectangle);
            this.element = rectangle;
        } else if(this.form == "triangle"){
            const possibilities = ["Right","Top","Left","Bottom"];
            const direction = possibilities[Math.floor(Math.random() * 4)];
            var triangle = document.createElement("div");
            triangle.classList.add(direction);
            triangle.style["border" + direction]  = "15vmin solid " + this.color;
            document.getElementById("game").appendChild(triangle);
            this.element = triangle;
        } else if(this.form == "square"){
            var square = document.createElement("button");
            square.style.backgroundColor = this.color;
            square.style.width = "20vmin";
            square.style.height = "20vmin";
            document.getElementById("game").appendChild(square);
            this.element = square;
        }


        this.element.style.position = "absolute";
        this.element.style.left = this.position.x;
        this.element.style.top = this.position.y;

    }
}