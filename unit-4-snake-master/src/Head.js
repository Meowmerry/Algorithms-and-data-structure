class Head {
  constructor(el) {
    this.node = document.createElement("div");
    this.node.setAttribute("id", "head");
    el.appendChild(this.node);

    this.currentDirection = "right";
    this.SPEED = 250;

    this.node.style.top = 0;
    this.node.style.left = 0;
    // this.node.style.right = -50;
    // this.node.style.bottom = -50;

    setTimeout(this.move.bind(this), this.SPEED);
  }

  move() {
    const head = this.node;
    const direction = this.currentDirection;

    let topPosition = Number(head.style.top.replace("px", ""));
    let leftPosition = Number(head.style.left.replace("px", ""));

    if (direction === "right") {
      head.style.left = `${(leftPosition += 50)}px`;
    } else if (direction === "left") {
      head.style.left = `${(leftPosition -= 50)}px`;
    } else if (direction === "top") {
      head.style.top = `${(topPosition -= 50)}px`;
    } else if (direction === "bottom") {
      head.style.top = `${(topPosition += 50)}px`;
    }
    if (leftPosition === 700 || topPosition === 700 || leftPosition < 0 || topPosition < 0) {
      head.style.top = 0;
      head.style.left = 0;
      alert('Game over!  ' + '  score:   ');
      window.location.reload(true);
      return;
    }
    setTimeout(this.move.bind(this), this.SPEED);
  }
}