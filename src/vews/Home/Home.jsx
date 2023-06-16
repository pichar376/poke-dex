import { useEffect, useState } from "react";
import PokeCard from "../../components/PokeCard/PokeCard";

import { useFetch } from "../../hooks.js/useFetch";
import { getPokeDetails } from "../../api";

const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=152";

const Home = () => {
  const [pokeData, setPokeData] = useState([]);
  const { data: pokemons, loading, error } = useFetch(apiUrl);

  useEffect(() => {
    //function to get detailed data with promise.all and get a variety of pokemon details
    const requestDetails = async () => {
      const res = await Promise.all(
        pokemons.map((pokemon) => getPokeDetails(pokemon))
      );
      setPokeData(res);
    };
    requestDetails();
  }, []);
  console.log(pokemons);
  if (loading) {
    return <h1 style={{ marginTop: "5rem" }}>Cargando...</h1>;
  }
  return (
    <div>
      {pokeData.map((el) => (
        <PokeCard key={el.id} el={el} />
      ))}
      card
    </div>
  );
};

export default Home;
