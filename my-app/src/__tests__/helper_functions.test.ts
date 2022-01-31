import { solve } from '../utils/helper_functions';

test('solve returns false if invalid sudoku board', () => {
    const badSudoku = [
        [1, 2, 3, 4, 5, 6, 7, 8, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 2],
        [0, 0, 0, 0, 0, 0, 0, 0, 3],
        [0, 0, 0, 0, 0, 0, 0, 0, 4],
        [0, 0, 0, 0, 0, 0, 0, 0, 5],
        [0, 0, 0, 0, 0, 0, 0, 0, 6],
        [0, 0, 0, 0, 0, 0, 0, 0, 7],
        [0, 0, 0, 0, 0, 0, 0, 0, 8],
        [0, 0, 0, 0, 0, 0, 0, 0, 9],
    ];

    const solution = solve(badSudoku);
    expect(solution).toEqual(false);
});

test('solve returns a solved board if valid sudoku board', () => {
    const goodSudoku = [
        [1, 2, 3, 4, 5, 6, 7, 8, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 2],
        [0, 0, 0, 0, 0, 0, 0, 0, 3],
        [0, 0, 0, 0, 0, 0, 0, 0, 4],
        [0, 0, 0, 0, 0, 0, 0, 0, 5],
        [0, 0, 0, 0, 0, 0, 0, 0, 6],
        [0, 0, 0, 0, 0, 0, 0, 0, 7],
        [0, 0, 0, 0, 0, 0, 0, 0, 8],
    ];

    const result = [
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [4, 5, 7, 2, 8, 9, 3, 6, 1],
        [6, 8, 9, 1, 3, 7, 4, 5, 2],
        [2, 1, 4, 5, 6, 8, 9, 7, 3],
        [3, 6, 5, 7, 9, 1, 8, 2, 4],
        [7, 9, 8, 3, 2, 4, 6, 1, 5],
        [5, 4, 1, 8, 7, 3, 2, 9, 6],
        [8, 3, 6, 9, 1, 2, 5, 4, 7],
        [9, 7, 2, 6, 4, 5, 1, 3, 8]
    ];

    const solution = solve(goodSudoku);
    expect(solution).toEqual(result);
});