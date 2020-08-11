import React, { useState } from "react";
import User from "./components/Users";
import users from "./users.json";
import ActionBar from "./components/ActionBar"
import Bio from "./components/Bio"

//TODO  DRY sortbyname and sortby alterego
//TODO  reset user list after filter 
//TODO  refactor/document code 

const userData = users;

const App = () => {
  const [users, setUsers] = useState(userData);
  const [bio, setBio] = useState({});

  const filterDead = () => {
    setUsers(userData);  //why doesn't this reset the filter ?
    const filteredUsers = [...users].filter(user => user.alive !== true);
    setUsers(filteredUsers);
  }

  const filterLive = () => {
    setUsers(userData);  //why doesn't this reset the filter ?
    const filteredUsers = [...users].filter(user => user.alive === true);
    setUsers(filteredUsers);
  }

  const sortByAlterEgo = () => {
    //Thank you MDN:  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    const sortedUsers = [...users].sort(function (a, b) {
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
    setUsers(sortedUsers);
  }

  const sortByName = () => {
    //Thank you MDN:  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    const sortedUsers = [...users].sort(function (a, b) {
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

    setUsers(sortedUsers);
  }

  const displayBio = (id) => {
    const selectedBio = users.filter(user => user.id === id);
    //console.log(selectedBio);
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
      {users.map(user => (
        <User
          key={user.id}
          id={user.id}
          name={user.name}
          alterego={user.alterego}
          alive={user.alive}
          displayBio={displayBio}
        />
      ))}
    </>
  );
}

export default App;
