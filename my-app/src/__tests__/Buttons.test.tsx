import { render, screen } from "@testing-library/react";
import Buttons from '../components/Buttons';

describe('Buttons', () => {
    const mock1 = jest.fn();
    const mock2 = jest.fn();

    it('should render', () => {
        render(<Buttons handleFetch={mock1} handleSubmit={mock2}/>);
        expect(screen.getByTestId("button-shuffle")).toBeDefined();
        expect(screen.getByTestId("button-solve")).toBeDefined();
    });
});