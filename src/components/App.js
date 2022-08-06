import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import UserContext from '../contexts/UserContext';
import GlobalStyles from '../assets/globalstyles';

import TopBar from './Fixed/Topbar';
import BottomBar from './Fixed/BottomBar';
import LogIn from './User/LogIn';
import SignUp from './User/SignUp';
import TodayList from './Today/TodayList';
import Habits from './Habits/Habits';
import History from './History/History';

export default function App() {

  const [userinfo, setUserinfo] = useState({token: ''});
  const [loadlist, setLoadlist] = useState(false);

  return (
    <UserContext.Provider value={{ userinfo, setUserinfo, loadlist, setLoadlist }}>
      <GlobalStyles />
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path='/' element={<LogIn />} />
          <Route path='/cadastro' element={<SignUp />} />
          <Route path='/hoje' element={<TodayList />}/>
          <Route path='/habitos' element={<Habits />}/>
          <Route path='/historico' element={<History />}/>
        </Routes>
        <BottomBar />
      </BrowserRouter>
    </UserContext.Provider>
  );
}