var cellAfterLife = (cellLife,ArrayOfNeighbours) => {
    let zeros = 0
    let ones = 0
    for(const life of ArrayOfNeighbours){
        if(life === 0){
            zeros++
        }else{    
            ones++
        }
    }
    if(cellLife===0 && ones === 3) return 1
    if(cellLife===1){
        if(ones === 2 || ones === 3) return 1
        else if(zeros < 2 || zeros > 3) return 0
    }
    return 0
}
var fetchNeighbours = (cellIndex, cellRow, upperRow, lowerRow) => {
    let ArrayOfNeighbours = [];
    const addIfDefined = (value) => {
        if (value !== undefined) {
            ArrayOfNeighbours.push(value);
        }
    };
    if (cellIndex === 0) {
        addIfDefined(cellRow[cellIndex + 1]);
    }
    if (cellIndex === cellRow.length - 1) {
        addIfDefined(cellRow[cellIndex - 1]);
    }
    if (cellIndex !== 0 && cellIndex !== cellRow.length - 1) {
        addIfDefined(cellRow[cellIndex - 1]);
        addIfDefined(cellRow[cellIndex + 1]);
    }
    if (upperRow) {
        if (cellIndex === 0) {
            addIfDefined(upperRow[cellIndex + 1]);
            addIfDefined(upperRow[cellIndex]);
        }
        if (cellIndex === cellRow.length - 1) {
            addIfDefined(upperRow[cellIndex]);
            addIfDefined(upperRow[cellIndex - 1]);
        }
        if (cellIndex !== 0 && cellIndex !== cellRow.length - 1) {
            addIfDefined(upperRow[cellIndex - 1]);
            addIfDefined(upperRow[cellIndex]);
            addIfDefined(upperRow[cellIndex + 1]);
        }
    }
    if (lowerRow) {
        if (cellIndex === 0) {
            addIfDefined(lowerRow[cellIndex + 1]);
            addIfDefined(lowerRow[cellIndex]);
        }
        if (cellIndex === cellRow.length - 1) {
            addIfDefined(lowerRow[cellIndex]);
            addIfDefined(lowerRow[cellIndex - 1]);
        }
        if (cellIndex !== 0 && cellIndex !== cellRow.length - 1) {
            addIfDefined(lowerRow[cellIndex - 1]);
            addIfDefined(lowerRow[cellIndex]);
            addIfDefined(lowerRow[cellIndex + 1]);
        }
    }
    return ArrayOfNeighbours;
};
var gameOfLife = function(board) {
    const newBoard = [];
    for (let i = 0; i < board.length; i++) {
        const newSubBoard = []
        for (let j = 0; j < board[i].length; j++) {
            const neighbors = fetchNeighbours(j, board[i], board[i - 1], board[i + 1]);
            const cell = cellAfterLife(board[i][j],neighbors)
            newSubBoard.push(cell)
        }
        newBoard.push(newSubBoard)
    }
    for (let i = 0; i < board.length; i++){
        for (let j = 0; j < board[i].length; j++) {
            board[i][j] = newBoard[i][j]
        };
    }
    return board
}
const board = [[1],[0],[1],[1],[1],[0]]
console.log(gameOfLife(board))