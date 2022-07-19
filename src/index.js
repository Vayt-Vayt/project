import React from 'react';
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { state } from './component/redux/state';



ReactDom.render(
    <BrowserRouter>
        <App state={state} />
    </BrowserRouter>,
    document.getElementById('root')
);

