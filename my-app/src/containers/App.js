import React, { useState, useEffect } from "react";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import WithClass from "../hoc/WithClass";

import Person from "../components/Persons/Person/Person";
import classes from "./App.css";
import person from "../components/Persons/Person/Person";

const App = (props) => {
  const [personState, setPersonState] = useState({
    persons: [
      { id: "p_01", name: "Ahmed E. Habib", age: 19 },
      { id: "p_02", name: "Nasri Habib", age: 14 },
      { id: "p_03", name: "Marwa Habib", age: 12 },
    ],
    otherState: "otherState",
    showPerson: false,
    showCockpit: true,
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
    const showCockpit = personState.showCockpit;
    setPersonState({
      persons: persons,
      showPerson: !doesShow,
      showCockpit: showCockpit,
    });
  };

  const deletePersonHandler = (personIndex) => {
    const persons = [...personState.persons];
    const showPersons = personState.showPerson;
    const showCockpit = personState.showCockpit;
    persons.splice(personIndex, 1);
    setPersonState({
      persons: persons,
      showPerson: showPersons,
      showCockpit: showCockpit,
    });
  };

  const removedAll = () => {
    const persons = [...personState.persons];
    const showPerson = personState.showPerson;
    setPersonState({
      persons: persons,
      showPerson: showPerson,
      showCockpit: false,
    });
  };

  let persons = null;

  if (personState.showPerson) {
    persons = (
      <Persons
        persons={personState.persons}
        deleted={deletePersonHandler}
        changed={nameChangeHandler}
      />
    );
  }

  return (
    <div>
      <div className={classes.App}>
        <button onClick={removedAll}>Romove All Persons</button>
      </div>
      <WithClass classes={classes.App}>
        {personState.showCockpit ? (
          <div>
            <Cockpit toggle={togglePersonHandler} />
            {persons}
          </div>
        ) : null}
      </WithClass>
    </div>
  );
};

export default App;
