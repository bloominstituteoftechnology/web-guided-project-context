import React, { useState } from 'react';

import data from './data';

import './styles.scss';

const App = ()=> {
    const [person, setPerson] = useState(data);
    return(<div className="App component">
        <h1>Main App</h1>
        <SubComponent1 person={person} setPerson={setPerson} />
    </div>);
};

const SubComponent1 = (props) => {
    const { person, setPerson } = props;

    return(
        <div className="component">
            <h1>SubComponent 1</h1>
            <SubComponent2 person={person} setPerson={setPerson} />
        </div>
    );
}

const SubComponent2 = (props) => {
    const { person, setPerson } = props;

    return(
        <div className="component">
            <h1>SubComponent 2</h1>
            <h3>Name: {person.name.title} {person.name.first} {person.name.last}</h3>
            <SubComponent3 person={person} setPerson={setPerson} />
        </div>
    );
}

const SubComponent3 = (props) => {
    const { person, setPerson } = props;

    const changeLocation = () => {
        setPerson({
            ...person,
            location: {
                street: "222 N 22 Street",
                city: "Philadelphia",
                state: "PA"
            }
        });
    }

    const changeName = () => {
        setPerson({
            ...person,
            name: {
                title: "Mr",
                first: "Warren",
                last: "Longmire"
            }
        });
    }

    return(
        <div className="component">
            <h1>SubComponent 3</h1>
            <h3>Location: {person.location.street} {person.location.city}, {person.location.state}</h3>
            <br/>
            <button onClick={changeLocation}>Change Location</button>
            <button onClick={changeName}>Change Name</button>
        </div>
    );
}

export default App;