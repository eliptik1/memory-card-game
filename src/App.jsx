import { useMemoryGame } from "./hooks/useMemoryGame.js";
import { GameHeader } from "./components/GameHeader";
import { GameOver } from "./components/GameOver";
import { CardsGrid } from "./components/CardsGrid.jsx";
import { VscLoading } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";
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
    <div className="min-h-dvh mx-auto flex flex-col items-center bg-gradient-to-b from-[#ffdf95] to-[#fde7b4]">
      <div className="max-sm:pt-1 p-4 text-[#305a79] bg-gradient-to-b from-[#bee7ff] to-[#dbf2ff] shadow-xl w-full flex justify-center z-10">
        <GameHeader
          score={score}
          bestScore={bestScore}
          onNewGame={startNewGame}
        />
      </div>

      <div className="w-full flex-1 flex flex-col justify-center  max-w-4xl">
        {loading ? (
          <div className="flex justify-center items-center flex-1 text-[#005897]">
            <VscLoading size={64} className="animate-spin stroke-[0.4px]" />
          </div>
        ) : gameOver ? (
          <GameOver score={score} onRestart={startNewGame} />
        ) : (
          <CardsGrid characters={characters} onCardClick={handleCardClick} />
        )}
      </div>

      <div className="flex items-center gap-2 justify-center w-full my-6  text-[#123147] ">
        <FaGithub size={18} />
        <a href="https://github.com/eliptik1" className="hover:underline">
          Developed by Eliptik1
        </a>
      </div>
    </div>
  );
}

export default App;
