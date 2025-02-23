export const GameHeader = ({ level, score, bestScore, onNewGame }) => {
  return (
    <div className="max-w-4xl w-full">
      <h1 className="my-4 mt-1 text-4xl sm:text-[40px] tracking-wide font-[concert_one] font-extralight">
        Memory Game
      </h1>
      <div className="flex justify-between items-center -mt-12">
        <div className="flex flex-col items-end text-xl">
          <div>
            Level: <span className="font-semibold">{level}</span>
          </div>
          <div>
            Score: <span className="font-semibold">{score}</span>
          </div>
          <div>
            Best Score: <span className="font-semibold">{bestScore}</span>
          </div>
        </div>
        <button
          onClick={onNewGame}
          className="px-4 py-2 rounded-full bg-white text-blue-600 hover:bg-blue-200 transition border-2 border-blue-500"
        >
          New Game
        </button>
      </div>
    </div>
  );
};
