import React from "react";
import "./Person.css";

const person = (props) => {
  return (
    <div className="Person">
      <p>
        Hi I'm {props.name} and I'am {props.age} years old.
      </p>
      <input type="text" onChange={props.nameChange} value={props.name}></input>
      <button className="btnDelete" onClick={props.click}>
        Delete
      </button>
    </div>
  );
};

export default person;
