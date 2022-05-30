const carCanvas = document.getElementById("carCanvas");
carCanvas.width = 250;
const networkCanvas = document.getElementById("networkCanvas");
networkCanvas.width = 300;
const carCtx = carCanvas.getContext("2d");
const networkCtx = networkCanvas.getContext("2d");
const road = new Road(carCanvas.width / 2, carCanvas.width * 0.9);
const N = 1;
doit();
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
function doit() {
  localStorage.setItem(
    "bestBrain",
    JSON.stringify({
      levels: [
        {
          inputs: [0, 0, 0, 0.22496138371532337, 0.5632697435022819],
          outputs: [1, 1, 1, 0, 1, 1],
          biases: [
            -0.04362436546783136, 0.048158498302552484, -0.2301512774826388,
            -0.01289811976079236, -0.26047566883363993, -0.2226075795914357,
          ],
          weights: [
            [
              -0.1418100665832073, -0.027545260071664177, 0.3208216560402711,
              -0.11746834848780037, -0.16244482684810388, 0.09980516303597872,
            ],
            [
              -0.14397667288677143, 0.016828599115257706, 0.1240294402912276,
              -0.17269957926937154, 0.3829421116758293, 0.24415911283481137,
            ],
            [
              0.00517464417761648, 0.05094371657724989, -0.44140610372183037,
              -0.03722208960293835, -0.12302015808387695, -0.2828982700080463,
            ],
            [
              0.21357013771187555, 0.28708866575758246, 0.08799693230405906,
              0.1287310714717016, -0.023200173114644188, -0.0247185864579747,
            ],
            [
              -0.01585657825410492, 0.0006698004580910077, -0.13498886525906875,
              -0.16724205909835882, 0.09624201292212271, -0.2391706813952152,
            ],
          ],
        },
        {
          inputs: [1, 1, 1, 0, 1, 1],
          outputs: [1, 1, 0, 0],
          biases: [
            -0.020002071864622675, 0.1906359195935595, -0.20226021249012488,
            0.0613552780746,
          ],
          weights: [
            [
              -0.11324951058627687, 0.05790621654452307, 0.014852559019618593,
              -0.14661454830361303,
            ],
            [
              0.09385213792060003, 0.46220267878623167, -0.3679339356574563,
              0.01740907766813897,
            ],
            [
              0.13596033977345837, 0.058242144697781266, 0.04175469227385355,
              -0.09587425947568118,
            ],
            [
              0.1116847018960335, -0.20459909683191174, -0.13899752613042,
              0.03287622035091801,
            ],
            [
              0.002050366293459366, -0.2315265814183274, 0.010112448677615442,
              0.18800495496390007,
            ],
            [
              0.21726539202163556, 0.13367122723639727, -0.06953954232709646,
              -0.20803284931419078,
            ],
          ],
        },
      ],
    })
  );
}
doit();

function discard() {
  localStorage.removeItem("bestBrain");
}
doit();

function generateCars(N) {
  const cars = [];
  for (let i = 0; i < N; i++) {
    cars.push(new Car(road.getLaneCenter(1), 600, 30, 50, "AI", 10));
  }
  return cars;
}
doit();
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
