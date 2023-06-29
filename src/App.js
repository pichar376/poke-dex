import Home from "./vews/Home/Home";
import '@coreui/coreui/dist/css/coreui.min.css'
import "./globalStyles.css"
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./vews/Detail/Detail";
import NotFound from "./components/NotFound/NotFound";
import { useGetPokeData } from "./hooks.js/useGetPokeData";
import SearchPokemon from "./components/SearchPokemon/SearchPokemon";
import { useEffect, useState } from "react";

const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=151";

function App() {


  const { pokeDetails, setPokeDetails, loading, error } = useGetPokeData(apiUrl);
  const [searchPokemon, setSearchPokemon] = useState("");

  const [filteredPokemons, setFilteredPokemons] = useState(null);
  const handleSearch = (e) => {
    setSearchPokemon(e.target.value);
  };

  const filteredPokemonsByTitle = (itemsToSearch) => {
    return pokeDetails.filter((el) =>
      el.name.toLowerCase().includes(itemsToSearch.toLowerCase()));
  }

  useEffect(() => {
    if (searchPokemon) {
      setFilteredPokemons(filteredPokemonsByTitle(searchPokemon))
    }
  }, [pokeDetails, searchPokemon]);

  console.log(filteredPokemons)
  return (
    <BrowserRouter>
      <Header />
      <SearchPokemon searchPokemon={searchPokemon} onSearch={handleSearch} />
      <Layout>
        <Routes>
          <Route path="/" element={<Home pokeDetails={pokeDetails} loading={loading} error={error} filteredPokemons={filteredPokemons} searchPokemon={searchPokemon} />} />
          <Route path="detail/:id" element={<Detail pokeDetails={pokeDetails} />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
