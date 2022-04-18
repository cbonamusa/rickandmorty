import actionTypes from "./characters.actionTypes";

const characterLoading = () => ({
   type: actionTypes.LOADING_CHARACTERS
});

const characterLoaded = (characters) => ({
   type: actionTypes.LOADED_CHARACTERS,
   payload: characters
});

const characterErrorOnLoading = (error) => ({
   type: actionTypes.ERROR,
   payload: error
});


export default {
   characterLoading,
   characterLoaded,
   characterErrorOnLoading
}