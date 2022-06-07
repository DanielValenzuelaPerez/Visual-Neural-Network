class Matrix{

    constructor(rows, cols){
        this.rows = rows;
        this.cols = cols;
        this.data = new Array(this.rows).fill(0).map(() => new Array(this.cols).fill(0)); // https://stackoverflow.com/questions/18163234/declare-an-empty-two-dimensional-array-in-javascript
    }

    setData(data){
        this.data = data;
        this.rows = this.data.length;
        this.cols = this.data[0].length;
    }

    randomize(){
        this.data = new Array(this.rows).fill(random(1)).map(() => new Array(this.cols).fill(random(1)));
    }
    add(other){
        if(this.rows !== other.rows || this.cols != other.cols){
            print(`Can't add uneven matrices`);
            return;
        }
        for(let i = 0; i < this.rows; i++)
            for(let j = 0; j < this.cols; j++)
                this.data[i][j] += other.data[i][j];
    }
    subtract(other){
        if(this.rows !== other.rows || this.cols != other.cols){
            print(`Can't subtract uneven matrices`);
            return;
        }
        for(let i = 0; i < this.rows; i++)
            for(let j = 0; j < this.cols; j++)
                this.data[i][j] -= other.data[i][j];
    }
    static arrayToMatrix(array){
        let m = new Matrix(array.length , 1);
        for(let i = 0; i < array.length; i++)
            m.data[i][0] = array[i];
        return m;
    }
    static multiply(A, B){
        if(A.cols !== B.rows){
            print(`Can't multiply A.cols (${A.cols}) * B.cols ${B.cols}`);
            return;
        }
        let rows = A.rows;
        let cols = B.cols;

        let newMatrix = new Matrix(rows, cols);
        for(let i = 0; i < rows; i++)
            for(let j = 0; j < cols; j++)
                for(let k = 0; k < A.cols; k++)
                    newMatrix.data[i][j] += A.data[i][k] * B.data[k][j];

        return newMatrix;
    }
    multiplyScalar(scalar){
        for(let i = 0; i < this.rows; i++)
            for(let j = 0; j < this.cols; j++)
                this.data[i][j] *= scalar;
    }
}