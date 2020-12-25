export default class Timer {
  
  constructor(){
    this.element = document.createElement("p"); 
    this.interval;
  }

  remove(){
    clearInterval(this.interval);
    fade(this.element);
    setTimeout(() => {
    this.element.remove();  
    }, 1000);
  }

  create(){
    document.getElementById("game").appendChild(this.element);
    let i= 0;
    this.interval = setInterval(() => {
       i += 0.01;
      this.element.innerText = i.toFixed(2);
    }, 10);
  }
}

function fade(ele) {
  let op = 1;
  let time = setInterval( () => {
      if (op <= 0.1){
          clearInterval(time);
          ele.style.display = 'none';
      }
      ele.style.opacity = op;
      ele.style.filter = 'alpha(opacity=' + op * 100 + ")";
      op -= op * 0.1;
  }, 50);
}