import { fireEvent, render } from "@testing-library/react";
import TicTacToe from "../views/TicTacToe";
import X from "../components/drawable/X";
import O from "../components/drawable/O";

describe("TicTacToe unit test", () => {
  it("should render MainLayout component and reset button", () => {
    const { getByTestId } = render(<TicTacToe />);
    const mainLayout = getByTestId("main-layout");
    expect(mainLayout).toBeInTheDocument();
    const resetBtn = getByTestId("reset-button");
    fireEvent.click(resetBtn);
    expect(resetBtn).toBeInTheDocument();
  });

  it("should render TicTacToeTable", () => {
    const { getByTestId } = render(<TicTacToe />);
    const ticTacToe = getByTestId("tic-tac-toe");
    expect(ticTacToe).toBeInTheDocument();
  });

  it("should put X in the first cell", () => {
    const { getByTestId } = render(<TicTacToe />);
    const { container } = render(<X />);
    const ticTacToeFirstCell = getByTestId("tic-tac-toe-1");
    fireEvent.click(ticTacToeFirstCell);
    expect(ticTacToeFirstCell.innerHTML).toEqual(container.innerHTML);
  });

  it("should put O in the second cell", () => {
    const { getByTestId } = render(<TicTacToe />);
    const { container } = render(<O />);
    const ticTacToeFirstCell = getByTestId("tic-tac-toe-1");
    const ticTacToeSecondCell = getByTestId("tic-tac-toe-2");
    fireEvent.click(ticTacToeFirstCell);
    fireEvent.click(ticTacToeSecondCell);
    expect(ticTacToeSecondCell.innerHTML).toEqual(container.innerHTML);
  });

  it('should render "X" winner', () => {
    const { getByTestId } = render(<TicTacToe />);
    const ticTacToeFirstCell = getByTestId("tic-tac-toe-1");
    const ticTacToeSecondCell = getByTestId("tic-tac-toe-2");
    const ticTacToeForthCell = getByTestId("tic-tac-toe-4");
    const ticTacToeSeventhCell = getByTestId("tic-tac-toe-7");
    const ticTacToeNinthCell = getByTestId("tic-tac-toe-9");
    fireEvent.click(ticTacToeFirstCell);
    fireEvent.click(ticTacToeSecondCell);
    fireEvent.click(ticTacToeForthCell);
    fireEvent.click(ticTacToeNinthCell);
    fireEvent.click(ticTacToeSeventhCell);
    const ticTacToeI = getByTestId("tic-tac-toe-i");
    expect(ticTacToeI.innerHTML).not.toBeNull();
    const backdrop = getByTestId("winner-popup");
    fireEvent.click(backdrop);
  });

  it('should render "O" winner', () => {
    const { getByTestId } = render(<TicTacToe />);
    const ticTacToeFirstCell = getByTestId("tic-tac-toe-1");
    const ticTacToeSecondCell = getByTestId("tic-tac-toe-2");
    const ticTacToeForthCell = getByTestId("tic-tac-toe-4");
    const ticTacToeFifthCell = getByTestId("tic-tac-toe-5");
    const ticTacToeNinthCell = getByTestId("tic-tac-toe-9");
    const ticTacToeEighthCell = getByTestId("tic-tac-toe-8");
    fireEvent.click(ticTacToeFirstCell);
    fireEvent.click(ticTacToeSecondCell);
    fireEvent.click(ticTacToeForthCell);
    fireEvent.click(ticTacToeFifthCell);
    fireEvent.click(ticTacToeNinthCell);
    fireEvent.click(ticTacToeEighthCell);
    const ticTacToeI = getByTestId("tic-tac-toe-i");
    expect(ticTacToeI.innerHTML).not.toBeNull();
    const backdrop = getByTestId("winner-popup");
    fireEvent.click(backdrop);
  });

  it('should render "draw" winner', () => {
    const { getByTestId } = render(<TicTacToe />);
    const ticTacToeFirstCell = getByTestId("tic-tac-toe-1");
    const ticTacToeSecondCell = getByTestId("tic-tac-toe-2");
    const ticTacToeForthCell = getByTestId("tic-tac-toe-4");
    const ticTacToeFifthCell = getByTestId("tic-tac-toe-5");
    const ticTacToeSixthCell = getByTestId("tic-tac-toe-6");
    const ticTacToeSeventhCell = getByTestId("tic-tac-toe-7");
    const ticTacToeEighthCell = getByTestId("tic-tac-toe-8");
    const ticTacToeNinthCell = getByTestId("tic-tac-toe-9");
    const ticTacToeThirdCell = getByTestId("tic-tac-toe-3");
    fireEvent.click(ticTacToeFirstCell);
    fireEvent.click(ticTacToeSecondCell);
    fireEvent.click(ticTacToeForthCell);
    fireEvent.click(ticTacToeFifthCell);
    fireEvent.click(ticTacToeSixthCell);
    fireEvent.click(ticTacToeSeventhCell);
    fireEvent.click(ticTacToeEighthCell);
    fireEvent.click(ticTacToeNinthCell);
    fireEvent.click(ticTacToeThirdCell);
    const backdrop = getByTestId("winner-popup");
    fireEvent.click(backdrop);
    expect(backdrop.innerHTML).not.toBeNull();
  });
});
