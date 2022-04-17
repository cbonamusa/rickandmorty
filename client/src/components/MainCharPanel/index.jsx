import { useState, useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import Card from '../Card';
import styles from './Styles.module.scss';
import * as charServices from '../../../services/characters.service';

const MainCharPanel = () => {
	const showCharacters = true;
	const showFavourites = false;

   	const [tab, setTab] = useState(showCharacters);
	const [favData, setFavData] = useState([])

	const { characters }= useSelector((state) => state.characters);
	const { favourites } = useSelector((state) => state.user );

	const handleTabCharacters = () => setTab(showCharacters);
	const handleTabFav = () => setTab(showFavourites);
	
	//TODO: REMOVE WHEN CARDS FAVS IS FIXED
	const favs = [...new Set(favourites)];
	const getFavFromBe = () => {
		favs?.map(id => {
			charServices.getFavCharacter(id)
			.then(resp => resp.data )
			.then(result => {
				const alreadyExist = favData.some(fav => {
					if (fav.id === result.id) {
						return true;
					}
				})
				if (!alreadyExist) {
					setFavData((prev) => ([...prev, result]));
				}
			})
			.catch(error => console.log(error))
		})
	}


	useEffect(() => {
		getFavFromBe();
	}, [tab])


	return (
		<div className={styles.charPanel}>
			<div className={styles.tabs}>
				<button onClick={handleTabCharacters} className={(tab === showCharacters) ? styles.tabActive : styles.tabUnactive}>
					All Characters
				</button>
				<button onClick={handleTabFav} className={(tab === showFavourites) ? styles.tabActive : styles.tabUnactive}>
					My Favourites
				</button>
			</div>
			<div className={styles.content}>
				{ tab === showCharacters &&  characters != null && (
					<div className={styles.showCharactersContainer}>
						{characters?.map(character => (
							<Card key={`all-${character.id}`}
								id={character.id}
								img={character.image}
								name={character.name}
								location={character.location.name}
								gender={character.gender}
								species={character.species}
							/>
						))}
					</div>
				)}	
				{ tab === showFavourites && (
					(favData.length <= 0 && favData == undefined) ? (
						<h3>You don't have any Favourite characters yet!</h3>
					) : (
						<div className={styles.showCharactersContainer}>
							{favData?.map(character => (
								<Card key={`fav-${character.id}`}
									id={character.id}
									img={character.image}
									name={character.name}
									location={character.location.name}
									gender={character.gender}
									species={character.species}
								/>
							))}
						</div>
					)
				)}	
			</div>						
		</div>
	)
}

export default MainCharPanel