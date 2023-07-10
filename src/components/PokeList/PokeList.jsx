import { CContainer, CRow, CSpinner } from "@coreui/react";
import "./poke-list.css";
import PokeCard from "../PokeCard/PokeCard";
import NotFound from "../NotFound/NotFound";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useFilter } from "../../hooks.js/useFilter";

const PokeList = ({ loading, error }) => {
  const pokeDetails = useSelector((state) => state.pokemonData.pokemons);
  const search = useSelector((state) => state.pokemonData.search);

  console.log(pokeDetails);
  //This hook returns a filtered array to us and requires two parameters: the array to filter and the current search for the input.
  const { filteredItems } = useFilter(pokeDetails, search);

  const renderPokemonsFiltered = () => {
    try {
      if (search?.length > 0) {
        if (filteredItems?.length > 0) {
          return filteredItems?.map((el, id) => <PokeCard key={id} el={el} />);
        } else {
          return <NotFound />;
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  //This function will memorize the cards to avoid unnecessary renders and will re-render every time the data of the current pokemons change
  const renderPokeListMemo = useMemo(() => {
    try {
      if (pokeDetails.length > 0) {
        return pokeDetails?.map((el, id) => <PokeCard key={id} el={el} />);
      }
    } catch (error) {
      console.log("error in useMemo", error);
    }
    return null;
  }, [pokeDetails]);

  const renderVew = () => {
    if (search) {
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
