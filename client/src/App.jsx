import { BrowserRouter, Routes, Route} from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector} from 'react-redux';
import { loginKeepSession } from '../store/reducers/users/users.actions';

import Header from "./components/Header";
import Characters from './pages/Characters';
import LoginAndRegister from './pages/LoginAndRegister';
import NotFound from './pages/NotFound';
import './styles/globalStyles.scss';





const App = (props) => {
  const token = localStorage.getItem('token');
  const username = localStorage.getItem('username');
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (token) {
      dispatch(loginKeepSession(token, username));
    }
  }, []);

  return (   
    <>
        <Header />
        <BrowserRouter>
          <Routes>
            { user.isLoggedIn ? (
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