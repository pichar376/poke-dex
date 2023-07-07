import { useState } from "react";
import { useEffect } from "react"

//function to get dataDetail inside promise.all for each pokemon
const getDetailsItem = (item) => {
  return fetch(item.url).then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err))
}

export const useGetPokeData = (url) => {

  const [pokeDetails, setPokeDetails] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getDataApi = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("an error occurred in the request" + res.status);
        }
        const data = await res.json();

        setPokemons(data.results)

      } catch (err) {
        console.log(err)
        setError(err)
      }
    }
    getDataApi()
  }, [url]);

  //second effect to get the detail of each [pokemon received in the first effect
  useEffect(() => {

    //function that executes the promise.all to get the details of the pokemon
    const requestDetails = async () => {
      setLoading(true)
      try {
        const response = await Promise.all(
          pokemons.map((item) => getDetailsItem(item))
        );
        setPokeDetails(response)
      } catch (error) {
        setError(error)
        console.log(error);
      } finally {
        setLoading(false)
      }
    };

    requestDetails()


  }, [pokemons]);

  return { pokeDetails, loading, error, setPokeDetails }
}
