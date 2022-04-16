import styles from './Styles.module.scss';
import favIcon from '/favourite.svg';
import * as services from '../../../services/user.service';
import { useState } from 'react';
import { addToFavouritesAction } from "../../../store/reducers/users/users.actions";

import { useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';

const Card = ({
    img,
    id,
    name,
    location,
    gender,
    species
}) => {
    const [isFav, setIsFav] = useState({favouriteId:'', fav:false});
    const dispatch= useDispatch();
    //getState() username and pass it to addFavouritesService
     //const  username  = useSelector((state) => state.user.username); //get the username and pass it to backend
    
    const handleAddToFavourites = (e) => {
        e.preventDefault();
        console.log('username', username)
        const characterId = e.target.id;
        setIsFav((prev) => ({...prev, favouriteId: characterId, fav:!isFav.fav}))
        addFavourites(characterId) 
    };

    const addFavourites = async (characterId) => {
        
        try {
            if(isFav.favouriteId === false) {
                //REMOVE FROM FAVOURITES
                //dispatch(removeFromFavourites(isFav.id))
            console.log('REMOOOVE')

            } else {
                //ADD TO FAVOURITES
            console.log('ADDD')
                const results = await services.addFavouritesService(characterId, ????);
                console.log(results)
                //dispatch(addToFavouritesAction(results));
            }
        } catch(error) {
            console.log(error)
            // dispatch(addToFavouritesError(error))
        }  
    }

    return (
        <div className={styles.card} key={id} >
            <img src={img} />
            <div className={styles.contentCard}>
                <div className={styles.contentCard_visible}>
                    <h4>{name}</h4>
                    <button type="button" onClick={handleAddToFavourites}>
                        <div>
                            <img src={favIcon} id={id} width={25} />
                            {isFav.fav && (<div className={styles.favIcon}></div>)}
                        </div>
                    </button>
                </div>
                <div className={styles.contentCard_info}>
                    <p><b>Location:</b> {location}</p>
                    <p><b>Specie:</b> {species}</p>
                    <p><b>Gender:</b> {gender}</p>
                </div>
            </div>
        </div>
    )
}

export default Card