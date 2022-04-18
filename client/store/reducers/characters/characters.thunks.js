import  * as services  from '../../../services/characters.service';
import actions from './characters.actions';

export const loadCharacters = () => async (dispatch) => {
   dispatch(actions.characterLoading());
   await services.getCharacters()
      .then(res => dispatch(actions.characterLoaded(res.data.results)))
      .catch(error => dispatch(actions.characterErrorOnLoading(error.message)));
}