import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Mohamad", age: "22" },
      { name: "Breezy", age: "23" },
      { name: "Zack", age: "20" },
    ],
  };
  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: "29" },
        { name: "Breezy", age: "33" },
        { name: "Zack", age: "90" },
      ],
    });
  };
  changeNameHandler = (event) => {
    this.setState({
      persons: [
        { name: "Mohamad", age: "29" },
        { name: event.target.value, age: "33" },
        { name: "Zack", age: "24" },
      ],
    });
  };
  render() {
    return (
      <div className="App">
        <h1>Hello to the first react app that I'm building!</h1>
        <button
          onClick={() => {
            this.switchNameHandler("KK!");
          }}
        >
          Switch Values
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          changed={this.changeNameHandler}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "TestName")}
        >
          My Hobbies: Suck pp
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
