class Layer{
    constructor(layer, matrixRecords){
        this.layer = layer;
        this.matrixRecords = matrixRecords;
        this.neurons = [];
        this.neuronsInLayer = matrixRecords[0].rows;
        for(let i = 0; i < this.neuronsInLayer; i++){
            let n = new Neuron(width, height, layer, i, this.neuronsInLayer);
            this.neurons.push(n);
        }
    }
    show(record){
        for(let i = 0; i < this.neurons.length; i++)
            this.neurons[i].show(this.matrixRecords[record].data[i][0].toFixed(2));
    }
}