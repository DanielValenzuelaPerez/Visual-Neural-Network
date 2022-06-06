class NeuralNetwork{

    constructor(inputData, hiddenNodes, targetData){
        this.inputData = inputData;
        this.targetData = targetData;

        this.inputNodes = this.inputData[0].length;
        this.hiddenNodes = hiddenNodes;
        this.outputNodes = this.targetData[0].length;

        this.inputsMatrix;
        this.targetsMatrix;
        this.hiddensMatrix;
        this.outputsMatrix;

        this.weightsInputToHiddenMatrix;
        this.weightsHiddenToOutputMatrix;
        this.biasHiddenMatrix;
        this.biasOutputMatrix;

        this.learningRate = 0.1;
        this.iterations = 5;
        this.iteration = 0;
        this.error;

        this.showProgress = false;
    }

    train(){
        while(this.iteration <= this.iterations){
            const r = round(random(this.inputData.length));
            this.inputsMatrix = this.inputData[r];
            this.targetsMatrix = this.targetData[r];
            print(this.inputsMatrix);
            print(this.targetsMatrix);
            this.iteration++;
        }
    }
}