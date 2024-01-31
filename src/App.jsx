import "./App.css";
import { Board } from "./components/Board";
import { PlayerField } from "./components/PlayerField";
import { Winner } from "./components/Winner";

const dummyBoard = [
  [-1, -1, -1],
  [-1, -1, -1],
  [-1, -1, 1],
];

function App() {
  function handleNewGame() {
    console.log("test");
  }

  return (
    <>
      <h1>Tic Tac Toe 🙅‍♀️🙆‍♀️</h1>
      <PlayerField activePlayer={0} round={2} />
      <Board board={dummyBoard} />
      <Winner winner={1} onNewGame={handleNewGame} />
    </>
  );
}

export default App;
