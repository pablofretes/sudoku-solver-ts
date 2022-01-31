import React, { MouseEventHandler } from 'react';

interface ButtonsType {
    handleFetch: MouseEventHandler<HTMLButtonElement>,
    handleSubmit: MouseEventHandler<HTMLButtonElement>
};

const Buttons: React.FC<ButtonsType> = ({ handleFetch, handleSubmit }) => {
    return (
        <div className='div-container'>
            <div className='button-container'>
            <button className='button-sudoku shuffle' data-testid='button-shuffle' data-cy='button-shuffle' onClick={handleFetch}>Shuffle</button>
            </div>
            <div className='button-container'>
            <button className='button-sudoku solve' data-testid='button-solve' data-cy='button-solve' onClick={handleSubmit}>Solve</button>
            </div>
      </div>
    )
};

export default Buttons;