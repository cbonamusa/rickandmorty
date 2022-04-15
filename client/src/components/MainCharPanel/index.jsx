import React from 'react'

const MainCharPanel = () => {

  return (
		<div className={styles.mainPanel}>
			<div className={styles.content}>
				<h1>{contentData == 'characters' ? 'Rick & Morty Characters!': 'Your Favourites'}</h1>
			</div>						
		</div>
  )
}

export default MainCharPanel