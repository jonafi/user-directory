import React from "react";


const ActionBar = (props) => {
  return (
      <div>
    <h1>Marvel Directory</h1>
    <button onClick={()=>props.handleNameClick()}>Sort by name</button>
    <button onClick={()=>props.handleAlterEgoClick()}>Sort by Alter Ego </button>
    <button onClick={()=>props.deadFilter()}>I see dead people</button>
    </div>
  );
}

export default ActionBar;
