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
            await userServices.addFavouritesService(characterId, user.username);
            updateFavs();

        } catch(error) {
            console.log(error)
        }  
    };

    const removeFavourites = async (characterId) => {
        try {
            await userServices.removeFromFavourites(characterId, user.username);
            updateFavs();

        } catch(error) {
            console.log(error);
        }  
    };

    const getAndSaveFavourites = async () => {
        const favs = await userServices.favouritesFromServer(user.username);
        favs[0].favourites?.map(fav => {
            if (fav == id) {
                setIsFav((prev) => ({...prev, fav:true}))
            } 
        });
    };

    const updateFavs = async () => {
        const favs = await userServices.favouritesFromServer(user.username);
        dispatch(updateFavouritesAction( favs[0].favourites ));
    }
 
    useEffect(() => {
        updateFavs();
        if (notInitialRender.current) {
            isFav.fav ? ( addFavourites(isFav.favouriteId) ) : ( removeFavourites(isFav.favouriteId));
        } else {
            getAndSaveFavourites();
        }
     
        notInitialRender.current = false;
    }, [isFav.fav]);

    return (
        <div className={styles.card} key={id} >
            <img className={styles.charPicture} src={img} />
            <div className={styles.contentCard}>
                <div className={styles.contentCard_visible}>
                    <h4>{name}</h4>
                    <button type="button" onClick={handleFavourites}>
                        <div>
                            <img src={favIcon} id={id} width={25} />
                            { isFav.fav && (<div className={styles.favIcon}></div>)}
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