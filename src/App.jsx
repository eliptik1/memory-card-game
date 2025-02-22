import { useMemoryGame } from "./hooks/useMemoryGame.js";
import { GameHeader } from "./components/GameHeader";
import { GameOver } from "./components/GameOver";
import { CardsGrid } from "./components/CardsGrid.jsx";

function App() {
  const {
    characters,
    score,
    bestScore,
    gameOver,
    handleCardClick,
    startNewGame,
  } = useMemoryGame();

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <GameHeader
        score={score}
        bestScore={bestScore}
        onNewGame={startNewGame}
      />

      {gameOver ? (
        <GameOver score={score} onRestart={startNewGame} />
      ) : (
        <CardsGrid characters={characters} onCardClick={handleCardClick} />
      )}
    </div>
  );
}

export default App;
