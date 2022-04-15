import { useDispatch, useSelector} from 'react-redux';

import styles from './Styles.module.scss';
import logo from '/logo.png'

/**
 * Component Header
 * @component
 * @example
 *  <Header /> 
 */
export const Header = () => {
    const dispatch = useDispatch();
    //const token = localStorage.getItem('token')
    //const [isLoggedIn, setIsLoggedIn] = useState(!!token);
    
    const handleLogout = () => {
        dispatch(logoutAction());
        localStorage.removeItem('token');
        sessionStorage.removeItem('token')
    }
    const userLogged = useSelector((state) => state.isLoggedIn);
  
    return (
        <header className={styles.header}>
            <div className={styles.header_content}>
                <img src={logo} width={200}/>
                { userLogged && (
                    <button className={styles.logoutCTA} onClick={handleLogout}>Logout</button>
                )}
            </div>
        </header>
    )
}

export default Header;
