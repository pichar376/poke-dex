import PokeCard from "../../components/PokeCard/PokeCard";

import { useGetPokeData } from "../../hooks.js/useGetPokeData";

const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=152";

const Home = () => {
  const { pokeDetails, loading, error } = useGetPokeData(apiUrl);

  console.log(loading);

  if (loading) {
    return <h1 style={{ marginTop: "5rem" }}>Cargando...</h1>;
  }
  if (error) {
    return <h1>{error.message}</h1>;
  }
  if (pokeDetails.length > 0) {
    return (
      <div>
        {pokeDetails.map((el, id) => (
          <PokeCard key={id} el={el} />
        ))}
        card
      </div>
    );
  }
};

export default Home;
