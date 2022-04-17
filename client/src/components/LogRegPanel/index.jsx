import { useState } from 'react';
import styles from './Styles.module.scss';
import LogRegForm from '../LogRegForm';


const LogRegPanel = () => {
	const login = 1;
	const register = 0;

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
						'1': <LogRegForm form='login' />,
						'0': <LogRegForm form='register' />
					}[tab]
				}
			</div>						
		</div>
	)
}

export default LogRegPanel