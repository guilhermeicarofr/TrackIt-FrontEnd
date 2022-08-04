import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserContext from './../contexts/UserContext';
import GlobalStyles from '../assets/globalstyles';

import LogIn from './LogIn';
import SignUp from './SignUp';

export default function App() {

  const [userinfo, setUserinfo] = useState({});

  return (
    <BrowserRouter>
      <GlobalStyles />
      <UserContext.Provider value={{ userinfo, setUserinfo }}>
        <Routes>
          <Route path='/' element={<LogIn />} />
          <Route path='/cadastro' element={<SignUp />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}