import "./App.css";
import { Board } from "./components/Board";
import { PlayerField } from "./components/PlayerField";

const dummyBoard = [
  [-1, -1, -1],
  [-1, -1, -1],
  [-1, -1, 1],
];

function App() {
  return (
    <>
      <h1>Tic Tac Toe 🙅‍♀️🙆‍♀️</h1>
      <PlayerField activePlayer={0} round={2} />
      <Board board={dummyBoard} />
    </>
  );
}

export default App;
