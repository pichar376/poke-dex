import { CContainer } from "@coreui/react";
import PokeList from "../../components/PokeList/PokeList";

const Home = ({
  pokeDetails,
  loading,
  error,
  filteredPokemons,
  searchPokemon,
}) => {
  return (
    <CContainer style={{ transition: "all .3s ease-in" }}>
      <PokeList
        pokeDetails={pokeDetails}
        loading={loading}
        error={error}
        filteredPokemons={filteredPokemons}
        searchPokemon={searchPokemon}
      />
    </CContainer>
  );
};

export default Home;
