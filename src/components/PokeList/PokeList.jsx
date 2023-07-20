import { CContainer, CRow, CSpinner } from "@coreui/react";
import "./poke-list.css";
import PokeCard from "../PokeCard/PokeCard";
import NotFound from "../NotFound/NotFound";
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useFilter } from "../../hooks.js/useFilter";
import Pagination from "../Pagination/Pagination";

const PokeList = ({ loading, error }) => {
  const pokeDetails = useSelector((state) => state.pokemonData.pokemons);
  const search = useSelector((state) => state.pokemonData.search);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(36); //elements per page

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = pokeDetails.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = (Math.ceil = pokeDetails.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

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
  //This function will memorize the cards to avoid unnecessary renders and will re-render every time th=pokeDetails of the current pokemons change
  const renderPokeListMemo = useMemo(() => {
    try {
      if (currentItems.length > 0) {
        return currentItems?.map((el, id) => <PokeCard key={id} el={el} />);
      }
    } catch (error) {
      console.log("error in useMemo", error);
    }
    return null;
  }, [currentItems]);

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
      <CRow className="d-flex justify-content-center">{renderVew()}</CRow>
      {!search && renderVew() && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          itemsPerPage={itemsPerPage}
        />
      )}
    </CContainer>
  );
};

export default PokeList;
