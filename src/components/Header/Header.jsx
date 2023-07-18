import { CContainer } from "@coreui/react";
import "./header.styles.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <CContainer
      style={{
        display: "flex",
        backgroundColor: "#eee",
        justifyContent: "center",
        margin: "2rem auto 0 auto",
        width: "100%",
      }}
      onClick={() => {
        navigate("/");
      }}
    >
      <img
        className="logo-poke"
        src="https://raw.githubusercontent.com/musartedev/curso-redux/27298f5dd3e37caf2a90a7a82580cd2905fcab31/src/statics/logo.svg"
        alt="pokeDux"
      />
    </CContainer>
  );
};

export default Header;
