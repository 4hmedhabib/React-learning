import React, { useEffect } from "react";
import Person from "./Person/Person";
import PropTypes from "prop-types";

const Persons = (props) => {
  return props.persons.map((person, index) => {
    return (
      <Person
        name={person.name}
        age={person.age}
        click={() => props.deleted(index)}
        changed={(event) => props.changed(event, person.id)}
        key={person.id}
      />
    );
  });
};

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  changed: PropTypes.func,
  age: PropTypes.number,
};

export default Persons;
