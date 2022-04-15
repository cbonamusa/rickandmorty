import actionTypes from "./characters.actionTypes";
import initialState from "./characters.initState";

const characterReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case actionTypes.LOADING_CHARACTERS:
            return { ...state, loading: true, characters: null, error: null};

        case actionTypes.LOADED_CHARACTERS:
            return {...state, characters: payload, loading: false};

        case actionTypes.ERROR:
            return {...state, error: payload, loading: false};
            
        default:
            return state;
    }
}

export default characterReducer;