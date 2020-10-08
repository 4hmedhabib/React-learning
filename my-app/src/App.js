import React from "react";
import Person from "./Person/Person";
import "./App.css";

const App = () => {
  const state = {
    persons: [
      { name: "Ahmed E. Habib", age: 19 },
      { name: "Nasri Habib", age: 14 },
      { name: "Marwa Habib", age: 12 },
    ],
  };

  return (
    <div className="App">
      <h1>Hi, I am React 16.13 Version</h1>
      <Person name={state.persons[0].name} age={state.persons[0].age} />
      <Person name={state.persons[1].name} age={state.persons[1].age}>
        My Hoppies: Racing
      </Person>
      <Person name={state.persons[2].name} age={state.persons[2].age} />
    </div>
  );
};

export default App;
