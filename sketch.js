let _inputData = [[0,0], [0,1], [1,0], [1,1]];
let _targetData = [[0],[1],[1],[0]];
let _hiddenNodes = 4;

let NN;

let inputLayer;
let inputToHiddenWeights;
let biasHidden;
let hiddenLayer;
let hiddenToOutputWeights;
let biasOutput;
let outputLayer;

let slider;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight - 31); //windowWidth, windowHeight - 31
  canvas.parent('canvascontainer');
  NN = new NeuralNetwork(_inputData, _hiddenNodes, _targetData);
  NN.train();

  // Input Layer
  inputLayer = new Layer(0, NN.inputRecord);
  inputToHiddenWeights = new Weights(0, NN.weightsInputToHiddenRecords);
  biasHidden = new Bias(0, NN.biasHiddenRecords);
  // Hidden Layer
  hiddenLayer = new Layer(1, NN.hiddenRecord);
  hiddenToOutputWeights = new Weights(1, NN.weightsHiddenToOutputRecords);
  biasOutput = new Bias(1, NN.biasOutputRecords);
  // Output Layer
  outputLayer = new Layer(2, NN.outputRecord);

  slider = document.getElementById("myRange");
  setInterval(function(){slider.value++}, 500) // 0.5 sec intervals
}
function draw(){
  background(0);
  textSize(20);
  textAlign(LEFT);
  text("Artificial Neural Network", 50, 50);
  textSize(16);
  textAlign(RIGHT);
  text("Made by Daniel Valenzuela", windowWidth - 50, windowHeight - 60);

  inputToHiddenWeights.show(slider.value);
  hiddenToOutputWeights.show(slider.value);

  inputLayer.show(slider.value);
  hiddenLayer.show(slider.value);
  outputLayer.show(slider.value);
  
  biasHidden.show(slider.value);
  biasOutput.show(slider.value);
}
/*
Found something interesting: Bias auto adjust to the screen size. Maybe I would like for everything else to auto adjust too
+ Made some finishing touches to make it presentable, still there's alot of work to be done (presentantion wise)
 */