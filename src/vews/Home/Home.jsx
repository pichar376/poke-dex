import { CContainer } from "@coreui/react";
import PokeList from "../../components/PokeList/PokeList";
import SearchPokemon from "../../components/SearchPokemon/SearchPokemon";

const Home = ({ loading, error }) => {
  return (
    <CContainer style={{ transition: "all .3s ease-in" }}>
      <SearchPokemon />
      <PokeList loading={loading} error={error} />
    </CContainer>
  );
};

export default Home;
