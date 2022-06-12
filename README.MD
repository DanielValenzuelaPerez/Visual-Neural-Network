# Visual Representation of an Artificial Neural Network as it Learns
> This project displays the neurons and connections of an Artificial Neural Network as it is being trained to learn the XOR table.

Interact with [my project!](https://danielvalenzuelaperez.github.io/Visual-Neural-Network/ "GitHub Pages")

## About

This render of the Artificial Neural Network is being trained on the XOR table.

### XOR Table

| Input | Target Output |
| ----- | ------------- |
| 0 , 0 | 0 |
| 0 , 1 | 1 |
| 1 , 0 | 1 |
| 1 , 1 | 0 |

The Artificial Neural Network is trained on the **Input** and **Target Output**.

The project used the mathematical models behind the theory of real Neural Networks. On the front end, to draw the display I use the P5.JS library.

![Untitled](https://user-images.githubusercontent.com/101780195/173217550-20b72e91-494a-4203-9ce5-d202d54c7d6d.gif)

*One of the current challenges I face is that I’m having troubles to animate the flow of information from layer to layer, in both: the feed forward and back propagation of the Artificial Neural Network.*

The model has three layers:
1. Input Layer
    - Two neurons, each receives a value (0 or 1)
1. Hidden Layer
    - Four neurons, each one is connected to every **Input Layer's** neurons
    - Each neuron uses the sigmoid activation function
1. Output Layer
    - One neuron which is connected to each **Hidden Layer's** neurons
    - It uses the sigmoid activation function as well
* Weights
    - Between each layer, each neuron is forwardly connected with the next layer's neurons
    - The weight of each connection (synopsis), is represented as a line and a box above each line
    - The stroke of the line changes as the weight grows
    - The color of the line represents the status of the Artificial Neural Network:
        - Green: **Feed Forward**
        - Red: **Back Propagation**
* Bias
    - Represented as the box bellow each neuron in the **hidden** and **output** layer
    - Importance of the [bias](https://stackoverflow.com/questions/2480650/what-is-the-role-of-the-bias-in-neural-networks "Stack OverFlow Post")

### Flow Chart

![ANN Flow Diagram English](https://user-images.githubusercontent.com/101780195/173217721-341689c9-af55-40c3-8f87-a56237963d0d.png)

## Credits

* Artificial Intelligence Professor José Antonio Aviña Méndez at Instituto Tecnológico Superior de Zapopan.

* Daniel Shiffman P5.JS tutorial from YouTube: [The Coding Train](https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw "YouTube Channel")

* [Guide](https://www.freecodecamp.org/news/how-to-write-a-good-readme-file/ "Blog Post") on how to write a readme file.

## License 
MIT License

---

#### *(June 11, 2022)*

### Motivation behind the project

The project was certainly eye opening for me. The goal of the project was to learn a very basic thing: from one input, learn a specific output. When it succeeded, I tried to see if it worked with the XOR table – and it did!
Then I tried with real data from some cancer records, and it worked as well! 

### Why the project was built

I wanted to visually see a representation of the artificial neural network as it learned, see the layers and the connections between each neuron, to update the synapse and its weights, and to see how the output is getting more accurate as it is being trained.
What problem does it solve?
This particular artificial neural network learns the XOR table. As I wanted it to be simple and I didn’t want to work with real data, as it is hard to understand. But it certainly would work!

### What did I learn?

I learned a lot with this project. It is certainly my first dive into Data Science and it was a very gratifying experience. Specially because it was developed with mathematical models with the help of a university professor (José Antonio Aviña Méndez). Seeing how it can be trained and learn by itself - It’s almost like magic!

### What makes your project stand out?

That it is a visual representation of an artificial neural network at work!
