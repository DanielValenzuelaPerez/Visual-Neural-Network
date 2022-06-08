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
  inputLayer.show(slider.value);
  hiddenLayer.show(slider.value);
  outputLayer.show(slider.value);
  inputToHiddenWeights.show(slider.value);
  hiddenToOutputWeights.show(slider.value);
  /*
  let x1 = windowWidth * 0.2;
  let x2 = windowWidth * 0.5;
  let matrixCols = 2;
  let matrixRows = 4;
  let neuronIndex = 0;
  let y1 = (windowHeight / matrixCols) * neuronIndex + ((windowHeight / matrixCols) * 0.5);
  let y2 = (windowHeight / matrixRows) * neuronIndex + ((windowHeight / matrixRows) * 0.5);
  line(x1,y1,x2,y2);*/
}
/*
+ Move weight
+ Show the weight connections with numbers
 */