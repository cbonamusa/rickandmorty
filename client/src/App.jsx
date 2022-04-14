import { useState } from 'react'
import LoginAndRegister from './pages/LoginAndRegister';
import Characters from './pages/Characters';
import './styles/globalStyles.scss'


const App = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
        {/* { !isLoggedIn ? (<LoginAndRegister />) : (<Characters />) } */}
        <Characters />
    </>

  )

}

export default App