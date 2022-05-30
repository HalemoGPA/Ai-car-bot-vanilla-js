class Car {
  constructor(x, y, width, height, controlAbility, maxSpeed = 5) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = 0;
    this.maxSpeed = maxSpeed;
    this.friction = 0.05;
    this.acceleration = 0.1;
    this.angle = 0;
    this.useBrain = controlAbility == "AI";
    this.damaged = false;
    if (!(controlAbility == "false")) {
      this.sensor = new Sensor(this);
      this.brain = new NeuralNetwork([this.sensor.rayCount, 6, 4]);
    }
    this.controls = new Controls(controlAbility);
  }
  update(roadBorders, traffic) {
    if (!this.damaged) {
      this.#move();
      this.polygon = this.#createPolygon();
      this.damaged = this.#assessDamage(roadBorders, traffic);
    }
    if (this.sensor) {
      this.sensor.update(roadBorders, traffic);
      const offsets = this.sensor.readings.map((e) =>
        e == null ? 0 : 1 - e.offset
      );
      const outputs = NeuralNetwork.feedForward(offsets, this.brain);
      if (this.useBrain) {
        this.controls.up = outputs[0];
        this.controls.left = outputs[1];
        this.controls.right = outputs[2];
        this.controls.down = outputs[3];
      }
    }
  }
  #assessDamage(roadBorders, traffic) {
    for (let i = 0; i < roadBorders.length; i++) {
      if (polysIntersect(this.polygon, roadBorders[i])) {
        return true;
      }
    }
    for (let i = 0; i < traffic.length; i++) {
      if (polysIntersect(this.polygon, traffic[i].polygon)) {
        return true;
      }
    }
    return false;
  }
  #createPolygon() {
    const points = [];
    const rad = Math.hypot(this.width, this.height) / 2;
    const alpha = Math.atan2(this.width, this.height);
    points.push({
      x: this.x - Math.sin(this.angle - alpha) * rad,
      y: this.y - Math.cos(this.angle - alpha) * rad,
    });
    points.push({
      x: this.x - Math.sin(this.angle + alpha) * rad,
      y: this.y - Math.cos(this.angle + alpha) * rad,
    });
    points.push({
      x: this.x - Math.sin(Math.PI + this.angle - alpha) * rad,
      y: this.y - Math.cos(Math.PI + this.angle - alpha) * rad,
    });
    points.push({
      x: this.x - Math.sin(Math.PI + this.angle + alpha) * rad,
      y: this.y - Math.cos(Math.PI + this.angle + alpha) * rad,
    });
    return points;
  }
  draw(ctx, color, drawSensor = false) {
    if (this.damaged) {
      ctx.fillStyle = "#FFF000";
    } else {
      ctx.fillStyle = color;
    }
    ctx.beginPath();
    ctx.moveTo(this.polygon[0].x, this.polygon[0].y);
    for (let i = 1; i < this.polygon.length; i++) {
      ctx.lineTo(this.polygon[i].x, this.polygon[i].y);
    }

    ctx.fill();
    if (this.sensor && drawSensor) {
      this.sensor.draw(ctx);
    }
  }
  #move() {
    if (this.controls.up) {
      this.speed += this.acceleration;
    }
    if (this.controls.down) {
      this.speed -= this.acceleration;
    }
    this.speed > this.maxSpeed ? (this.speed = this.maxSpeed) : this.speed;
    this.speed < -this.maxSpeed / 2
      ? (this.speed = -this.maxSpeed / 2)
      : this.speed;
    this.speed > 0 ? (this.speed -= this.friction) : this.speed;
    this.speed < 0 ? (this.speed += this.friction) : this.speed;
    Math.abs(this.speed) < this.friction ? (this.speed = 0) : this.speed;
    if (this.speed != 0) {
      const flip = this.speed > 0 ? 1 : -1;
      if (this.controls.left) {
        this.angle += 0.03 * flip;
      }
      if (this.controls.right) {
        this.angle -= 0.03 * flip;
      }
    }

    this.x -= Math.sin(this.angle) * this.speed;
    this.y -= Math.cos(this.angle) * this.speed;
  }
}
