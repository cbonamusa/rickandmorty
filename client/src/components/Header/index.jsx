import { useDispatch, useSelector} from 'react-redux';
import {logoutAction} from '../../../store/reducers/users/users.actions';
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

   /**
   * Handles logout button to logout 
   * @module localStorage
   */
   const handleLogout = () => {
      dispatch(logoutAction());
      localStorage.removeItem('token');
      localStorage.removeItem('username');
   }
   const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
    
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
