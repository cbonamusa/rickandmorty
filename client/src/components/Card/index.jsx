import styles from './Styles.module.scss';
import favIcon from '/favourite.svg';
import * as userServices from '../../../services/user.service';

import { updateFavouritesAction } from "../../../store/reducers/users/users.actions";

import { useEffect, useState, useRef } from 'react';
import { useDispatch , useSelector } from 'react-redux';

/**
 * Component Card
 * @component
 * @param {string} img Character's image
 * @param {string} id Character's id
 * @param {string} name Character's name
 * @param {string} location Character's location
 * @param {string} gender Character's gender
 * @param {string} species Character's specie
 * @example
 *  <Card img="/path" id="1" name="Rick" location="Barcelona" gender="Male" species="Human" /> 
 */
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

    /**
     * Handles click on favourite button and changes the state
	 * @async
	 * @fires setFav
     */
    const handleFavourites = (e) => {
        e.preventDefault();
        const characterId = e.target.id;
        setIsFav((prev) => ({...prev, favouriteId:characterId, fav:!prev.fav }));
        notInitialRender.current = true;
    };

    /**
     * When character is clicked and changed to favourite:
	 * @throws addFavouritesService 
     * @throws updateFavs 
     * @async
     */   
    const addFavourites = async (characterId) => {
        try {
            await userServices.addFavouritesService(characterId, user.username);
            updateFavs();

        } catch(error) {
            console.log(error)
        }  
    };


    /**
     * When character is clicked and changed to not favourite:
	 * @throws removeFromFavourites 
     * @throws updateFavs 
     * @async
     */   
    const removeFavourites = async (characterId) => {
        try {
            await userServices.removeFromFavourites(characterId, user.username);
            updateFavs();

        } catch(error) {
            console.log(error);
        }  
    };

    /**
     * Gets the favourites from server and keeps it as favs on it's state
	 * @throws favouritesFromServer 
     * @fires setFav
     * @async
     */   
    const getAndSaveFavourites = async () => {
        const favs = await userServices.favouritesFromServer(user.username);
        favs[0].favourites?.map(fav => {
            if (fav == id) {
                setIsFav((prev) => ({...prev, fav:true}))
            } 
        });
    };

    /**
     * Updates the favourites from server to redux store
	 * @throws favouritesFromServer 
     * @fires updateFavouritesAction
     * @async
     */ 
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