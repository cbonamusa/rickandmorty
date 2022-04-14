import  getCharacters  from '../../../services/characters.service';
import actions from './characters.actions';

export const loadCharacters = () => (dispatch) => {
    dispatch(actions.characterLoading())
    getCharacters()
        .then(res => dispatch(actions.characterLoaded(res.data.results)))
        .catch(error => dispatch(actions.characterErrorOnLoading(error.message)));
}