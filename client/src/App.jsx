import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

import Header from "./components/Header";
import Characters from './pages/Characters';
import LoginAndRegister from './pages/LoginAndRegister';
import NotFound from './pages/NotFound';
import './styles/globalStyles.scss';




const App = (props) => {
  //TODO redux!
  const token = localStorage.getItem('token')
  const [isLoggedIn, setIsLoggedIn] = useState(!!token);

  const logIn = (token) => {
    localStorage.setItem('token', token);
    setIsLoggedIn(true)
  }

  return (   
    <>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginAndRegister />} />
            { isLoggedIn ? (
               <Route path="/characters" element={<Characters />} />
            ) : (
              <Route path="/characters" element={<Navigate to="/" />} />
            )}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
    </>

  )

}

export default App