//https://stackoverflow.com/questions/55668801/how-to-make-an-image-appear-on-a-random-position-onclick

class Apple {
  appleTop;
  appleLeft;
  apple;
  constructor(el) {
    this.node = document.createElement('img');
    this.node.setAttribute('id', 'apple');
    this.node.setAttribute('src', 'src/assets/food.jpg');


    el.appendChild(this.node);
    this.node.style.top = (Math.floor((Math.random() * 700) / 50)) * 50 + 'px';
    this.node.style.left = (Math.floor((Math.random() * 700) / 50)) * 50 + 'px';

    this.appleTop = this.node.style.top;
    this.appleLeft = this.node.style.left;
    this.apple = this.node;
  }
}