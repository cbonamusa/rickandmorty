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
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  console.log('isLoggedIn app', isLoggedIn)
  return (   
    <>
        <Header />
        <BrowserRouter>
          <Routes>
            { isLoggedIn ? (
              <Route path="/" element={<Characters />} />
            ) : (
              <Route path="/" element={<LoginAndRegister />} />
            )}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
    </>

  )

}

export default App