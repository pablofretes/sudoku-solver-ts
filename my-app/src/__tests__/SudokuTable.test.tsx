import { render, screen } from "@testing-library/react";
import SudokuTable from '../components/SudokuTable';

describe('SudokuTable', () => {
    it('should render', () => {
        render(<SudokuTable sudoku={null}/>);
        expect(screen.getByTestId("table-sudoku")).toBeDefined();
        expect(screen.getByTestId("table-body")).toBeDefined();
    });
});