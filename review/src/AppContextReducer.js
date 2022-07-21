import React, {createContext, useContext, useState} from 'react';
import data from './data';

//createContext() - creates the context object, holds state to be shared within group of components.
//useContext() - lets us access the data within the context object.

const PersonContext = createContext();

const App = () => {
    const [ person, setPerson ] = useState(data);

    return(<div className="App component">
        <PersonContext.Provider value={{person, setPerson}}>
            <h1>Main App</h1>
            <SubComp1 />
        </PersonContext.Provider>
    </div>);
};

const SubComp1 = () => {
    const { person, setPerson } = useContext(PersonContext);
    console.log("person from context:", person)
    const handleChange = () => {
        setPerson({
            ...person,
            location: {
                city: "new york",
                postcode: 11225,
                state: "NY",
                street: "some main street"
            }
        })
    }
    return(
        <div className="component">
            <h1>Sub Comp 1</h1>
            <h2>{person.name.title} {person.name.first} {person.name.last}</h2>
            <button onClick={handleChange}>Change Location</button>
            <SubComp2  />
        </div>
    )
}

const SubComp2 = () => {
    return(
        <div className="component">
            <h1>Sub Comp 2</h1>
            <SubComp3  />
        </div>
    )
}

const SubComp3 = () => {
    const { person, setPerson } = useContext(PersonContext);
    const handleClick = () => {
        setPerson({
            ...person,
            name: {
                title: "Mr",
                first: "John",
                last: "Doe"
            }
        })
    }
    return(
        <div className="component">
            <h1>Sub Comp 3</h1>
            <h2>{person.location.street} {person.location.city} {person.location.state} {person.location.postcode}</h2>
            <button onClick={handleClick}>Change Name</button>
        </div>
    )
}



export default App;