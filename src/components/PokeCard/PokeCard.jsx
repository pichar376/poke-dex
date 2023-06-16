const PokeCard = ({ el }) => {
  return (
    <>
      <h1>{el.name}</h1>
      <img src={el.sprites.front_default} alt={el.name} />
    </>
  );
};

export default PokeCard;
