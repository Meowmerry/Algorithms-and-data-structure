class Apple {
  appleTop;
  appleLeft;
  apple;
  constructor(el) {
    this.node = document.createElement("img");
    this.node.setAttribute("id", "apple");
    this.node.setAttribute("src", "src/assets/apple.jpg");

    el.appendChild(this.node);

    // set the position of apple randomly 

    this.node.style.left = (Math.floor(Math.random() * 700) / 50) * 50 + 'px';
    this.node.style.top = (Math.floor(Math.random() * 700) / 50) * 50 + 'px';

    // set apple position  
    this.appleTop = this.node.style.top;
    this.appleLeft = this.node.style.left;
    this.apple = this.node;
  }
}

//make the apple appear on random position, but
//keep the apple there until head touches it
//is the head touching an event listener code?

//https://stackoverflow.com/questions/55668801/how-to-make-an-image-appear-on-a-random-position-onclick