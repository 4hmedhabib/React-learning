import React, { useState } from "react";
import Person from "./Person/Person";
import "./App.css";
import person from "./Person/Person";

const App = (props) => {
  const [personState, setPersonState] = useState({
    persons: [
      { id: "p_01", name: "Ahmed E. Habib", age: 19 },
      { id: "p_02", name: "Nasri Habib", age: 14 },
      { id: "p_03", name: "Marwa Habib", age: 12 },
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
  //};

  const nameChangeHandler = (event, id) => {
    const personIndex = personState.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...personState.persons[personIndex],
    };

    person.name = event.target.value;

    const persons = [...personState.persons];
    persons[personIndex] = person;

    setPersonState({
      persons: persons,
      showPerson: personState.showPerson,
    });
  };

  const togglePersonHandler = () => {
    const doesShow = personState.showPerson;
    const persons = personState.persons;
    setPersonState({ persons: persons, showPerson: !doesShow });
  };

  const deletePersonHandler = (personIndex) => {
    const persons = [...personState.persons];
    const showPersons = personState.showPerson;
    persons.splice(personIndex, 1);
    setPersonState({ persons: persons, showPerson: showPersons });
  };

  let persons = null;

  if (personState.showPerson) {
    persons = (
      <div>
        {personState.persons.map((person, index) => {
          return (
            <Person
              name={person.name}
              age={person.age}
              click={() => deletePersonHandler(index)}
              changed={(event) => nameChangeHandler(event, person.id)}
              key={person.id}
            />
          );
        })}
        ;
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
