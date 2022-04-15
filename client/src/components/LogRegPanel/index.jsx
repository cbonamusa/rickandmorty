import { useState } from 'react';
import styles from './Styles.module.scss';
import LogRegForm from '../LogRegForm';


const LogRegPanel = () => {
	const login = true;
	const register = false;

    const [tab, setTab] = useState(login);
	const handleTabLog = () => setTab(login);
	const handleTabReg = () => setTab(register);

	return (
		<div className={styles.logPanel}>
			<div className={styles.tabs}>
				<button onClick={handleTabLog} className={ (tab == login) ? styles.tabActive : styles.tabUnactive}>
					Log In
				</button>
				<button onClick={handleTabReg} className={ (tab == register) ? styles.tabActive : styles.tabUnactive} >
					Register
				</button>
			</div>
			<div className={styles.content}>
				{ 
					{
						'true': <LogRegForm form='login' />,
						'false': <LogRegForm form='register' />
					}[tab]
				}
			</div>						
		</div>
	)
}

export default LogRegPanel