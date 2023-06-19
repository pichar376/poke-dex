import Home from "./vews/Home/Home";
import '@coreui/coreui/dist/css/coreui.min.css'
import "./globalStyles.css"
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";


function App() {
  return (
    <Layout>
      <Header />
      <Home />
    </Layout>

  );
}

export default App;
