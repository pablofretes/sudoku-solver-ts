export const solve = (board: number[][]) => {
  if(solved(board)){
    return board;
  } else {
    const possibilities = nextBoards(board);
    const validBoards = obtainValidBoards(possibilities);
    return searchForSolution(validBoards);
  }
};

const searchForSolution: any = (boards: any) => {
  //if there are no more possible boards, the algorithm
  //couldn't find a solution so we return false
  if(boards.length < 1){
    return false;
  } else {
    //we extract the first possible board from the array
    //and try to solve it, if it gets solved we return it
    //if it doesn't we run this function again on the remaining boards
    let firstPossibility = boards.shift();
    const tryPossibility = solve(firstPossibility);
    if(tryPossibility){
      return tryPossibility;
    } else {
      return searchForSolution(boards);
    }
  }
};

const solved = (board: number[][]) => {
  //if no square contains a 0 the board is solved
  for(let i = 0; i < 9; i++){
    for(let j = 0; j < 9; j++){
      if(board[i][j] === 0){
        return false;
      }
    }
  }

  return true;
};

const nextBoards = (board: number[][]) => {
  let allPossibleBoards = [];
  const firstEmptySquare = obtainFirstEmptySquare(board);

  if(firstEmptySquare) {
    //if we get a valid value from obtainFirstEmptySquare
    //we extract those coordinates and make 9 possible boards
    //afterwards we return them and validate them
    const y = firstEmptySquare[0];
    const x = firstEmptySquare[1];

    for(let i = 1; i <= 9; i++){
      let newBoard = [...board];
      let row = [...newBoard[y]];
      row[x] = i;
      newBoard[y] = row;
      allPossibleBoards.push(newBoard);
    }
  }

  return allPossibleBoards;
};

const obtainFirstEmptySquare = (board: number[][]) => {
  //if a square contains value 0, the board is not solved
  //so we obtain the first 0 and return its coordinates
  for(let i = 0; i < 9; i++){
    for(let j = 0; j < 9; j++){
      if(board[i][j] === 0){
        return [i, j];
      }
    }
  }
};

const obtainValidBoards = (boards: number[][][]) => {
  let validBoardsArray = [];
  for(let i = 0; i < boards.length; i++){
    //we pass every possible board through a validation function
    //the boards that are valid are returned
    if(isBoardValid(boards[i])){
      validBoardsArray.push(boards[i]);
    }
  }
    
  return validBoardsArray;
};

export const isBoardValid = (board: number[][]) => {
  //check every row
  for(let i = 0; i < 9; i++){
    let currentRow: number | number[] = [];
    for(let j = 0; j < 9; j++){
      //if this row already contains the iterated value
      //then this board is not valid
      if(currentRow.includes(board[i][j])){
        return false;
      } else if (board[i][j] !== 0){
        //if it doesnt we add the value to the row
        currentRow.push(board[i][j]);
      }
    }
  }

  //check every column
  for(let i = 0; i < 9; i++){
    let currentColumn: number | number[] = [];
      for(let j = 0; j < 9; j++){
        //if this column already contains the iterated value
        //then this board is not valid
        if(currentColumn.includes(board[j][i])){
          return false;
        } else if (board[j][i] !== 0){
          //if it doesnt we add the value to the column
          currentColumn.push(board[j][i]);
        }
      }
  }

  //these 9 coordinates are always the first 3x3 square in a sudoku board
  const firstSquare = [
    [0, 0], [0, 1], [0, 2],
    [1, 0], [1, 1], [1, 2],
    [2, 0], [2, 1], [2, 2]
  ];

  //check every square
  for(let y = 0; y < 9; y += 3){
    for(let x = 0; x < 9; x += 3){
      let currentSquare: number | number[] = [];
        for(let i = 0; i < 9; i++){
          //if this square already contains the iterated value
          //then this board is not valid
          let coordinates = [...firstSquare[i]];
          coordinates[0] += y;
          coordinates[1] += x;
          if(currentSquare.includes(board[coordinates[0]][coordinates[1]])){
            return false;
          } else if (board[coordinates[0]][coordinates[1]] !== 0){
            //if it doesnt we add the value to the square
            currentSquare.push(board[coordinates[0]][coordinates[1]]);
          }
        }
    }
  }
  
  //if none of the for loops returned false then the board is valid and we return true
  return true;
};