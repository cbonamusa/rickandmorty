import Header from "../components/Header";
import { loadCharacters } from '../../store/reducers/characters/characters.thunks'
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import MainCharPanel from "../components/MainCharPanel";

const Characters = () => {
    const dispatch = useDispatch();
    useEffect(() => {
       dispatch(loadCharacters());
    }, []);
    
    return (
        <div>
            <h1>Rick & Morty Characters</h1>
            <MainCharPanel />
            <h3 style={{paddingBottom:'80px'}}>You are a rick & morty true fan!</h3>
        </div>
    )
}

export default Characters