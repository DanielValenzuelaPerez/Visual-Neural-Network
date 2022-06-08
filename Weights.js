class Weights{
    constructor(layer, matrix){
        this.synapses = [];
        // Draw lines from a 4x2 matrix
        this.matrix = matrix;
        this.x1 = layer === 0 ? windowWidth * 0.2 : windowWidth * 0.5;
        this.x2 = layer === 0 ? windowWidth * 0.5 : windowWidth * 0.8;
        this.matrixCols = this.matrix[0].cols;
        this.matrixRows = this.matrix[0].rows;
        this.y1;
        this.y2;
        for(let i = 0; i < this.matrixCols; i++){
            for(let j = 0; j < this.matrixRows; j++){
                this.y1 = (windowHeight / this.matrixCols) * i + ((windowHeight / this.matrixCols) * 0.5);
                this.y2 = (windowHeight / this.matrixRows) * j + ((windowHeight / this.matrixRows) * 0.5);
                let s = new Synapse(this.x1, this.y1, this.x2, this.y2);
                this.synapses.push(s);
            }
        }
        print(this.matrix);
    }
    show(record){
        let val = []
        for(let i = 0; i < this.matrix[record].cols; i++){
            for(let j = 0; j < this.matrix[record].rows; j++){
                val.push(this.matrix[record].data[j][i]);
            }
        }
        for(let i = 0; i < this.synapses.length; i++){
            this.synapses[i].show(val[i]);
        }
    }
}