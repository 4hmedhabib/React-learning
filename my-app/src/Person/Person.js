import React from "react";

const person = (props) => {
  return (
    <div>
      <p>
        Hi I'm {props.name} and I'am {props.age} years old.
      </p>
      <input type="text" onChange={props.nameChange}></input>
    </div>
  );
};

export default person;
