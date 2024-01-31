import "./App.css";
import { Board } from "./components/Board";

const dummyBoard = [
  [-1, -1, -1],
  [-1, -1, -1],
  [-1, -1, 1],
];

function App() {
  return (
    <>
      <h1>Tic Tac Toe</h1>
      <Board board={dummyBoard} />
    </>
  );
}

export default App;
