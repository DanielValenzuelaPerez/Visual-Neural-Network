class Bias{
    constructor(layer, matrix){
        this.matrix = matrix;
        this.x = layer === 0 ? windowWidth * 0.5 - 30: windowWidth * 0.8 - 30;
        this.y;

        this.matrixCols = this.matrix[0].cols;
        this.matrixRows = this.matrix[0].rows;
    }
    show(record){
        // Text holder (box)
        fill(0);
        stroke(200);
        rectMode(CENTER);
        for(let i = 0; i < this.matrixRows; i++){
            this.y = (windowHeight / this.matrixRows) * i + ((windowHeight / this.matrixRows) * 0.5) + 30;
            rect(this.x, this.y, 50, 20, 5);
        }

        //Text
        fill(200);
        textSize(16);
        noStroke();
        textAlign(CENTER, CENTER);
        for(let i = 0; i < this.matrixRows; i++){
            this.y = (windowHeight / this.matrixRows) * i + ((windowHeight / this.matrixRows) * 0.5) + 30;
            text(this.matrix[record].data[i][0].toFixed(2), this.x, this.y);
        }
    }
}