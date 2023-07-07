import { CCard, CCardBody, CCardImage, CCardTitle, CCol } from "@coreui/react";
import { useNavigate } from "react-router-dom";
import "./poke-card.css";

const PokeCard = ({ el }) => {
  const navigate = useNavigate();
  const goToDetail = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <CCol
      style={{
        maxWidth: "18rem",
        minWidth: "13rem",
        height: "300px",
        padding: "0",
        margin: ".5rem",
      }}
    >
      <CCard
        style={{
          height: "100%",
          padding: "1rem",
          boxShadow: " 3px 3px 5px 0px rgba(0,0,0,0.2)",
        }}
        onClick={() => {
          goToDetail(el.id);
        }}
      >
        <CCardImage orientation="top" src={el.sprites.front_default} />
        <CCardBody style={{ textAlign: "center" }}>
          <CCardTitle className="title-card">{el.name}</CCardTitle>
        </CCardBody>
      </CCard>
    </CCol>
  );
};

export default PokeCard;
