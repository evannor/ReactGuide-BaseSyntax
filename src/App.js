import React, { Component } from "react";
import UserInput from "./components/UserInput";
import UserOutput from "./components/UserOutput";
import "./App.css";

class App extends Component {
  state = {
    users: [{ name: "Fred" }, { name: "Jamie" }, { name: "Erica" }],
  };

  nameChangeHandler = (event) => {
    this.setState({
      users: [
        { name: "Fred" },
        { name: "Jamie" },
        { name: event.target.value },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <UserInput change={this.nameChangeHandler} />
        <UserOutput username={this.state.users[0].name} />
        <UserOutput username={this.state.users[1].name} />
        <UserOutput username={this.state.users[2].name} />
        <ol>
          <li>
            Add two-way-binding to your input (in UserInput) to also display the
            starting username
          </li>
          <li>
            Add styling of your choice to your components/ elements in the
            components - both with inline styles and stylesheets
          </li>
        </ol>
      </div>
    );
  }
}

export default App;
