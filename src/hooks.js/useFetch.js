import { useState } from "react";
import { useEffect } from "react"

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const getData = (url) => {
    return fetch(url)
  }

  useEffect(() => {
    const getDataApi = async () => {
      setLoading(true)
      try {
        const res = await getData(url);
        if (!res.ok) {
          throw new Error("an error occurred in the request" + res.status);
        }
        const data = await res.json();
        setData(data.results)
      } catch (err) {
        //console.log(err)
        setError(err)
      }
      setLoading(false)
    }
    getDataApi()
  }, []);

  return { data, loading, error }
}