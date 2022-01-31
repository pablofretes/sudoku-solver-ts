import { render, screen } from "@testing-library/react";
import SudokuSolver from '../components/SudokuSolver';

describe('SudokuSolver', () => {
    it('should render', () => {
        render(<SudokuSolver/>);
        expect(screen.getByText("Sudoku Solver")).toBeDefined();
    });
});