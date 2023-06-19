import PokeCard from "../../components/PokeCard/PokeCard";
import { useGetPokeData } from "../../hooks.js/useGetPokeData";
import PokeList from "../../components/PokeList/PokeList";
import Header from "../../components/Header/Header";
import { CContainer, CSpinner } from "@coreui/react";

const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=152";

const Home = () => {
  const { pokeDetails, loading, error } = useGetPokeData(apiUrl);

  console.log(loading);

  if (loading) {
    return (
      <CContainer style={{ display: "flex", justifyContent: "center" }}>
        <CSpinner color="secondary" style={{ marginTop: "15rem" }} />;
      </CContainer>
    );
  }
  if (error) {
    return <h1>{error.message}</h1>;
  }
  if (pokeDetails.length > 0) {
    return (
      <CContainer>
        <PokeList>
          {pokeDetails.map((el, id) => (
            <PokeCard key={id} el={el} />
          ))}
        </PokeList>
      </CContainer>
    );
  }
};

export default Home;
