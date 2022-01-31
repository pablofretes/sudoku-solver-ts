import React from 'react';

interface TableType {
    sudoku: number[][] | null
}

const SudokuTable: React.FC<TableType> = ({ sudoku }) => {
    return(
        <table className='sudoku-container' data-testid='table-sudoku'>
            <tbody data-testid='table-body'>
                {sudoku === null ? null : sudoku.map((row, index) => {
                return (
                    <tr key={index} >
                    {row.map((number, index) => {
                        return (
                        <td className='sudoku-number' key={index}>
                            {number === 0 ? null : number}
                        </td>
                        )
                    })}
                    </tr>
                )})}
            </tbody>
      </table>
    )
};

export default SudokuTable;