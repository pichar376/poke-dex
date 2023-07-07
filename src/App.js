import Home from "./vews/Home/Home";
import '@coreui/coreui/dist/css/coreui.min.css'
import "./globalStyles.css"
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./vews/Detail/Detail";
import NotFound from "./components/NotFound/NotFound";
import { useGetPokeData } from "./hooks.js/useGetPokeData";
import { useEffect } from "react";
import { setPokemonsActions } from "./features/pokemonData/pokemonDataSlice";
import { useDispatch } from "react-redux";



const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=151";

function App() {

  //hook to obtain the data of the details of the pokemons
  const { pokeDetails, loading, error } = useGetPokeData(apiUrl);

  const dispatch = useDispatch()


  //In this effect the data that comes from the hook of the fetch request of the pokemon data is saved, these will be saved in the redux state with the help of the dispatcher
  useEffect(() => {
    dispatch(setPokemonsActions(pokeDetails));
  }, [pokeDetails]);
  return (
    <BrowserRouter>
      <Layout>
        <Header />
        <Routes>
          <Route path="/" element={<Home pokeDetails={pokeDetails} loading={loading} error={error} />} />
          <Route path="detail/:id" element={<Detail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
