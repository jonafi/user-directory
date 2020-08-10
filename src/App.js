import React, { useState } from "react";
import EmployeeProfile from "./components/EmployeeProfile";
import employees from "./employees.json";
import ActionBar from "./components/ActionBar"
import Bio from "./components/Bio"


const employeeData = employees;
const App = () => {

  const [employees, setEmployees] = useState(employeeData);
  const [bio, setBio] = useState({
    id: 1,
    name: "Steve Rogers",
    alterego: "Captain America",
    pic: "",
    alive:true,
    quote: ""
  });

  const sortByName = () => {
    // console.log("button clicked")

    const sortedEmployees = [...employees].sort(function (a, b) {
      let nameA = a.name.toUpperCase(); // ignore upper and lowercase
      let nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });

    setEmployees(sortedEmployees);

  }

  const displayBio = (id)=>{
    const selectedBio = employees.filter(employee=>employee.id===id);
    console.log(selectedBio);
    setBio(selectedBio[0]);

  }


  return (
    <>
      <ActionBar handleClick={sortByName} />
      <Bio bio={bio} />
      {employees.map(employee => (
        <EmployeeProfile
          key={employee.id}
          id={employee.id}
          name={employee.name}
          alterego={employee.alterego}
          displayBio={displayBio}
        />
      ))}
    </>
  );

}

export default App;
