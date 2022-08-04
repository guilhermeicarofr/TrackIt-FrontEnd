import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import UserContext from './../contexts/UserContext';
import GlobalStyles from './../assets/globalstyles';

import LogIn from './LogIn';
import SignUp from './SignUp';
import Habits from './Habits';

export default function App() {

  const [userinfo, setUserinfo] = useState({token: ''});
  
  return (
    <BrowserRouter>
      <GlobalStyles />
      <UserContext.Provider value={{ userinfo, setUserinfo }}>
        <Routes>
          <Route path='/' element={<LogIn />} />
          <Route path='/cadastro' element={<SignUp />} />

          <Route path='/habitos' element={<Habits />}/>
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}