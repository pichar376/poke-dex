

export const getPokeDetails = (item) => {
  return fetch(item.url).then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err))
}

