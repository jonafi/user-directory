import React, { Component } from "react";
import EmployeeProfile from "./components/EmployeeProfile";
import employees from "./employees.json";
import NavBar from "./components/NavBar"

class App extends Component {
  state = {
    employees
  };

  render() {
    return (
  <>
  <NavBar/>
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
