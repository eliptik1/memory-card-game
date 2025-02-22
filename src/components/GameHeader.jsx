export const GameHeader = ({ score, bestScore, onNewGame }) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div className="space-x-4">
        <div>Score: {score}</div>
        <div>Best Score: {bestScore}</div>
      </div>
      <button onClick={onNewGame}>New Game</button>
    </div>
  );
};
