import React, { useEffect, useState } from 'react';
import { isBoardValid, solve } from '../utils/helper_functions';
import Buttons from './Buttons';
import SudokuTable from './SudokuTable';

const SudokuSolver: React.FC = () => {
  const [sudoku, setSudoku] = useState<number[][] | null>(null);
  const [fetchSudoku, setFetch] = useState<boolean>(true);

  useEffect(() => {
    const sudokuApi = 'https://sudoku-api.vercel.app/api/dosuku';
    function fetchSudoku<T>(url: string): Promise<void | T> {
      return fetch(url).then(response => {
        if(!response) {
          throw new Error('Grid couldnt be fetched');
        }
        return response.json();
      })
      .then(data => {
        let board: number[][] = data.newboard.grids[0].value;
        if(isBoardValid(board)){
          return setSudoku(board);
        }
      })
    };
    fetchSudoku(sudokuApi);
  }, [fetchSudoku])

  const handleSubmit = () => {
    if(sudoku === null){
      return;
    }
    let result: number[][] | null = solve(sudoku);
    setSudoku(result);
  }

  const handleFetch = () => {
    setFetch(!fetchSudoku);
  }

  return (
    <div className='sudoku-root'>
      <h1>Sudoku Solver</h1>
			<div className='div-container'>
					<Buttons handleEvent={handleFetch} value='shuffle'/>
					<Buttons handleEvent={handleSubmit} value='solve'/>
			</div>
			<div className='sudoku-holder'>
      	<SudokuTable sudoku={sudoku} />
			</div>
    </div>
  );
};

export default SudokuSolver;