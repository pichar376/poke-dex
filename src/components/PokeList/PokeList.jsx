import { CContainer, CRow } from "@coreui/react";
import "./pokeList.styles.css";

const PokeList = ({ children }) => {
  return (
    <CContainer>
      <CRow>{children}</CRow>
    </CContainer>
  );
};

export default PokeList;
