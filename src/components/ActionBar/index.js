import React from "react";
import "./style.css"


const ActionBar = (props) => {
  return (
      <div className="action">
    <h1 className="title">Marvel Directory</h1>
    <button className="btn btn-primary" onClick={()=>props.handleNameClick()}>Sort by name</button> 
    <button className="btn btn-primary" onClick={()=>props.handleAlterEgoClick()}>Sort by alter ego </button> 
    <button className="btn btn-danger" onClick={()=>props.deadFilter()}>Show only dead users</button>
    <button className="btn btn-success" onClick={()=>props.liveFilter()}>Show only live users</button>
    </div>
  );
}

export default ActionBar;
