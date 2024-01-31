export function Winner({ winner }) {
  if (winner < 0 || winner > 1) {
    return undefined;
  }
  return (
    <>
      <h3>The winner is {winner === 0 ? "Player A" : "Player B"} 🥳</h3>
    </>
  );
}
