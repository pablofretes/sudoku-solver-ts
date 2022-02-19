import React, { MouseEventHandler } from 'react';

interface ButtonsType {
    handleEvent: MouseEventHandler<HTMLButtonElement>,
		value: string
};

const Buttons: React.FC<ButtonsType> = ({ handleEvent, value }) => {
    return (
      <button className={`button-sudoku ${value}`} data-testid={`button-${value}`} data-cy={`button-${value}`} onClick={handleEvent}>{value}</button>
    )
};

export default Buttons;