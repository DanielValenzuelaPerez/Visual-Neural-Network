class Synapse{
    constructor(x1, y1, x2, y2){
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
    }
    show(val, isFeedForward){
        stroke(255, 0, 0);
        if(isFeedForward) stroke(0,255,0)
        let weight = map(Math.abs(val), 0, 8, 0.5, 3.5);
        strokeWeight(weight);
        line(this.x1, this.y1, this.x2, this.y2);

        let textX = this.x1 + (this.x2 - this.x1)/4;
        let textY = this.y1 + (this.y2 - this.y1)/4;
        
        // Text holder (box)
        fill(0);
        stroke(255);
        strokeWeight(1.2);
        rectMode(CENTER);
        rect(textX, textY-1, 40, 16, 5);

        //Text
        fill(255);
        textSize(12);
        noStroke();
        textAlign(CENTER, CENTER);
        text(val.toFixed(2), textX, textY);
    }
}