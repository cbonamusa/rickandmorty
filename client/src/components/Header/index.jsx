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
    const token = localStorage.getItem('token')
    const [isLoggedIn, setIsLoggedIn] = useState(!!token);
    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(true)
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
