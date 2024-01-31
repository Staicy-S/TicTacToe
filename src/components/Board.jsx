import styles from "./Board.module.css";

// const board = [
//   [-1, -1, 0],
//   [0, -1, 1],
//   [1, -1, 0],
// ];

export function Board({ board, onSelectField }) {
  return (
    <div className={styles.board}>
      {board.map((row, rowIndex) => {
        return (
          <div key={rowIndex} className={styles.row}>
            {row.map((field, fieldIndex) => {
              return (
                <div
                  onClick={() => {
                    onSelectField({
                      row: rowIndex,
                      column: fieldIndex,
                    });
                  }}
                  key={fieldIndex}
                  className={styles.field}
                >
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
