import React, { useState, createContext, useContext } from 'react';
import data from "./data"

const PersonContext = createContext();

const App = ()=> {
    const [person, setPerson] = useState(data)
    console.log(person)
    return(
        <div className="App component" >
            <h1>Main App</h1>
            <PersonContext.Provider value={[person, setPerson]} >
                <SubComp1/>
            </PersonContext.Provider>
        </div>
    
    );
};


const SubComp1 = (props) => {
    const [ person ] = useContext(PersonContext)
    return(
        <div className="component">
            <h2>sub comp 1</h2>
            <h3>Name: {person.name.title} {person.name.first} {person.name.last} </h3>
            <SubComp2/>
        </div>
    )
}

const SubComp2 = (props) => {
    const [person] = useContext(PersonContext)
    return(
        <div className="component">
            <h2>sub comp 2</h2>
            <h3>{person.location.street} {person.location.city} {person.location.state} </h3>
            <SubComp3/>
        </div>
    )
}

const SubComp3 = (props) => {
    const [ person, setPerson ] = useContext(PersonContext)

    const changeLocation = () => {
        setPerson({
            ...person,
            location: {
                street:"16 stockbridge",
                city: "cohasset",
                state: "MA"
            }
        })
    }
    return(
        <div className="component">
            <h2>sub comp 3</h2>
            <button onClick={changeLocation}>Change Location</button>
        </div>
    )
}
export default App;