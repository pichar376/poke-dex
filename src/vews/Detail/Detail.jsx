import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CContainer } from "@coreui/react";
import "./detail.css";

const Detail = ({ pokeDetails, loading, error }) => {
  const { id } = useParams();
  const [pokemonData, setPokemonData] = useState({});

  const currentPokemon = pokeDetails.find((el) => el.id == id);

  console.log(currentPokemon);
  return (
    <div className="container-detail">
      <div className="card-detail-container">
        <img
          src={currentPokemon.sprites.front_default}
          className="img-detail img-fluid"
          alt={currentPokemon.name}
        />
        <h1 className="title-pokemon">{currentPokemon.name}</h1>
        <div className="d-flex justify-content-center ">
          <div className=" container-info d-flex flex-column align-items-start text-center lh-1 mb-0">
            <p>
              <span>Weight: </span>
              {currentPokemon.weight}
            </p>
            <p>
              <span>Height: </span>
              {currentPokemon.height}
            </p>
            <p>
              <span>Experience: </span>
              {currentPokemon.base_experience}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
