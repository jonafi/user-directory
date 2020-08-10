import React from "react";


const ActionBar = (props) => {
  return (
      <div>
    <h1>Marvel Directory</h1>
    <button onClick={()=>props.handleClick()}>Sort by name</button>
    <button>Sort by Alter Ego </button>
    <button>I see dead people</button>
    </div>
  );
}

export default ActionBar;
