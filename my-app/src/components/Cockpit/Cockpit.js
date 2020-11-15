import React, { useEffect } from "react";
import classes from "../../containers/App.css";

const Cockpit = (props) => {
  useEffect(() => {
    console.log("[Cockpit] running");
    setTimeout(() => {
      alert("changed Person");
    }, 100);
    return () => {
      console.log("removed person");
    };
  }, []);

  return (
    <button
      className={classes.btnHandler}
      onClick={props.toggle /*switchNameHandler*/}
    >
      Toggle Persons
    </button>
  );
};

export default Cockpit;
