import {
  CButton,
  CCard,
  CCardBody,
  CCardImage,
  CCardText,
  CCardTitle,
  CCol,
} from "@coreui/react";

const PokeCard = ({ el }) => {
  return (
    <CCol
      style={{
        maxWidth: "20rem",
        minWidth: "13rem",
        padding: "0",
        margin: "3px",
      }}
    >
      <CCard
        style={{
          maxWidth: "18rem",
          minWidth: "13rem",
          height: "450px",
        }}
      >
        <CCardImage orientation="top" src={el.sprites.front_default} />
        <CCardBody style={{ textAlign: "center" }}>
          <CCardTitle>{el.name}</CCardTitle>
          <CCardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CCardText>
          <CButton href="#">details</CButton>
        </CCardBody>
      </CCard>
    </CCol>
  );
};

export default PokeCard;
