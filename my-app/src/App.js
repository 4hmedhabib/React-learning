import React, { useState } from "react";
import Person from "./Person/Person";
import "./App.css";
import person from "./Person/Person";

const App = (props) => {
  const [personState, setPersonState] = useState({
    persons: [
      { name: "Ahmed E. Habib", age: 19 },
      { name: "Nasri Habib", age: 14 },
      { name: "Marwa Habib", age: 12 },
    ],
    otherState: "otherState",
    showPerson: false,
  });

  // const switchNameHandler = () => {
  //   setPersonState({
  //     persons: [
  //       { name: "Ahmed E. Habib", age: 19 },
  //       { name: "Nasri Habib", age: 14 },
  //       { name: "Marwa Habib", age: 12 },
  //     ],
  //   });
  // };

  const nameChangeHandler = (event) => {
    setPersonState({
      persons: [
        { name: "Ahmed E. Habib", age: 19 },
        { name: event.target.value, age: 14 },
        { name: "Marwa Habib", age: 12 },
      ],
      showPerson: personState.showPerson,
    });
  };

  const togglePersonHandler = () => {
    const doesShow = personState.showPerson;
    const persons = personState.persons;
    setPersonState({ persons: persons, showPerson: !doesShow });
  };

  let persons = null;

  if (personState.showPerson) {
    persons = (
      <div>
        {personState.persons.map((person) => {
          return <Person name={person.name} age={person.age} />;
        })}
      </div>
    );
  }

  return (
    <div className="App">
      <button
        className="btnHandler"
        onClick={togglePersonHandler /*switchNameHandler*/}
      >
        Toggle Persons
      </button>
      {persons}
    </div>
  );
};

export default App;
