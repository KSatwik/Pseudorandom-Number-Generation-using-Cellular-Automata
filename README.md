# Pseudorandom-Number-Generation-using-Cellular-Automata

It's a software tool designed to generate pseudorandom numbers using cellular automata. Cellular automata are computational models that can exhibit complex and unpredictable behaviors based on a set of rules and an initial state. In this project, cellular automata are harnessed to create sequences of numbers that appear random, making them suitable for various applications, including cryptography and simulations.

## Why did I do this??

Pseudorandom numbers are essential in a wide range of computer science applications, from cryptography to scientific simulations. This project provides a novel and visually appealing way to generate pseudorandom numbers by leveraging the inherent chaotic nature of cellular automata. It serves as a unique alternative to traditional pseudorandom number generators.

## So how did I do it??


The project is implemented in JavaScript. It utilizes a cellular automaton with a user-defined rule and initial conditions to generate sequences of binary digits. These binary sequences are then converted into decimal numbers, which serve as pseudorandom output. The visualization component allows users to observe how the automaton's evolving states contribute to the generation of these numbers.

## what does the code do??


Here's what the code does:

1. It creates a grid of cells, where each cell represents a state in the cellular automaton.

2. It initializes the cellular automaton with a specified rule (Rule 30) and user-defined grid dimensions.

3. It iterates through the automaton, generating pseudorandom numbers based on the automaton's binary state at each iteration.

4. It updates the grid to visualize the automaton's evolution, with black cells representing "1" and white cells representing "0".

5. It provides a user interface with input fields for specifying the number of rows and columns, allowing users to customize the grid size.

6. It provides a "Start" button to initiate the automaton's evolution and pseudorandom number generation.
   

## Where it can be used??

1. Cryptographic Applications: The generated pseudorandom numbers can be used as cryptographic keys and for other security-related purposes.

2. Simulation and Modeling: We can utilize the pseudorandom numbers for simulations, modeling, and experimental design.

3. Unique Visual Learning Tool: The visual representation of cellular automata in action offers a unique educational tool for understanding both cellular automata and pseudorandom number generation.

4. Algorithmic Exploration: The project enables exploration of different cellular automaton rules and their effects on the generated pseudorandom sequences.

5. Creative Inspiration: Artists and designers can draw inspiration from the visually dynamic patterns created by cellular automata, potentially using them as artistic motifs.
