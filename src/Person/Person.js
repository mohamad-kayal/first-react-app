import React from "react";
import "./Person.css";

const person = (props) => {
  return (
    <div className="person">
      <h1 onClick={props.click}>
        I'm {props.name} and my age is {props.age}{" "}
      </h1>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed}></input>
    </div>
  );
};
export default person;
