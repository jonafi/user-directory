import React from "react";
import "./style.css";

function User(props) {
  return (
    <div className="card" onClick={() => props.displayBio(props.id)}>
      <div className="content">
        <div className="cell"><strong>Name:</strong> {props.name}</div>
        <div className="cell"><strong>Alter Ego:</strong> {props.alterego}</div>
        </div>
   
    </div>
  );
}

export default User;
