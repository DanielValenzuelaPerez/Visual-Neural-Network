let _inputData = [[0,0], [0,1], [1,0], [1,1]];
let _targetData = [[0],[1],[1],[0]];
let _hiddenNodes = 4;

let NN;

let inputLayer;
let inputToHiddenWeights;
let hiddenLayer;
let hiddenToOutputWeights;
let outputLayer;

let slider;

function setup() {
  createCanvas(windowWidth, windowHeight - 31);
  NN = new NeuralNetwork(_inputData, _hiddenNodes, _targetData);
  NN.train();

  inputLayer = new Layer(0, NN.inputRecord);
  inputToHiddenWeights = new Weights(0, NN.weightsInputToHiddenRecords);
  hiddenLayer = new Layer(1, NN.hiddenRecord);
  hiddenToOutputWeights = new Weights(1, NN.weightsHiddenToOutputRecords);
  outputLayer = new Layer(2, NN.outputRecord);

  slider = document.getElementById("myRange");
}
function draw(){
  background(0);
  inputToHiddenWeights.show(slider.value);
  hiddenToOutputWeights.show(slider.value);

  inputLayer.show(slider.value);
  hiddenLayer.show(slider.value);
  outputLayer.show(slider.value);
}
/*
+ Fix overlaping of weights
+ Add rectangle around weights
+ Add 100 more records
 */