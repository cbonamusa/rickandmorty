import { useState } from 'react'
import styles from './Styles.module.scss';
import logo from '/logo.png'

/**
 * Component Header
 * @component
 * @example
 *  <Header /> 
 */
export const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const handleLogout = () => {
        setIsLoggedIn(false);
    }
  return (
    <header className={styles.header}>
        <div className={styles.header_content}>
            <img src={logo} width={200}/>
            { isLoggedIn && (
                <button className={styles.logoutCTA} onClick={handleLogout}>Logout</button>
            )}
        </div>
    </header>
  )
}

export default Header;
