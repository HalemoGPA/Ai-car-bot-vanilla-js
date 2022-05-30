class Controls {
  constructor(Ability) {
    this.left = false;
    this.right = false;
    this.up = false;
    this.down = false;
    switch (Ability) {
      case "true":
        this.#addKeyboardListeners();
        break;
      case "false":
        this.up = true;
        break;
    }
  }
  #addKeyboardListeners() {
    document.addEventListener("keydown", (event) => {
      switch (event.key) {
        case "ArrowLeft":
          this.left = true;
          break;
        case "ArrowRight":
          this.right = true;
          break;
        case "ArrowUp":
          this.up = true;
          break;
        case "ArrowDown":
          this.down = true;
          break;
      }
    });
    document.addEventListener("keyup", (event) => {
      switch (event.key) {
        case "ArrowLeft":
          this.left = false;
          break;
        case "ArrowRight":
          this.right = false;
          break;
        case "ArrowUp":
          this.up = false;
          break;
        case "ArrowDown":
          this.down = false;
          break;
      }
    });
  }
}
