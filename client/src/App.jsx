import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import { useDispatch, useSelector} from 'react-redux';

import Header from "./components/Header";
import Characters from './pages/Characters';
import LoginAndRegister from './pages/LoginAndRegister';
import NotFound from './pages/NotFound';
import './styles/globalStyles.scss';




const App = (props) => {
  //TODO redux!
  //const token = localStorage.getItem('token')
  //const [isLoggedIn, setIsLoggedIn] = useState(!!token);
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

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