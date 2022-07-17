import React from 'react'
import './App.css';
import Dialogs from './component/Dialogs/Dialogs';
import Header from './component/header/Header';
import Navbar from './component/navbar/Navbar';
import Profile from './component/profile/Profile';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import News from './component/news/News';
import Music from './component/music/Music';
import Settings from './component/setings/Settings';

function App() {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path='/profile' element={<Profile />} />
            <Route path='/dialogs' element={<Dialogs />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/setings' element={<Settings />} />
          </Routes>

        </div>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
