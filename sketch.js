let _inputData = [[0,0], [0,1], [1,0], [1,1]];
let _targetData = [[0],[1],[1],[0]];
let _hiddenNodes = 4;
let NN;

function setup() {
  createCanvas(200, 200);
  NN = new NeuralNetwork(_inputData, _hiddenNodes, _targetData);
  NN.train();
}

function draw() {
  background(220);
}
