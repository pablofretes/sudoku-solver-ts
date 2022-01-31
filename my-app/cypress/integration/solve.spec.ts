describe('Solve Button', () => {
    before(() => {
        cy.intercept('GET', 'https://sudoku-api.vercel.app/api/dosuku', { fixture: 'sudoku.json'});
    });

    it('Can access site', () => {
        cy.visit('http://localhost:3000');
    });

    it('Solve button solves the Sudoku', () => {
        let numbers: any;
        let solvedNumbers = [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 4, 5, 7,
            2, 8, 9, 3, 6, 1, 6, 8, 9, 1, 3, 7,
            4, 5, 2, 2, 1, 4, 5, 6, 8, 9, 7, 3,
            3, 6, 5, 7, 9, 1, 8, 2, 4, 7, 9, 8,
            3, 2, 4, 6, 1, 5, 5, 4, 1, 8, 7, 3,
            2, 9, 6, 8, 3, 6, 9, 1, 2, 5, 4, 7,
            9, 7, 2, 6, 4, 5, 1, 3, 8
        ];

        cy.get('[data-cy=button-solve]').click();
        cy.get('.sudoku-number').then(number => {
            numbers = getNumbers(number);
            expect([numbers]).to.deep.equal([solvedNumbers]);
        });
    });
})

const getNumbers = (list) => {
    let numbers = [];

    list.each((i, n) => {
        numbers.push(Number(n.textContent));
    });

    return numbers;
};