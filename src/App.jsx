import "./App.css";
import { useState } from "react";
import { Board } from "./components/Board";
import { PlayerField } from "./components/PlayerField";
import { Winner } from "./components/Winner";

const initialBoard = [
  [-1, -1, -1],
  [-1, -1, -1],
  [-1, -1, -1],
];

function App() {
  const [board, setBoard] = useState(initialBoard);
  const [activePlayer, setActivePlayer] = useState(0);
  const [currentRound, setCurrentRound] = useState(1);

  function handleNewGame() {
    setActivePlayer(0);
    setBoard(initialBoard);
  }

  function handleSelectField(fieldPosition) {
    console.log(fieldPosition);
    if (
      activePlayer < 0 ||
      board[fieldPosition.row][fieldPosition.column] >= 0
    ) {
      return;
    }
    setBoard(
      board.map((row, rowIndex) => {
        return row.map((field, fieldIndex) => {
          if (
            rowIndex === fieldPosition.row &&
            fieldIndex === fieldPosition.column
          ) {
            return activePlayer;
          } else {
            return field;
          }
        });
      })
    );
    setActivePlayer(activePlayer === 0 ? 1 : 0);
    if (activePlayer === 1) {
      setCurrentRound((prevRound) => prevRound + 1);
    }
  }

  return (
    <>
      <h1>Tic Tac Toe 🙅‍♀️🙆‍♀️</h1>
      <PlayerField activePlayer={activePlayer} round={currentRound} />
      <Board board={board} onSelectField={handleSelectField} />
      <Winner winner={1} onNewGame={handleNewGame} />
    </>
  );
}

export default App;
