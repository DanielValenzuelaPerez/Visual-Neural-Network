let _inputData = [[0,0], [0,1], [1,0], [1,1]];
let _targetData = [[0],[1],[1],[0]];
let _hiddenNodes = 4;

let NN;

let hiddenData = [[0,0,0,0], [1,1,1,1], [2,2,2,2], [3,3,3,3]];

let inputLayer;
let hiddenLayer;
let outputLayer;

function setup() {
  createCanvas(windowWidth, windowHeight);
  NN = new NeuralNetwork(_inputData, _hiddenNodes, _targetData);
  NN.train();

  print(NN.inputRecord[0]);

  inputLayer = new Layer(0, NN.inputRecord);
  hiddenLayer = new Layer(1, NN.hiddenRecord);
  outputLayer = new Layer(2, NN.outputRecord);
}
function draw(){
  background(0);
  inputLayer.show();
  hiddenLayer.show();
  outputLayer.show();
}