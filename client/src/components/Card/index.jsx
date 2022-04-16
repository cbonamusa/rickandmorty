import styles from './Styles.module.scss';
import favIcon from '/favourite.svg';
import * as services from '../../../services/user.service';
import { useState } from 'react';
import { useEffect } from 'react';

const Card = ({
    img,
    id,
    name,
    location,
    gender,
    species
}) => {
    const [isFav, setIsFav] = useState({id:'', fav:false});

    const handleAddToFavourites = (e) => {
        e.preventDefault();
        const characterId = e.target.id;

        try {
            setIsFav((prev) => ({...prev, id: characterId, fav:!isFav.fav}))
            if(isFav.fav === false) {
                //REMOVE FROM FAVOURITES
            } else {
                //ADD TO FAVOURITES
                //const favourites = await services.addFavourites(characterId);
                // dispatch(addToFavourites(isFav.id))
            }
        } catch(error) {
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