import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import { useDispatch, useSelector} from 'react-redux';
import { loginKeepSession } from '../store/reducers/users/users.actions'

import Header from "./components/Header";
import Characters from './pages/Characters';
import LoginAndRegister from './pages/LoginAndRegister';
import NotFound from './pages/NotFound';
import './styles/globalStyles.scss';




const App = (props) => {
  const token = localStorage.getItem('token');
  const dispatch = useDispatch();
  if (token) {
    dispatch(loginKeepSession());
  }
  const { isLoggedIn } = useSelector((state) => state.user);

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