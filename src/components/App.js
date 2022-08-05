import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import UserContext from '../contexts/UserContext';
import GlobalStyles from '../assets/globalstyles';

import TopBar from './Topbar';
import LogIn from './User/LogIn';
import SignUp from './User/SignUp';
import Habits from './Habits/Habits';

export default function App() {

  const [userinfo, setUserinfo] = useState({token: ''});
  
  return (
    <UserContext.Provider value={{ userinfo, setUserinfo }}>
      <GlobalStyles />
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path='/' element={<LogIn />} />
          <Route path='/cadastro' element={<SignUp />} />

          <Route path='/habitos' element={<Habits />}/>
        </Routes>
        {/* <BottomBar />   */}
      </BrowserRouter>
    </UserContext.Provider>
  );
}