/**
 * Function to compute the next state of a cell based on its current state and its neighbors.
 * 
 * @param {number} cellLife - The current state of the cell (0 or 1).
 * @param {number[]} ArrayOfNeighbours - The states of the neighboring cells.
 * @returns {number} - The new state of the cell (0 or 1).
 */
var cellAfterLife = (cellLife, ArrayOfNeighbours) => {
    let zeros = 0;  // Count of dead neighbors
    let ones = 0;   // Count of live neighbors

    // Count live and dead neighbors
    for (const life of ArrayOfNeighbours) {
        if (life === 0) {
            zeros++;
        } else {    
            ones++;
        }
    }

    // Rules for dead cells
    if (cellLife === 0 && ones === 3) return 1; // Dead cell becomes live if exactly 3 neighbors are alive

    // Rules for live cells
    if (cellLife === 1) {
        if (ones === 2 || ones === 3) return 1; // Live cell stays alive if it has 2 or 3 live neighbors
        if (zeros < 2 || zeros > 3) return 0; // Live cell dies if it has fewer than 2 or more than 3 live neighbors
    }

    return 0; // Return 0 if no other rules apply (i.e., the cell remains dead)
};

/**
 * Function to fetch the neighbors of a given cell.
 * 
 * @param {number} cellIndex - The index of the cell in its row.
 * @param {number[]} cellRow - The current row of the cell.
 * @param {number[]} upperRow - The row above the cell (if it exists).
 * @param {number[]} lowerRow - The row below the cell (if it exists).
 * @returns {number[]} - Array containing the states of the neighboring cells.
 */
var fetchNeighbours = (cellIndex, cellRow, upperRow, lowerRow) => {
    let ArrayOfNeighbours = [];

    // Helper function to add a value to neighbors if it is defined
    const addIfDefined = (value) => {
        if (value !== undefined) {
            ArrayOfNeighbours.push(value);
        }
    };

    // Add neighbors from the current row
    if (cellIndex !== 0) addIfDefined(cellRow[cellIndex - 1]); // Left neighbor
    if (cellIndex !== cellRow.length - 1) addIfDefined(cellRow[cellIndex + 1]); // Right neighbor

    // Add neighbors from the upper row
    if (upperRow) {
        addIfDefined(upperRow[cellIndex]); // Directly above
        if (cellIndex !== 0) addIfDefined(upperRow[cellIndex - 1]); // Upper-left
        if (cellIndex !== cellRow.length - 1) addIfDefined(upperRow[cellIndex + 1]); // Upper-right
    }

    // Add neighbors from the lower row
    if (lowerRow) {
        addIfDefined(lowerRow[cellIndex]); // Directly below
        if (cellIndex !== 0) addIfDefined(lowerRow[cellIndex - 1]); // Lower-left
        if (cellIndex !== cellRow.length - 1) addIfDefined(lowerRow[cellIndex + 1]); // Lower-right
    }

    return ArrayOfNeighbours; // Return the array of neighbors
};

/**
 * Function to compute the next state of the board in the Game of Life.
 * 
 * @param {number[][]} board - The current state of the board.
 * @returns {number[][]} - The new state of the board.
 */
var gameOfLife = function (board) {
    const newBoard = [];

    // Iterate over each row and cell in the board
    for (let i = 0; i < board.length; i++) {
        const newSubBoard = [];

        for (let j = 0; j < board[i].length; j++) {
            // Fetch the neighbors of the current cell
            const neighbors = fetchNeighbours(j, board[i], board[i - 1], board[i + 1]);
            
            // Compute the next state of the current cell
            const cell = cellAfterLife(board[i][j], neighbors);
            
            // Push the new cell state to the sub-board
            newSubBoard.push(cell);
        }

        // Push the updated sub-board to the new board
        newBoard.push(newSubBoard);
    }

    // Copy the new state back to the original board
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            board[i][j] = newBoard[i][j];
        }
    }

    return board; // Return the updated board
};