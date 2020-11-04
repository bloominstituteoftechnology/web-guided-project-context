import React from 'react';
import { render, useState } from 'react-dom';
import './styles.scss';
import data from './data';

const App = ()=> {
    const [person, setPerson] = useState();
    return(<h1>Hello World</h1>);
};

render(
    <App/>,
    document.querySelector('#root')
);