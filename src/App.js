import React, { Component } from "react";
import EmployeeProfile from "./components/EmployeeProfile";
import employees from "./employees.json";
import ActionBar from "./components/ActionBar"
import Bio from "./components/Bio"

class App extends Component {
  state = {
    employees
  };

  render() {
    return (
  <>
  <ActionBar/>
  <Bio/>
        {this.state.employees.map(employee => (
          <EmployeeProfile
            id={employee.id}
            name={employee.name}
            alterego={employee.alterego}
            goodguy={employee.goodguy}
          />
        ))}
      </>
    );
  }

}

export default App;
