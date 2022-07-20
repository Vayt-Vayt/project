import React from 'react';
import  ReactDom  from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { store } from './component/redux/state';


export const renderUI = (state) => {
    ReactDom.render(
       <BrowserRouter>
           <App state={state}  dispatch={store.dispatch.bind(store)} />
       </BrowserRouter>,
       document.getElementById('root')
   );
   }

renderUI(store.getState())
store.subscribe(renderUI)