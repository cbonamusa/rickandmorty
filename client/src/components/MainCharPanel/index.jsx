import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card';
import styles from './Styles.module.scss';
import * as charServices from '../../../services/characters.service';

const MainCharPanel = () => {
	const showCharacters = 0;
	const showFavourites = 1;

   	const [tab, setTab] = useState(showCharacters);
	const [favData, setFavData] = useState([])

	const { characters }= useSelector((state) => state.characters);
	const { favourites } = useSelector((state) => state.user );
	const user = useSelector((state) => state.user);

	const handleTabCharacters = () =>  setTab(showCharacters)  ;
	const handleTabFav = () =>   setTab(showFavourites);
	
	/** USIN BD SERVER */
	// const getFavFromAPI = async () => {
	// 	console.log('enter functiooooon')

	// 	const favs = await userServices.favouritesFromServer(user.username);
	// 	favs[0].favourites?.map(id => {
	// 		charServices.getFavCharacter(id)
	// 		.then(resp => resp.data )
	// 		.then(result => {
	// 			const alreadyExist = favData.some(fav => {
	// 				if (fav.id === result.id) {
	// 					return true;
	// 				} 
	// 			})
	// 			if (!alreadyExist && tab === showFavourites) {
	// 				setFavData((prev) => ([...prev, result]));
	// 			}
	// 		})
	// 		.catch(error => console.log(error))
	// 	});
	// }


	/** USING REDUX */
	const getFavFromAPI = async () => {
		console.log('enter functiooooon', favourites)
		await favourites?.map(id => {
			charServices.getFavCharacter(id)
				.then(resp => resp.data )
				.then(result => {
					const alreadyExist = favData.some(fav => {
						if (fav.id === result.id) {
							return true;
						} 
					})
					if (!alreadyExist  && result != undefined) {
						setFavData((prev) => ([...prev, result]));
					}
				})
				.catch(error => console.log(error))
		});
	}

	useEffect(() => {
		if ( tab === showFavourites) {
			getFavFromAPI();
		}
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
					(favData.length == 0) ? (
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