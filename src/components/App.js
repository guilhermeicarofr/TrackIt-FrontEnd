import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalStyles from '../assets/globalstyles'

import LogIn from './LogIn';

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  );
}