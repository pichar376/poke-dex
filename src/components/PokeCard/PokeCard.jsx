import {
  CButton,
  CCard,
  CCardBody,
  CCardImage,
  CCardText,
  CCardTitle,
  CCol,
} from "@coreui/react";
import { useNavigate } from "react-router-dom";

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
        height: "350px",
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
      >
        <CCardImage orientation="top" src={el.sprites.front_default} />
        <CCardBody style={{ textAlign: "center" }}>
          <CCardTitle>{el.name}</CCardTitle>
          <CButton
            style={{ marginTop: "5px" }}
            onClick={() => {
              goToDetail(el.id);
            }}
          >
            details
          </CButton>
        </CCardBody>
      </CCard>
    </CCol>
  );
};

export default PokeCard;
