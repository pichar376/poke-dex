import { configureStore } from '@reduxjs/toolkit'
import pokemonDataReducer from './features/pokemonData/pokemonDataSlice'
export default configureStore({
  reducer: {
    pokemonData: pokemonDataReducer
  },
})