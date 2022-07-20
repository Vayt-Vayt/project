import React from 'react'
import './App.css';
import Dialogs from './component/Dialogs/Dialogs';
import Header from './component/header/Header';
import Navbar from './component/navbar/Navbar';
import Profile from './component/profile/Profile';
import { Route, Routes } from 'react-router-dom';
import News from './component/news/News';
import Music from './component/music/Music';
import Settings from './component/setings/Settings';

function App(props) {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar state={props.state.sadebar}/>
      <div className="app-wrapper-content">
        <Routes>
          <Route
            path='/profile'
            element={<Profile
              profilePage={props.state.profilePage}
              dispatch={props.dispatch}
            />}
          />
          <Route
            path='/dialogs'
            element={<Dialogs
              messagesPage={props.state.messagesPage}
              dispatch={props.dispatch}
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
