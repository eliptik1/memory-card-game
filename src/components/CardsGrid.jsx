import { CharacterCard } from "./CharacterCard";

export const CardsGrid = ({ characters, onCardClick }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-8 mx-8 sm:mx-8">
      {characters.map((character) => (
        <CharacterCard
          key={character.id}
          character={character}
          onClick={onCardClick}
        />
      ))}
    </div>
  );
};
