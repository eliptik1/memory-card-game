export const GameOver = ({ score, onRestart }) => {
  return (
    <div className="text-center p-8">
      <h2 className="text-2xl font-bold mb-4">Game Over!</h2>
      <p className="mb-4">Your score: {score}</p>
      <button onClick={onRestart}>Play again</button>
    </div>
  );
};
