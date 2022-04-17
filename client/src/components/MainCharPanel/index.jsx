import { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import Card from '../Card';
import styles from './Styles.module.scss';


const MainCharPanel = () => {
	const showCharacters = true;
	const showFavourites = false;
   	const [tab, setTab] = useState(showCharacters)
	const { characters }= useSelector((state) => state.characters);
	const { favourites } = useSelector((state) => state.user );


	const handleTabCharacters = () => setTab(showCharacters);
	const handleTabFav = () => setTab(showFavourites);



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
					{characters.map(character => (
						<Card key={character.id}
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
				// (favourites.length === 0) ? (
				// 	<h3>You don't have any Favourite characters yet!</h3>
				// ) : (
				// 	// userFavourites.map(character => (
				// 	// 	<Card key={character.id}
				// 	// 	id={character.id}
				// 	// 	img={character.image}
				// 	// 	name={character.name}
				// 	// 	location={character.location.name}
				// 	// 	gender={character.gender}
				// 	// 	species={character.species}
				//   	// 	/>
				// 	// ))	
				// 	<p>comming</p>				
				// )
			<p>ouos</p>
			)}	
			</div>						
		</div>
	)
}

export default MainCharPanel