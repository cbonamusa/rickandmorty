import styles from './Styles.module.scss';
import favIcon from '/favourite.svg';
import * as userServices from '../../../services/user.service';

import { updateFavouritesAction } from "../../../store/reducers/users/users.actions";

import { useEffect, useState, useRef } from 'react';
import { useDispatch , useSelector } from 'react-redux';


const Card = ({
    img,
    id,
    name,
    location,
    gender,
    species
}) => {
    const [isFav, setIsFav] = useState({favouriteId:'', fav:false });
    const dispatch= useDispatch();
    const user = useSelector((state) => state.user);
    const notInitialRender = useRef(false);


    const handleFavourites = (e) => {
        e.preventDefault();
        const characterId = e.target.id;
        setIsFav((prev) => ({...prev, favouriteId:characterId, fav:!prev.fav }));
        notInitialRender.current = true;
    };

        
    const addFavourites = async (characterId) => {
        try {
            userServices.addFavouritesService(characterId, user.username);
        } catch(error) {
            console.log(error)
        }  
    };

    const removeFavourites = async (characterId) => {
        try {
            userServices.removeFromFavourites(characterId, user.username);
        } catch(error) {
            console.log(error)
        }  
    };

    const getFavourites = async () => {
        const favs = await userServices.favouritesFromServer(user.username);
        dispatch(updateFavouritesAction( favs[0].favourites ))
    };

 
    useEffect(() => {
        getFavourites();
        if (notInitialRender.current) {
            if (isFav.fav) {
                addFavourites(isFav.favouriteId); 
            } else {
                removeFavourites(isFav.favouriteId); 
            }
        }
        notInitialRender.current = false;
    }, [isFav.fav]);

    //PENDING TODO: Get the already favourites and change it's state from initial state (false) to true!!!
    return (
        <div className={styles.card} key={id} >
            <img src={img} />
            <div className={styles.contentCard}>
                <div className={styles.contentCard_visible}>
                    <h4>{name}</h4>
                    <button type="button" onClick={handleFavourites}>
                        <div>
                            <img src={favIcon} id={id} width={25} />
                            { (isFav.fav) && (<div className={styles.favIcon}></div>)}
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