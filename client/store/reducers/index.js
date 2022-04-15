import { combineReducers } from "redux"
import characterReducer from "./characters/characters.reducer"

const appReducers = () => combineReducers({
    characters: characterReducer
});


export default appReducers;