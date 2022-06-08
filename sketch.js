let _inputData = [[0,0], [0,1], [1,0], [1,1]];
let _targetData = [[0],[1],[1],[0]];
let _hiddenNodes = 4;

let NN;

let hiddenData = [[0,0,0,0], [1,1,1,1], [2,2,2,2], [3,3,3,3]];

let inputLayer;
let hiddenLayer;
let outputLayer;

let slider;

function setup() {
  createCanvas(windowWidth, windowHeight - 31);
  NN = new NeuralNetwork(_inputData, _hiddenNodes, _targetData);
  NN.train();

  inputLayer = new Layer(0, NN.inputRecord);
  hiddenLayer = new Layer(1, NN.hiddenRecord);
  outputLayer = new Layer(2, NN.outputRecord);

  slider = document.getElementById("myRange");
}
function draw(){
  background(0);
  inputLayer.show(slider.value);
  hiddenLayer.show(slider.value);
  outputLayer.show(slider.value);
}
/*
- Record 100 iterations
- Add slider (html) 0 - 99 (100 records)
- Show records depending on slider
 */