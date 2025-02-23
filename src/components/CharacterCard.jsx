export const CharacterCard = ({ character, onClick }) => {
  return (
    <div
      className="cursor-pointer bg-white hover:bg-green-100 rounded-xl transition-all [box-shadow:0_1px_3px_0_rgba(60,64,67,.3),0_4px_8px_3px_rgba(60,64,67,.15)] hover:[box-shadow:0_1px_24px_0_rgba(60,64,67,.3),0_4px_8px_3px_rgba(60,64,67,.15)]"
      onClick={() => onClick(character.id)}
    >
      <div className="p-4 text-center">
        <img
          src={character.image}
          alt={character.name}
          className="w-32 h-32 max-sm:w-24 max-sm:h-24 max-sm:min-w-24 max-sm:min-h-24 min-w-32 min-h-32 mx-auto "
        />
        <p className="capitalize mt-2 font-medium">{character.name}</p>
      </div>
    </div>
  );
};
