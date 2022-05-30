const carCanvas = document.getElementById("carCanvas");
carCanvas.width = 250;
const networkCanvas = document.getElementById("networkCanvas");
networkCanvas.width = 300;
const carCtx = carCanvas.getContext("2d");
const networkCtx = networkCanvas.getContext("2d");
const road = new Road(carCanvas.width / 2, carCanvas.width * 0.9);
const N = 1;

const cars = generateCars(N);
const traffic = [
  new Car(road.getLaneCenter(1), 500, 30, 50, "false", 2.5),
  new Car(road.getLaneCenter(2), 100, 30, 50, "false", 3),
  new Car(road.getLaneCenter(0), 200, 30, 50, "false", 4),
  new Car(road.getLaneCenter(2), 200, 30, 50, "false", 3),
  new Car(road.getLaneCenter(1), -500, 30, 50, "false", 3.5),
  new Car(road.getLaneCenter(2), -100, 30, 50, "false", 3),
  new Car(road.getLaneCenter(0), -400, 30, 50, "false", 4),
  new Car(road.getLaneCenter(1), 100, 30, 50, "false", 4.5),
  new Car(road.getLaneCenter(0), -1500, 30, 50, "false", 2.5),
  new Car(road.getLaneCenter(1), -1100, 30, 50, "false", 3.5),
  new Car(road.getLaneCenter(1), -1200, 30, 50, "false", 1.5),
  new Car(road.getLaneCenter(1), -1200, 30, 50, "false", 2.5),
  new Car(road.getLaneCenter(2), -1500, 30, 50, "false", 4),
  new Car(road.getLaneCenter(2), -1100, 30, 50, "false", 3),
  new Car(road.getLaneCenter(0), -1400, 30, 50, "false", 2),
  new Car(road.getLaneCenter(1), 1100, 30, 50, "false", 1),
  new Car(road.getLaneCenter(1), 500, 30, 50, "false", 2.5),
  new Car(road.getLaneCenter(2), 100, 30, 50, "false", 3),
  new Car(road.getLaneCenter(0), 200, 30, 50, "false", 4),
  new Car(road.getLaneCenter(1), 100, 30, 50, "false", 4.5),
  new Car(road.getLaneCenter(0), -1500, 30, 50, "false", 2.8),
  new Car(road.getLaneCenter(1), -1100, 30, 50, "false", 3.4),
  new Car(road.getLaneCenter(1), -1200, 30, 50, "false", 1.2),
  new Car(road.getLaneCenter(1), -1200, 30, 50, "false", 2.0),
  new Car(road.getLaneCenter(2), -1500, 30, 50, "false", 2.4),
  new Car(road.getLaneCenter(2), -1100, 30, 50, "false", 4),
  new Car(road.getLaneCenter(0), -1400, 30, 50, "false", 4.5),
  new Car(road.getLaneCenter(1), 1100, 30, 50, "false", 1.2),
  new Car(road.getLaneCenter(1), 500, 30, 50, "false", 2),
  new Car(road.getLaneCenter(2), 100, 30, 50, "false", 0.6),
  new Car(road.getLaneCenter(0), 200, 30, 50, "false", 3.6),
  new Car(road.getLaneCenter(2), 200, 30, 50, "false", 1.7),
  new Car(road.getLaneCenter(1), -5500, 30, 50, "false", 1.5),
  new Car(road.getLaneCenter(2), -5100, 30, 50, "false", 2),
  new Car(road.getLaneCenter(0), -5400, 30, 50, "false", 3),
  new Car(road.getLaneCenter(1), -5100, 30, 50, "false", 1.5),
  new Car(road.getLaneCenter(1), 1100, 30, 50, "false", 1),
  new Car(road.getLaneCenter(1), 500, 30, 50, "false", 2.5),
  new Car(road.getLaneCenter(2), 100, 30, 50, "false", 3),
  new Car(road.getLaneCenter(0), 200, 30, 50, "false", 4),
  new Car(road.getLaneCenter(2), 200, 30, 50, "false", 3),
  new Car(road.getLaneCenter(1), -5500, 30, 50, "false", 3.5),
  new Car(road.getLaneCenter(2), -7100, 30, 50, "false", 3),
  new Car(road.getLaneCenter(0), -7400, 30, 50, "false", 2.8),
  new Car(road.getLaneCenter(1), -7100, 30, 50, "false", 1.5),
  new Car(road.getLaneCenter(0), -11500, 30, 50, "false", 2.5),
  new Car(road.getLaneCenter(2), 200, 30, 50, "false", 3),
  new Car(road.getLaneCenter(1), -5500, 30, 50, "false", 3.5),
  new Car(road.getLaneCenter(2), -5100, 30, 50, "false", 3),
  new Car(road.getLaneCenter(0), -5400, 30, 50, "false", 4),
  new Car(road.getLaneCenter(1), -5100, 30, 50, "false", 1.5),
  new Car(road.getLaneCenter(1), 1100, 30, 50, "false", 1),
  new Car(road.getLaneCenter(1), 500, 30, 50, "false", 2.5),
  new Car(road.getLaneCenter(2), 100, 30, 50, "false", 3),
  new Car(road.getLaneCenter(0), 200, 30, 50, "false", 4),
  new Car(road.getLaneCenter(2), 200, 30, 50, "false", 3),
  new Car(road.getLaneCenter(1), -5500, 30, 50, "false", 3.5),
  new Car(road.getLaneCenter(2), -7100, 30, 50, "false", 3),
  new Car(road.getLaneCenter(0), -7400, 30, 50, "false", 2.8),
  new Car(road.getLaneCenter(1), -7100, 30, 50, "false", 1.5),
  new Car(road.getLaneCenter(0), -7500, 30, 50, "false", 2.5),
  new Car(road.getLaneCenter(1), -7100, 30, 50, "false", 3.5),
  new Car(road.getLaneCenter(2), -4200, 30, 50, "false", 1.5),
  new Car(road.getLaneCenter(0), -4200, 30, 50, "false", 2.5),
  new Car(road.getLaneCenter(1), -4500, 30, 50, "false", 3.25),
  new Car(road.getLaneCenter(2), -4100, 30, 50, "false", 3),
  new Car(road.getLaneCenter(0), -4400, 30, 50, "false", 2),
  new Car(road.getLaneCenter(1), -4100, 30, 50, "false", 1),
  new Car(road.getLaneCenter(2), 200, 30, 50, "false", 3),
  new Car(road.getLaneCenter(1), -5500, 30, 50, "false", 3.5),
  new Car(road.getLaneCenter(2), -7100, 30, 50, "false", 3),
  new Car(road.getLaneCenter(0), -7400, 30, 50, "false", 2.8),
  new Car(road.getLaneCenter(1), -7100, 30, 50, "false", 1.5),
  new Car(road.getLaneCenter(0), -11500, 30, 50, "false", 2.5),
  new Car(road.getLaneCenter(2), 9000, 30, 50, "false", 3),
  new Car(road.getLaneCenter(1), -3500, 30, 50, "false", 3.5),
  new Car(road.getLaneCenter(2), -3100, 30, 50, "false", 3),
  new Car(road.getLaneCenter(0), -3400, 30, 50, "false", 4),
  new Car(road.getLaneCenter(1), -3100, 30, 50, "false", 1.5),
  new Car(road.getLaneCenter(1), 3100, 30, 50, "false", 1),
  new Car(road.getLaneCenter(1), 3700, 30, 50, "false", 2.5),
  new Car(road.getLaneCenter(2), 3700, 30, 50, "false", 3),
  new Car(road.getLaneCenter(0), 3700, 30, 50, "false", 4),
  new Car(road.getLaneCenter(2), 3700, 30, 50, "false", 3),
  new Car(road.getLaneCenter(1), -3500, 30, 50, "false", 3.5),
  new Car(road.getLaneCenter(0), -8400, 30, 50, "false", 2.8),
  new Car(road.getLaneCenter(1), -8100, 30, 50, "false", 1.5),
  new Car(road.getLaneCenter(0), -8500, 30, 50, "false", 2.5),
  new Car(road.getLaneCenter(2), -2100, 30, 50, "false", 3),
  new Car(road.getLaneCenter(1), -2100, 30, 50, "false", 3.5),
  new Car(road.getLaneCenter(2), -2200, 30, 50, "false", 1.5),
  new Car(road.getLaneCenter(0), -2400, 30, 50, "false", 2.8),
  new Car(road.getLaneCenter(1), -2100, 30, 50, "false", 1.5),
  new Car(road.getLaneCenter(0), -2500, 30, 50, "false", 2.5),
  new Car(road.getLaneCenter(2), -2100, 30, 50, "false", 3),
  new Car(road.getLaneCenter(1), -4100, 30, 50, "false", 3.5),
  new Car(road.getLaneCenter(2), -4200, 30, 50, "false", 1.5),
  new Car(road.getLaneCenter(0), -4400, 30, 50, "false", 2.8),
  new Car(road.getLaneCenter(1), -4100, 30, 50, "false", 1.5),
  new Car(road.getLaneCenter(0), -4500, 30, 50, "false", 2.5),
  new Car(road.getLaneCenter(2), -4100, 30, 50, "false", 3),
  new Car(road.getLaneCenter(1), -4100, 30, 50, "false", 3.5),
  new Car(road.getLaneCenter(2), -4200, 30, 50, "false", 1.5),
  new Car(road.getLaneCenter(1), 3100, 30, 50, "false", 1),
  new Car(road.getLaneCenter(1), 3700, 30, 50, "false", 2.5),
  new Car(road.getLaneCenter(2), 3700, 30, 50, "false", 3),
  new Car(road.getLaneCenter(0), 3700, 30, 50, "false", 4),
  new Car(road.getLaneCenter(2), 3700, 30, 50, "false", 3),
  new Car(road.getLaneCenter(1), -3500, 30, 50, "false", 3.5),
  new Car(road.getLaneCenter(0), -8400, 30, 50, "false", 2.8),
  new Car(road.getLaneCenter(1), -8100, 30, 50, "false", 1.5),
  new Car(road.getLaneCenter(0), -8500, 30, 50, "false", 2.5),
  new Car(road.getLaneCenter(2), -2100, 30, 50, "false", 3),
  new Car(road.getLaneCenter(1), -2100, 30, 50, "false", 3.5),
  new Car(road.getLaneCenter(2), -2200, 30, 50, "false", 1.5),
  new Car(road.getLaneCenter(0), -2400, 30, 50, "false", 2.8),
  new Car(road.getLaneCenter(1), -2100, 30, 50, "false", 1.5),
  new Car(road.getLaneCenter(0), -2500, 30, 50, "false", 2.5),
  new Car(road.getLaneCenter(2), -2100, 30, 50, "false", 3),
  new Car(road.getLaneCenter(1), -4100, 30, 50, "false", 3.5),
  new Car(road.getLaneCenter(2), -4200, 30, 50, "false", 1.5),
  new Car(road.getLaneCenter(0), -4400, 30, 50, "false", 2.8),
  new Car(road.getLaneCenter(1), -4100, 30, 50, "false", 1.5),
  new Car(road.getLaneCenter(0), -4500, 30, 50, "false", 2.5),
];

let bestCar = cars[0];
if (localStorage.getItem("bestBrain")) {
  for (let i = 0; i < cars.length; i++) {
    cars[i].brain = JSON.parse(localStorage.getItem("bestBrain"));
    if (i != 0) {
      NeuralNetwork.mutate(cars[i].brain, 0.0);
    }
  }
}

animate();
function save() {
  localStorage.setItem("bestBrain", JSON.stringify(bestCar.brain));
}

function discard() {
  localStorage.removeItem("bestBrain");
}

function generateCars(N) {
  const cars = [];
  for (let i = 0; i < N; i++) {
    cars.push(new Car(road.getLaneCenter(1), 600, 30, 50, "AI", 10));
  }
  return cars;
}

function animate(time) {
  for (let i = 0; i < traffic.length; i++) {
    traffic[i].update(road.borders, []);
  }
  for (let i = 0; i < cars.length; i++) {
    cars[i].update(road.borders, traffic);
  }
  bestCar = cars.find((c) => c.y == Math.min(...cars.map((c) => c.y)));

  carCanvas.height = window.innerHeight;
  networkCanvas.height = window.innerHeight;

  carCtx.save();
  carCtx.translate(0, -bestCar.y + carCanvas.height * 0.7);

  road.draw(carCtx);
  for (let i = 0; i < traffic.length; i++) {
    traffic[i].draw(carCtx, "red");
  }
  carCtx.globalAlpha = 0.2;
  for (let i = 0; i < cars.length; i++) {
    cars[i].draw(carCtx, "blue");
  }
  carCtx.globalAlpha = 1;
  bestCar.draw(carCtx, "blue", true);
  carCtx.restore();
  networkCtx.lineDashOffset = -time / 50;
  Visualizer.drawNetwork(networkCtx, bestCar.brain);
  requestAnimationFrame(animate);
}
