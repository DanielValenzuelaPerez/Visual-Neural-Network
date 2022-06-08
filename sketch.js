let _inputData = [[0,0], [0,1], [1,0], [1,1]];
let _targetData = [[0],[1],[1],[0]];
let _hiddenNodes = 4;

let NN;

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
  // Draw lines from a 4x2 matrix
  stroke(255);
  strokeWeight(2);
  let x1;
  let x2;
  let matrixCols = 2;
  let matrixRows = 4;
  let neuronIndex;
  let y1;
  let y2;
  for(let i = 0; i < matrixCols; i++){
    x1 = windowWidth * 0.2;
    x2 = windowWidth * 0.5
    for(let j = 0; j < matrixRows; j++){
      y1 = (windowHeight / matrixCols) * i + ((windowHeight / matrixCols) * 0.5);
      y2 = (windowHeight / matrixRows) * j + ((windowHeight / matrixRows) * 0.5);
      line(x1,y1,x2,y2);
    }
  }/*
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
+ Save weight records
+ Display weight connections
 */