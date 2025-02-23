export const GameOver = ({ score, onRestart }) => {
  return (
    <div className="text-center p-8 space-y-6">
      <h2 className="text-2xl font-bold">Game Over!</h2>
      <p className="text-2xl">
        Your score: <span className="font-semibold text-sky-700">{score}</span>
      </p>
      <button
        className="px-4 py-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition border-2 border-blue-500"
        onClick={onRestart}
      >
        Play again
      </button>
    </div>
  );
};
