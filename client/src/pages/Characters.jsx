import Header from "../components/Header";
import { loadCharacters } from '../../store/reducers/characters/characters.thunks'
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import MainCharPanel from "../components/MainCharPanel";

const Characters = () => {
    const dispatch = useDispatch();
    const {characters} = useSelector(state => state.characters);
    console.log('DATAAAAA', characters);

    useEffect(() => {
        dispatch(loadCharacters())
    }, [dispatch])
    return (
        <div>
            <Header />
            <MainCharPanel />

        </div>
    )
}

export default Characters