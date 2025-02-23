import { useMemoryGame } from "./hooks/useMemoryGame.js";
import { GameHeader } from "./components/GameHeader";
import { GameOver } from "./components/GameOver";
import { CardsGrid } from "./components/CardsGrid.jsx";
import { VscLoading } from "react-icons/vsc";
function App() {
  const {
    characters,
    score,
    bestScore,
    gameOver,
    loading,
    handleCardClick,
    startNewGame,
  } = useMemoryGame();

  return (
    <div className="min-h-dvh max-w-4xl mx-auto flex flex-col">
      <div className="p-4 bg-green-200">
        <GameHeader
          score={score}
          bestScore={bestScore}
          onNewGame={startNewGame}
        />
      </div>

      <div className="flex-1 flex flex-col justify-center bg-white">
        {loading ? (
          <div className="flex justify-center items-center flex-1 text-gray-400">
            <VscLoading size={64} className="animate-spin stroke-[0.4px]" />
          </div>
        ) : gameOver ? (
          <GameOver score={score} onRestart={startNewGame} />
        ) : (
          <CardsGrid characters={characters} onCardClick={handleCardClick} />
        )}
      </div>

      <div className="mt-auto bg-red-300">footer</div>
    </div>
  );
}

export default App;
