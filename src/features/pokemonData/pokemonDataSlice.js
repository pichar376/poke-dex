import { createSlice } from "@reduxjs/toolkit"

export const pokemonDataSlice = createSlice({
  name: 'pokemonData',
  initialState: {
    pokemons: [],
    search: ""
  },
  reducers: {
    setPokemonsActions: (state, action) => {
      return { ...state, pokemons: action.payload }
    },
    setSearch: (state, action) => {
      return { ...state, search: action.payload }
    }
  }
},
)

// Action creators are generated for each case reducer function
export const { setPokemonsActions, setSearch } = pokemonDataSlice.actions

export default pokemonDataSlice.reducer