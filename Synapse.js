class Synapse{
    constructor(x1, y1, x2, y2){
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
    }
    show(val){
        stroke(255);
        strokeWeight(2);
        line(this.x1, this.y1, this.x2, this.y2);
        
        fill(255);
        textSize(16);
        noStroke();
        textAlign(CENTER, CENTER);
        text(val.toFixed(2), this.x1 + (this.x2 - this.x1)/2, this.y1 + (this.y2 - this.y1)/2);
    }
}