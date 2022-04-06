document.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body");
  const board = document.querySelector("#board");

  const head = new Head(board);
  new Apple(board);

  body.addEventListener("keydown", (e) => {
    if (e.code === "ArrowLeft") {
      head.currentDirection = "left";
    } else if (e.code === "ArrowRight") {
      head.currentDirection = "right";
    } else if (e.code === "ArrowDown") {
      head.currentDirection = "bottom";
    } else if (e.code === "ArrowUp") {
      head.currentDirection = "top";
    }
  });
});