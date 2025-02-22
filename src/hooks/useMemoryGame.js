import { useState, useEffect } from "react";

export const useMemoryGame = () => {
  const [characters, setCharacters] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchCharacters = async () => {
    setLoading(true);
    try {
      //  Create unique Pokemon IDs
      const uniqueCharacterIds = new Set();
      while (uniqueCharacterIds.size < 12) {
        uniqueCharacterIds.add(Math.floor(Math.random() * 151) + 1);
      }

      const characterPromises = Array.from(uniqueCharacterIds).map((id) =>
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) =>
          res.json()
        )
      );

      const results = await Promise.all(characterPromises);
      const characterData = results.map((character) => ({
        id: `${character.id}-${Math.random()}`, // Create unique ID
        name: character.name,
        image: character.sprites.front_default,
      }));

      setCharacters(characterData);
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
      }
    } else {
      setSelectedCards((prev) => [...prev, uniqueId]);
      setScore((prev) => prev + 1);
      shuffleCards();
    }
  };

  const startNewGame = () => {
    setSelectedCards([]);
    setScore(0);
    setGameOver(false);
    fetchCharacters();
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return {
    characters,
    score,
    bestScore,
    gameOver,
    loading,
    handleCardClick,
    startNewGame,
  };
};
