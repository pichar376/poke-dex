import { CContainer } from "@coreui/react";

const Layout = ({ children }) => {
  return (
    <CContainer style={{ transition: "all .3s ease-in" }}>
      {children}
    </CContainer>
  );
};

export default Layout;
