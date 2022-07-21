import React, { useState, createContext } from "react";

import { data } from "./data";

import FamilyTree from "./components/FamilyTree";
import "./styles.scss";

export const FamilyContext = createContext();

export default function App() {
  const [families] = useState(data);
  const [activeFamily, setActiveFamily] = useState(families[0]);
  console.log("active Family!", activeFamily)
  const person = "hello i'm a person"
  return (
    <div className="App">
      <FamilyContext.Provider value={{activeFamily, person}} >
      <section className="header">
        <h1>Family Trees</h1>
        {families.map(family => (
          <button
            className={`family-button ${family.familyName ===
              activeFamily.familyName && "active"}`}
            key={family.familyName}
            onClick={() => setActiveFamily(family)}
          >
            {family.familyName}
          </button>
        ))}
      </section>
      {activeFamily && <FamilyTree family={activeFamily} />}
      </FamilyContext.Provider>
    </div>
  );
}