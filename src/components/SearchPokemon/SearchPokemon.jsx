import { CContainer, CForm, CFormInput } from "@coreui/react";

const SearchPokemon = ({ searchPokemon, onSearch }) => {
  return (
    <CContainer className="d-flex justify-content-center w-50 mb-3">
      <CForm className="w-100">
        <CFormInput
          onChange={onSearch}
          value={searchPokemon}
          type="text"
          id="exampleFormControlInput1"
          label="Search Pokemon"
          placeholder="search"
        />
      </CForm>
    </CContainer>
  );
};

export default SearchPokemon;
