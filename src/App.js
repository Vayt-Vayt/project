import React from 'react'
import './App.css';
import Header from './component/header/Header';
import Profile from './component/profile/Profile';
import { Route, Routes } from 'react-router-dom';
import News from './component/news/News';
import Music from './component/music/Music';
import Settings from './component/setings/Settings';
import DialogsContainer from './component/Dialogs/DialogsContainer';
import NavbarContainer from './component/navbar/NavbarContainer';

function App(props) {
  return (
    <div className='app-wrapper'>
      <Header />
      <NavbarContainer />
     
      <div className="app-wrapper-content">
        <Routes>
          <Route
            path='/profile'
            element={<Profile
            />}
          />
          <Route
            path='/dialogs'
            element={<DialogsContainer
            />}
          />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/setings' element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
