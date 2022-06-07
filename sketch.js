let _inputData = [[0,0], [0,1], [1,0], [1,1]];
let _targetData = [[0],[1],[1],[0]];
let _hiddenNodes = 4;
let NN;

//let neurons = []

let inputLayer;
let hiddenLayer = [[0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0]];
let outputLayer;

function setup() {
  createCanvas(windowWidth, windowHeight);
  inputLayer = new Layer(0, _inputData);
  hiddenLayer = new Layer(1, hiddenLayer);
  outputLayer = new Layer(2, _targetData);
  /*
  class Layer{
    constructor(layer, matrixRecords){
      let neurons = [];
      let neuronsInLayer = matrixRecords[0].length;
      for(let i = 0; i < neurons; i++){
        let n = new Neuron(width, height, layer, i, neuronsInLayer);
        neurons.push(n);
      }
    }
    show(){
      for(let i = 0; i < neurons.length; i++)
        neurons[i].show();
    }
  }
   */
  /*
  let inputLayer = new Layer(0, NN.inputsRecords);
  let hiddenLayer = new Layer(1, NN.hiddensRecords);
  let outputLayer = new Layer(2, NN.outputsRecords);
   */
  /*
  // Input layer
  let layer = 0;
  for(let i = 0; i < _inputData[0].length; i++){
    let n = new Neuron(width, height, layer, i, _inputData[0].length);
    neurons.push(n);
  }
  layer = 1
  for(let i = 0; i < _hiddenNodes; i++){
    let n = new Neuron(width, height, layer, i, _hiddenNodes);
    neurons.push(n);
  }
  layer = 2
  for(let i = 0; i < _targetData[0].length; i++){
    let n = new Neuron(width, height, layer, i, _targetData[0].length);
    neurons.push(n);
  }
  */
  /*
  for(let i = 0; i < 3; i++)
    for(let j = 0; j < 5; j++){
      let neuron = new Neuron(width, height, i, j, 5);
      neurons.push(neuron);
    }*/
  //NN = new NeuralNetwork(_inputData, _hiddenNodes, _targetData);
  //NN.train();
}
function draw(){
  background(0);
  inputLayer.show();
  hiddenLayer.show();
  outputLayer.show();
  //for(let i = 0; i < neurons.length; i++)
  //  neurons[i].show();
}