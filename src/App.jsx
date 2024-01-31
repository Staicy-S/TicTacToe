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
    setCurrentRound(1);
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

  function calculateWinner() {
    for (let i = 0; i < board.length; i++) {
      if (
        board[i][0] >= 0 &&
        board[i][0] === board[i][1] &&
        board[i][0] === board[i][2]
      ) {
        return board[i][0];
      }
    }
    for (let i = 0; i < 3; i++) {
      if (
        board[0][i] >= 0 &&
        board[0][i] === board[1][i] &&
        board[0][i] === board[2][i]
      ) {
        return board[0][i];
      }
    }
    if (
      board[0][0] >= 0 &&
      board[0][0] == board[1][1] &&
      board[0][0] == board[2][2]
    ) {
      return board[0][0];
    }

    if (
      board[0][2] >= 0 &&
      board[0][2] == board[1][1] &&
      board[0][2] == board[2][0]
    ) {
      return board[0][2];
    }

    return -1;
  }

  const winner = calculateWinner();

  return (
    <>
      <h1>Tic Tac Toe 🙅‍♀️🙆‍♀️</h1>
      <PlayerField activePlayer={activePlayer} round={currentRound} />
      <Board board={board} onSelectField={handleSelectField} />
      <Winner winner={winner} onNewGame={handleNewGame} />
    </>
  );
}

export default App;
