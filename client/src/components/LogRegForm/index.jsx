import styles from './Styles.module.scss';

/**
 * Component Loging / Register Form
 * @component
 * @param form {string} String to load login form or register form
 * @example
 *  <LogRegForm form='login' /> 
 */
const LogRegForm = ({form}) => {
  const login = async (e) => {
    e.preventDefault();
    console.log('LOGIIIIN')

  }
  const register = async (e) => {
    e.preventDefault();
    console.log('Registeeeer')

  }
  return (
    <div className={styles.formContent}>
     <form onSubmit={form === 'login' ? login : register }>
        <label>
          <p>Username</p>
          <input type="text" />
        </label>
        { form === 'register' && (
            <label>
                <p>Email</p>
                <input type="text" />
            </label>
        )}
        <label>
          <p>Password</p>
          <input type="text" />
        </label>
        <input type="submit" value={form === 'login' ? 'Log In' : 'Register'} />
     </form>
    </div>
  )
}

export default LogRegForm