import { useState } from 'react';
import styles from './Styles.module.scss';


const MainCharPanel = () => {
	const characters = true;
	const fav = false;

   	const [tab, setTab] = useState(characters);
	const handleTabCharacters = () => setTab(characters);
	const handleTabFav = () => setTab(fav);

	return (
		<div className={styles.charPanel}>
			<div className={styles.tabs}>
				<button onClick={handleTabCharacters} className={(tab === characters) ? styles.tabActive : styles.tabUnactive}>
					Rick & Morty Characters
				</button>
				<button onClick={handleTabFav} className={(tab === fav) ? styles.tabActive : styles.tabUnactive}>
					My Favourites
				</button>
			</div>
			<div className={styles.content}>
		
			</div>						
		</div>
	)
}

export default MainCharPanel