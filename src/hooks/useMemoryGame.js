import { useState, useEffect } from "react";

export const useMemoryGame = () => {
  const [characters, setCharacters] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(() => {
    return Number(localStorage.getItem("bestScore")) || 0;
  });
  const [gameOver, setGameOver] = useState(false);
  const [loading, setLoading] = useState(false);
  const [previousIds, setPreviousIds] = useState(new Set());

  const fetchCharacters = async () => {
    setLoading(true);
    try {
      const uniqueCharacterIds = new Set();
      while (uniqueCharacterIds.size < 12) {
        const newId = Math.floor(Math.random() * 1025) + 1;
        if (!previousIds.has(newId)) {
          uniqueCharacterIds.add(newId);
        }
      }

      const characterPromises = Array.from(uniqueCharacterIds).map((id) =>
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) =>
          res.json()
        )
      );

      const results = await Promise.all(characterPromises);
      const characterData = results.map((character) => ({
        id: `${character.id}`,
        name: character.name,
        image: character.sprites.front_default,
      }));

      setCharacters(characterData);
      setPreviousIds((prev) => new Set([...prev, ...uniqueCharacterIds]));
    } catch (error) {
      console.error("An error occurred while fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const shuffleCards = () => {
    setCharacters((currentCharacters) => {
      return [...currentCharacters].sort(() => Math.random() - 0.5);
    });
  };

  const handleCardClick = (uniqueId) => {
    if (gameOver) return;

    if (selectedCards.includes(uniqueId)) {
      setGameOver(true);
      if (score > bestScore) {
        setBestScore(score);
        localStorage.setItem("bestScore", score);
      }
    } else {
      setSelectedCards((prev) => [...prev, uniqueId]);
      setScore((prev) => prev + 1);
      shuffleCards();
    }
  };

  const startNewGame = () => {
    setSelectedCards([]);
    setLevel(1);
    setScore(0);
    setGameOver(false);
    setPreviousIds(new Set());
    fetchCharacters();
  };

  //If score reaches 12 and its multiples, fetch new series
  useEffect(() => {
    if (score > 0 && score % 12 === 0) {
      fetchCharacters();
      setLevel((prev) => prev + 1);
    }
  }, [score]);

  useEffect(() => {
    fetchCharacters();
  }, []);

  return {
    characters,
    level,
    score,
    bestScore,
    gameOver,
    loading,
    handleCardClick,
    startNewGame,
  };
};
