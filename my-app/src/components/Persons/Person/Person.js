import React, { useEffect } from "react";
import Aux from "../../../hoc/Aux1";
import classes from "./Person.css";

const person = (props) => {
  return (
    <Aux>
      <div className={classes.Person}>
        <p>
          Hi I'm {props.name} and I'am {props.age} years old.
        </p>
        <input type="text" onChange={props.changed} value={props.name}></input>
        <button
          id="deleted"
          className={classes.btnDelete}
          onClick={props.click}
        >
          Delete
        </button>
      </div>
    </Aux>
  );
};

export default person;
