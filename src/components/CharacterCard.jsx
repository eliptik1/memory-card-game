export const CharacterCard = ({ character, onClick }) => {
  return (
    <div
      className="cursor-pointer hover:shadow-xl transition-all"
      onClick={() => onClick(character.id)}
    >
      <div className="p-4 text-center">
        <img
          src={character.image}
          alt={character.name}
          className="w-32 h-32 mx-auto"
        />
        <p className="capitalize mt-2 font-medium">{character.name}</p>
      </div>
    </div>
  );
};
