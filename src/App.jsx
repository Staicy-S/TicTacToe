import "./App.css";
import { PlayerField } from "./components/PlayerField";

function App() {
  return (
    <>
      <h1>Tic Tac Toe 🙅‍♀️🙆‍♀️</h1>
      <PlayerField activePlayer={0} round={2} />
    </>
  );
}

export default App;
