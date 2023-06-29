import { CContainer, CRow, CSpinner } from "@coreui/react";
import "./poke-list.css";
import PokeCard from "../PokeCard/PokeCard";
import { useMemo } from "react";

const PokeList = ({
  pokeDetails,
  loading,
  error,
  searchPokemon,
  filteredPokemons,
}) => {
  console.log(searchPokemon);

  const renderPokemonsFiltered = () => {
    if (searchPokemon?.length > 0) {
      if (filteredPokemons?.length > 0) {
        return filteredPokemons?.map((el, id) => <PokeCard key={id} el={el} />);
      } else {
        return <div>Not Found :(</div>;
      }
    }
  };
  const renderPokeListMemo = useMemo(() => {
    if (pokeDetails.length > 0) {
      return pokeDetails?.map((el, id) => <PokeCard key={id} el={el} />);
    }
    return null;
  }, [pokeDetails]);

  const renderVew = () => {
    if (searchPokemon) {
      return renderPokemonsFiltered();
    } else {
      return renderPokeListMemo;
    }
  };

  if (loading) {
    return (
      <CContainer style={{ display: "flex", justifyContent: "center" }}>
        <CSpinner color="secondary" style={{ marginTop: "15rem" }} />
      </CContainer>
    );
  }
  if (error) {
    return <h1>{error.message}</h1>;
  }
  return (
    <CContainer>
      <CRow>{renderVew()}</CRow>
    </CContainer>
  );
};

export default PokeList;
