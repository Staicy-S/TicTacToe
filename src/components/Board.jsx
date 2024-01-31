import styles from "./Board.module.css";

// const board = [
//   [-1, -1, 0],
//   [0, -1, 1],
//   [1, -1, 0],
// ];

export function Board({ board }) {
  return (
    <div className={styles.board}>
      {board.map((row, index) => {
        return (
          <div key={index} className={styles.row}>
            {row.map((field, index) => {
              return (
                <div key={index} className={styles.field}>
                  {field === -1 ? "" : field === 0 ? "O" : "X"}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
