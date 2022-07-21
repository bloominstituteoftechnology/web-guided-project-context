import React, {useState} from 'react';
import data from './data';

const App = () => {
    const [ person, setPerson ] = useState(data);
    console.log("person data:", person)

    return(<div className="App component">
        <h1>Main App</h1>
        <SubComp1 person={person} setPerson={setPerson}/>
    </div>);
};

const SubComp1 = ({person, setPerson}) => {
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
            <SubComp2 person={person} setPerson={setPerson} />
        </div>
    )
}

const SubComp2 = ({person, setPerson}) => {
    return(
        <div className="component">
            <h1>Sub Comp 2</h1>
            <SubComp3 person={person} setPerson={setPerson} />
        </div>
    )
}

const SubComp3 = ({person, setPerson}) => {
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