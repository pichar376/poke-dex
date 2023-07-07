import { CContainer, CForm, CFormInput } from "@coreui/react";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../../features/pokemonData/pokemonDataSlice";

const SearchPokemon = () => {
  const search = useSelector((state) => state.pokemonData.search);

  const dispatch = useDispatch();
  const handleSearch = (e) => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <CContainer className="d-flex justify-content-center w-50 mb-3">
      <CForm className="w-100">
        <CFormInput
          onChange={handleSearch}
          value={search}
          type="text"
          id="exampleFormControlInput1"
          placeholder="search pokemons"
        />
      </CForm>
    </CContainer>
  );
};

export default SearchPokemon;
