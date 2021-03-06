class NeuralNetwork{
    
    constructor(inputData, hiddenNodes, targetData){
        this.inputData = inputData;
        this.targetData = targetData;

        this.inputNodes = this.inputData[0].length;
        this.hiddenNodes = hiddenNodes;
        this.outputNodes = this.targetData[0].length;

        this.inputs;
        this.targets
        this.hiddens;
        this.outputs;

        this.weightsInputToHidden = new Matrix(this.hiddenNodes, this.inputNodes);
        this.weightsHiddenToOutput = new Matrix(this.outputNodes, this.hiddenNodes);
        this.biasHidden = new Matrix(this.hiddenNodes, 1);
        this.biasOutput = new Matrix(this.outputNodes, 1);

        this.weightsInputToHidden.randomize();
        this.weightsHiddenToOutput.randomize();
        this.biasHidden.randomize();
        this.biasOutput.randomize();

        this.learningRate = 0.1;
        this.iterations = 20000;
        this.iteration = 0;
        this.error = 0;

        this.showProgress = false;

        this.inputRecord = [];
        this.weightsInputToHiddenRecords = [];
        this.biasHiddenRecords = [];
        this.hiddenRecord = [];
        this.weightsHiddenToOutputRecords = [];
        this.biasOutputRecords = [];
        this.outputRecord = [];
    }

    train(){
        while(this.iteration < this.iterations){
            const r = floor(random(this.inputData.length));
            this.inputs = Matrix.arrayToMatrix(this.inputData[r]);
            this.targets = Matrix.arrayToMatrix(this.targetData[r]);
            
            this.feedForward();
            this.saveRecords(); // Changes after feed forward
            this.calculateTheError();
            this.backPropagation();
            this.saveRecords(); // Changes after back propagation

            this.printProgress();

            this.iteration++;
        }
    }

    feedForward(){
        // Generating the hiddens' output Sig([W]*[I] + [B])
        this.hiddens = Matrix.multiply(this.weightsInputToHidden, this.inputs);
        this.hiddens.add(this.biasHidden);
        this.hiddens = this.toSigmoid(this.hiddens);
        
        // Generating the outputs' output Sig([W]*[H] + [B])
        this.outputs = Matrix.multiply(this.weightsHiddenToOutput, this.hiddens);
        this.outputs.add(this.biasOutput);
        this.outputs = this.toSigmoid(this.outputs);
    }

    toSigmoid(matrix){
        for(let i = 0; i < matrix.rows; i++)
            matrix.data[i][0] = 1 /(1 + Math.exp(-matrix.data[i][0]));
        return matrix;
    }
    
    calculateTheError(){
        this.error = 0;
        for(let i = 0; i < this.targets.rows; i++)
            this.error += Math.pow(this.outputs.data[i][0] - this.targets.data[i][0], 2) // (O - T)^2
    }
    
    backPropagation(){
        let gradientsHiddenWeights = this.getGradientsHidden(false);
        let gradientsHiddenBias = this.getGradientsHidden(true);
        let gradientsOutputWeights = this.getGradientsOutput(false);
        let gradientsOutputBias = this.getGradientsOutput(true);

        gradientsHiddenWeights.multiplyScalar(this.learningRate);
        gradientsHiddenBias.multiplyScalar(this.learningRate);
        gradientsOutputWeights.multiplyScalar(this.learningRate);
        gradientsOutputBias.multiplyScalar(this.learningRate);

        this.weightsInputToHidden.subtract(gradientsHiddenWeights);
        this.biasHidden.subtract(gradientsHiddenBias);
        this.weightsHiddenToOutput.subtract(gradientsOutputWeights);
        this.biasOutput.subtract(gradientsOutputBias);
    }

    getGradientsHidden(isForBias){
        let gradients = isForBias ? new Matrix(this.biasHidden.rows, this.biasHidden.cols) : new Matrix(this.weightsInputToHidden.rows, this.weightsInputToHidden.cols);

        for(let i = 0; i < gradients.cols; i++)
            for(let j = 0; j < gradients.rows; j++){
                for(let k = 0; k < this.weightsHiddenToOutput.rows; k++){
                    gradients.data[j][i] += this.weightsHiddenToOutput.data[k][j] * this.outputs.data[k][0] * (1 - this.outputs.data[k][0]) * 2 * (this.outputs.data[k][0] - this.targets.data[k][0]);
                }
                let dz_d = isForBias ? 1 : this.inputs.data[i][0];
                gradients.data[j][i] *= this.hiddens.data[j][0] * (1 - this.hiddens.data[j][0]) * dz_d;
            }
        return gradients;
    }

    getGradientsOutput(isForBias){
        let gradients = isForBias ? new Matrix(this.biasOutput.rows, this.biasOutput.cols) : new Matrix(this.weightsHiddenToOutput.rows, this.weightsHiddenToOutput.cols);

        for(let i = 0; i < gradients.cols; i++)
            for(let j = 0; j < gradients.rows; j++){
                let dz_d = isForBias ? 1 : this.hiddens.data[i][0];
                gradients.data[j][i] = 2 * (this.outputs.data[j][0] - this.targets.data[j][0]) * this.outputs.data[j][0] * (1 - this.outputs.data[j][0]) * dz_d;
            }
        
        return gradients;
    }

    printProgress(){
        if(this.iteration % (this.iterations / 200) === 0 && this.showProgress){ // Shows 200 TOTAL records
            print(`[${this.inputs.data[0][0]}, ${this.inputs.data[1][0]}] = ${this.outputs.data[0][0].toFixed(2)}, (${this.error.toFixed(4)})`);
            print(`${this.weightsInputToHidden.data[0][0]}`);
        }
    }
    saveRecords(){
        if(this.iteration % (this.iterations / 200) === 0){ // Saves twice in code: after feedforward and after back propagation. It saves 200*2 records
            this.inputRecord.push(this.inputs);
            this.weightsInputToHiddenRecords.push(JSON.parse(JSON.stringify(this.weightsInputToHidden))); // Make a deep push (https://youtu.be/EeZBKv34mm4)
            this.biasHiddenRecords.push(JSON.parse(JSON.stringify(this.biasHidden)));
            this.hiddenRecord.push(this.hiddens);
            this.weightsHiddenToOutputRecords.push(JSON.parse(JSON.stringify(this.weightsHiddenToOutput)));
            this.biasOutputRecords.push(JSON.parse(JSON.stringify(this.biasOutput)));
            this.outputRecord.push(this.outputs);
        }
    }
}