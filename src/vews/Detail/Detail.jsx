import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CContainer, CImage } from "@coreui/react";
import "./detail.css";
import { useSelector } from "react-redux";

const Detail = () => {
  const pokeDetails = useSelector((state) => state.pokemonData.pokemons);
  const { id } = useParams();

  const currentPokemon = pokeDetails.find((el) => el.id == id);
  return (
    <div className="container-detail">
      <figure className="card-image-container">
        <CImage
          fluid
          className="img-detail"
          src={currentPokemon.sprites.front_default}
        />
        <h1 className="title-pokemon">{currentPokemon.name}</h1>
      </figure>
      <div className=" container-info">
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
  );
};

export default Detail;
