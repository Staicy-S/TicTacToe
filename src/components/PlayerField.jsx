import styles from "./PlayerField.module.css";

export function PlayerField({ activePlayer, round }) {
  return (
    <div className={styles["💪"]}>
      <h2 className={activePlayer == 0 ? styles["active-player"] : undefined}>
        Player A
      </h2>
      <div className={styles["round-box"]}>{round}</div>
      <h2 className={activePlayer == 1 ? styles["active-player"] : undefined}>
        Player B
      </h2>
    </div>
  );
}
