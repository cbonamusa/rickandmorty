import styles from './Styles.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginErrorAction, loginSuccessAction} from "../../../store/reducers/users/users.actions";
import * as services from '../../../services/user.service';


/** 
 * Component Loging / Register Form
 * @component
 * @param form {string} String to load login form or register form
 * @example
 *  <LogRegForm form='login' /> 
 */
const LogRegForm = ({form}) => {
   const dispatch = useDispatch();
   const [notification, setNotification] = useState({type: 'none', form:null, text: ''});
   const [userData, setUserData] = useState({
      username:'',
      email: '',
      password: ''
   })

   /**
   * Submits LOGIN form and save token and username in localstorage & in store
   * @throws loginRequest
   * @throws loginErrorAction 
   * @throws loginSuccessAction 
   * @module localStorage
   * @fires setNotification
   * @async
   */   
   const submitLogin = async (e) => {
      e.preventDefault();
      try {
         const { error, accessToken } = await services.loginRequest(userData);
         if (error) {
            setNotification({ type:'error', form:'login', text: error.toString() });
            dispatch(loginErrorAction(error));

         } else {
            setNotification({ type:'ok', form:'login', text: 'Success' });
            localStorage.setItem('token', accessToken);
            localStorage.setItem('username', userData.username);
            dispatch(loginSuccessAction(accessToken, userData.username));
         }
      } catch(error) {
         setNotification({ type:'error', form:'login', text: error.toString() });
      }
   }

   /**
   * Submits REGISTER form and save token and username in localstorage & in store
   * @throws registerRequest
   * @module localStorage
   * @fires setNotification
   * @fires setUserData
   * @async
   */   
   const submitRegister = async (e) => {
      e.preventDefault();
      try {
         const json = await services.registerRequest(userData);
         if (json.error) {
            setNotification({ type:'error', form:'register', text:json.error.toString() })
         } else {
            setNotification({ type:'ok', form:'register', text: 'Success! Your user account is created' });
            setUserData({username:'', email:'', password: ''});
         }
      } catch(error) {
         setNotification({ type:'error', form:'register', text: error.toString() })
      }
   }

   const notificationVariants = notification.type == 'none' ? styles.none 
   : notification.type == 'error' ? styles.error 
   : notification.type == 'ok' ? styles.ok : '';

   return (
      <div className={styles.formContent}>
         <form onSubmit={form === 'login' ? submitLogin : submitRegister }>
            { form === 'register' && (
               <label>
                  <p>Email</p>
                  <input 
                     type="text" 
                     value={userData.email} 
                     onChange={(e) => setUserData((prev) => ({...prev, email:e.target.value}))} 
                  />
               </label>
            )}
            <label>
               <p>Username</p>
               <input 
                  type="text" 
                  value={userData.username} 
                  onChange={(e) => setUserData((prev) => ({...prev, username:e.target.value}))}
               />
            </label>
            <label>
               <p>Password</p>
               <input 
                  type="text" 
                  value={userData.password} 
                  onChange={(e) => setUserData((prev) => ({...prev, password:e.target.value}))} 
               />
            </label>
            <label htmlFor="robot">
               <input type="checkbox" id="robot" value='robot' />
                  I'm not a Robot
            </label>
   
            {notification.form === form && (
               <div className={`${styles.notifications} ${notificationVariants}`}>
                  <p>{notification.text}</p>
               </div>
            )}
            <input type="submit" value={form === 'login' ? 'Log In' : 'Register'} />
         </form>
      </div>
   )
}

export default LogRegForm