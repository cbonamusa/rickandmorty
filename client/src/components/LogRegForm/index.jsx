import styles from './Styles.module.scss';
import { useState } from 'react'

/**
 * Component Loging / Register Form
 * @component
 * @param form {string} String to load login form or register form
 * @example
 *  <LogRegForm form='login' /> 
 */
const LogRegForm = ({form}) => {
  //TODO: Do it with redux
  const [userData, setUserData] = useState({
    username:'',
    email: '',
    password: ''
  })
  const [notification, setNotification] = useState({type: 'none', text: ''});

  const login = async (e) => {
    e.preventDefault();
    console.log('LOGIIIIN')

  }

  const register = async (e) => {
    e.preventDefault();
    try {
      const resp = await fetch(`http://localhost:5000/register`, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData)
      });
      const json = await resp.json();
      if (json.error) {
        setNotification({ type:'error', text:json.error.toString() })
      } else {
        setNotification({ type:'ok', text: 'Success! Your user account is created' })
      }
    } catch(error) {
      setNotification({ type:'error', text: error.toString() })

    }
  }

  const notificationVariants = notification.type == 'none' ? styles.none 
  : notification.type == 'error' ? styles.error 
  : notification.type == 'ok' ? styles.ok : '';

  return (
    <div className={styles.formContent}>
     <form onSubmit={form === 'login' ? login : register }>
        <label>
          <p>Username</p>
          <input type="text" value={userData.username} onChange={(e) => setUserData((prev) => ({...prev, username:e.target.value}))}/>
        </label>
        { form === 'register' && (
            <label>
                <p>Email</p>
                <input type="text" value={userData.email} onChange={(e) => setUserData((prev) => ({...prev, email:e.target.value}))} />
            </label>
        )}
        <label>
          <p>Password</p>
          <input type="text" value={userData.password} onChange={(e) => setUserData((prev) => ({...prev, password:e.target.value}))} />
        </label>
        <div className={`${styles.notifications} ${notificationVariants}`}>
          <p>{notification.text}</p>
        </div>
        <input type="submit" value={form === 'login' ? 'Log In' : 'Register'} />
     </form>
    </div>
  )
}

export default LogRegForm