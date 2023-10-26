// Rule 30
const rule = [0, 1, 1, 1, 0, 1, 1, 0];

// Get the input elements and start button
const numRowsInput = document.getElementById("numRows");
const numColumnsInput = document.getElementById("numColumns");
const startButton = document.getElementById("startButton");

// Create the grid
const gridElement = document.getElementById("grid");

// Function to create the grid with the specified number of rows and columns
function createGrid(rows, columns) {
  gridElement.style.setProperty("--rows", rows);
  gridElement.style.setProperty("--columns", columns);

  const grid = [];
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < columns; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      row.push(cell);
      gridElement.appendChild(cell);
    }
    grid.push(row);
  }

  return grid;
}

// Function to clear the grid
function clearGrid() {
  gridElement.innerHTML = "";
}

// Function to generate pseudorandom numbers and update the grid
function generatePseudorandomNumbers(grid, automaton, numIterations) {
  return new Promise(resolve => {
    let currentRow = 0;

    function generateNextRow() {
      if (currentRow >= numIterations) {
        resolve();
        return;
      }

      let binaryString = "";
      for (const cell of automaton) {
        binaryString += cell.toString();
      }
      const pseudorandomNumber = parseInt(binaryString, 2);
      console.log(pseudorandomNumber);

      // Update the grid
      for (let j = 0; j < grid[0].length; j++) {
        if (automaton[j] === 1) {
          grid[currentRow][j].style.backgroundColor = "black";
        } else {
          grid[currentRow][j].style.backgroundColor = "white";
        }
      }

      // Update the cellular automaton
      const nextAutomaton = [];
      for (let j = 0; j < automaton.length; j++) {
        const left = automaton[(j + automaton.length - 1) % automaton.length];
        const center = automaton[j];
        const right = automaton[(j + 1) % automaton.length];
        const ruleIndex = left * 4 + center * 2 + right;
        nextAutomaton[j] = rule[ruleIndex];
      }
      automaton.splice(0, automaton.length, ...nextAutomaton);

      currentRow++;

      setTimeout(generateNextRow, 100); // Delay for visualization (optional)
    }

    generateNextRow();
  });
}

// Event listener for the start button click
startButton.addEventListener("click", async () => {
  const numRows = parseInt(numRowsInput.value);
  const numColumns = parseInt(numColumnsInput.value);

  // Clear the grid
  clearGrid();

  // Create the grid
  const grid = createGrid(numRows, numColumns);

  // Initialize the cellular automaton
  const automaton = Array.from({ length: numColumns }).fill(0);
  automaton[Math.floor(numColumns / 2)] = 1;

  const numIterations = numRows;

  // Generate pseudorandom numbers and update the grid
  await generatePseudorandomNumbers(grid, automaton, numIterations);

  console.log("Generation complete!");
});
