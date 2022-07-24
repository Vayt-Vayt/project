import React from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import News from './component/news/News';
import Music from './component/music/Music';
import Settings from './component/setings/Settings';
import DialogsContainer from './component/Dialogs/DialogsContainer';
import NavbarContainer from './component/navbar/NavbarContainer';
import UsersContainer from './component/Users/UsersContainer';
import ProfileContainer from './component/profile/ProfileContainer';
import Profile from './component/profile/Profile';
import HeaderContainer from './component/header/HeaderContainer';

function App(props) {
  return (
    <div className='app-wrapper'>
      <HeaderContainer />
      <NavbarContainer />
      <div className="app-wrapper-content">
        <Routes>
          <Route path='/profile' element={<ProfileContainer />}>
            <Route  path=':id' element={<Profile />} />
          </Route>
          <Route path='/dialogs/*' element={<DialogsContainer />} />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/setings' element={<Settings />} />
          <Route path='/users' element={<UsersContainer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
