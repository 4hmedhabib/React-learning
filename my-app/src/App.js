import React from "react";
import Person from "./Person/Person";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1>Hi, I am React 16.13 Version</h1>
      <Person name="Ahmed Habib" age="19" />
      <Person name="Abdi Habib" age="16">
        {" "}
        ,My Hoppies: Racing
      </Person>
      <Person name="Marwa Habib" age="12" />
    </div>
  );
};

export default App;
