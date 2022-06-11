class Neuron{
    constructor(windowWidth, windowHeight, layer, neuron, neurons){
        this.windowWidth = windowWidth;
        this.windowHeight = windowHeight;
        this.neuron = neuron;
        this.neurons = neurons;
        // Layer 0 = Input, 1 = Hidden, 2 = Output
        
        this.r = 50;

        this.x = layer === 0 ? this.windowWidth * 0.2 : layer === 1 ? this.windowWidth * 0.5 : this.windowWidth * 0.8;
        this.y = (this.windowHeight / this.neurons) * this.neuron + ((this.windowHeight / this.neurons) * 0.5); // Span * 0.5 = offset; y = span * neuron + offset
    }
    show(val){
        fill(0);
        stroke(255);
        strokeWeight(2);
        ellipse(this.x, this.y, this.r);
        
        fill(255);
        textSize(16);
        noStroke();
        textAlign(CENTER, CENTER);
        text(val, this.x, this.y);
    }
}