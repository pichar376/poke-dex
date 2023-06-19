import { CContainer } from "@coreui/react";
import pokeImg from "../../assets/pokeImg.jpg";
import "./header.styles.css";

const Header = () => {
  return (
    <CContainer
      style={{
        display: "flex",
        backgroundColor: "#eee",
        justifyContent: "center",
        margin: "4rem auto",
        width: "100%",
      }}
    >
      <h1 className="title-header">POKEDEX</h1>
      <img className="logo-poke" src={pokeImg} />
    </CContainer>
  );
};

export default Header;
