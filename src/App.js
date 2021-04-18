import React, { Component } from "react";

import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "first", name: "John", age: "22" },
      { id: "second", name: "Max", age: "23" },
      { id: "third", name: "Jane", age: "20" },
    ],
    showPersons: false,
    toggleButtonText: "Show Persons",
  };

  changeNameHandler = (event, personID) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === personID;
    });
    const person = { ...this.state.persons[personIndex] };
    const persons = [...this.state.persons];

    person.name = event.target.value;
    persons[personIndex] = person;

    this.setState({
      persons: persons,
    });
  };
  togglePersonsHandler = () => {
    this.state.showPersons
      ? this.setState({ showPersons: false, toggleButtonText: "Show Persons" })
      : this.setState({ showPersons: true, toggleButtonText: "Hide Persons" });
  };
  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };
  render() {
    let persons = null;
    let style = {
      backgroundColor: "green",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      ":hover": ''
    };

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={this.deletePersonHandler.bind(this, index)}
                key={person.id}
                changed={(event) => this.changeNameHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    } 
    else {
      style.backgroundColor = "red";
    }
    return (
      <div className="App">
        <h1>Hi there, This is my first react app!</h1>
        <button
          style={style}
          onClick={() => {
            this.togglePersonsHandler();
          }}
        >
          {this.state.toggleButtonText}
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
