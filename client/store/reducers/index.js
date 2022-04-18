import { combineReducers } from "redux"
import characterReducer from "./characters/characters.reducer"
import usersReducer from "./users/users.reducer"


const appReducers = () => combineReducers({
   characters: characterReducer,
   user: usersReducer
});


export default appReducers;