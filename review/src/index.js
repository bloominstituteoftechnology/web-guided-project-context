import React from 'react';
import { render } from 'react-dom';
import './styles.scss';
import data from './data';
import App from './AppContextReducer';

render(
    <App/>,
    document.querySelector('#root')
);