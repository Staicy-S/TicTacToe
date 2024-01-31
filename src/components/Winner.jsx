import styles from "./Winner.module.css";

export function Winner({ winner, onNewGame }) {
  if (winner < 0 || winner > 1) {
    return undefined;
  }

  return (
    <>
      <h3>The winner is {winner === 0 ? "Player A" : "Player B"} 🥳</h3>
      <button onClick={onNewGame} className={styles["new-game-button"]}>
        Start a new game
      </button>
    </>
  );
}
