import React, { useState } from "react";
//import { useEffect } from "react";
import User from "./components/Users";
import users from "./users.json";
import ActionBar from "./components/ActionBar"
import Bio from "./components/Bio"

//TODO  DRY sort functions and filter functions

const userData = users;  // maintain a "fresh copy" of the original list

const App = () => {

  const [users, setUsers] = useState(userData);
  const [bio, setBio] = useState({});
   
//======= Unused useEffect code, helped debug.  Thank you Daniel! ==//
//  const [clickedCheck, setClickedCheck] = useState(false);
//   useEffect( ()=>{
//     console.log("useEffect triggered");
//     setUsers(userData);
//      },[clickedCheck]
//   )
//  const clickChecker = ()=>{
//   console.log(clickedCheck)
//   if(clickedCheck){
//     setClickedCheck(false)
//   }
//   else{
//     setClickedCheck(true)
//   }
//   return clickedCheck;
//  }


  const filterDead = () => {
    const filteredUsers = [...userData].filter(user => user.alive !== true);
    setUsers(filteredUsers);
  }

  const filterLive = () => {
    const filteredUsers = [...userData].filter(user => user.alive === true);
    setUsers(filteredUsers);
  }

  const sortByAlterEgo = () => {
    //Thank you MDN:  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    const sortedUsers = [...userData].sort(function (a, b) {
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
    const sortedUsers = [...userData].sort(function (a, b) {
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