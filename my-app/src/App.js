import React, { useState } from "react";
import Person from "./Person/Person";
import "./App.css";

const App = (props) => {
  const [personState, setPersonState] = useState({
    persons: [
      { name: "Ahmed E. Habib", age: 19 },
      { name: "Nasri Habib", age: 14 },
      { name: "Marwa Habib", age: 12 },
    ],
    otherState: "otherState",
  });

  const switchNameHandler = () => {
    setPersonState({
      persons: [
        { name: "Ahmed E. ", age: 19 },
        { name: "Nasri ", age: 14 },
        { name: "Marwa ", age: 12 },
      ],
    });
  };

  const nameChangeHandler = (event) => {
    setPersonState({
      persons: [
        { name: "Ahmed E. Habib", age: 19 },
        { name: event.target.value, age: 14 },
        { name: "Marwa Habib", age: 12 },
      ],
    });
  };

  return (
    <div className="App">
      <button onClick={switchNameHandler} className="btnHandler">
        Toggle
      </button>
      <h1>Hi, I am React 16.13 Version</h1>
      <Person
        name={personState.persons[0].name}
        age={personState.persons[0].age}
      />
      <Person
        name={personState.persons[1].name}
        age={personState.persons[1].age}
        nameChange={nameChangeHandler}
      />
      <Person
        name={personState.persons[2].name}
        age={personState.persons[2].age}
      />
    </div>
  );
};

export default App;
