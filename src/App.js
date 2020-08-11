import React, { useState } from "react";
import User from "./components/Users";
import employees from "./employees.json";
import ActionBar from "./components/ActionBar"
import Bio from "./components/Bio"

//TODO  Dry sortbyname and sortby alterego
//TODO  reset employee list after filter and/or modify filter to checkboxes
//TODO  refactor/document code , address name inconsitencies 
//TODO  style changes: move bio window to be inside card


const employeeData = employees;
const App = () => {
  const [employees, setEmployees] = useState(employeeData);
  const [bio, setBio] = useState({
    id: 1,
    name: "Steve Rogers",
    alterego: "Captain America",
    pic: "captainamerica.jpg",
    alive: true,
    quote: "Meow"
  });

  const filterDead = () => {
    const filteredEmployees = [...employees].filter(employee => employee.alive !== true);
    setEmployees(filteredEmployees);
  }

  const filterLive = () => {
    const filteredEmployees = [...employees].filter(employee => employee.alive ===true);
    setEmployees(filteredEmployees);
  }


  const sortByAlterEgo = () => {
    //Thank you MDN:  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    const sortedEmployees = [...employees].sort(function (a, b) {
      let nameA = a.alterego;
      let nameB = b.alterego;
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



  const sortByName = () => {
    //Thank you MDN:  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    const sortedEmployees = [...employees].sort(function (a, b) {
      let nameA = a.name;
      let nameB = b.name;
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

  const displayBio = (id) => {
    const selectedBio = employees.filter(employee => employee.id === id);
    console.log(selectedBio);
    setBio(selectedBio[0]);
  }

  return (
    <>
      <ActionBar
        handleNameClick={sortByName}
        handleAlterEgoClick={sortByAlterEgo}
        deadFilter={filterDead}
        liveFilter={filterLive}
      />
      <Bio bio={bio} />
      {employees.map(employee => (
        <User
          key={employee.id}
          id={employee.id}
          name={employee.name}
          alterego={employee.alterego}
          alive={employee.alive}
          displayBio={displayBio}
        />
      ))}
    </>
  );
}

export default App;
