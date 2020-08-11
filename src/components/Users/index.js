import React from "react";
import "./style.css";

function User(props) {
  return (
    <div className="card">
      <div className="content">
        <strong>Name:</strong> {props.name} - <strong>Alter Ego:</strong> {props.alterego}
        <p className="more" onClick={() => props.displayBio(props.id)}>More</p>
      
      </div>
   
    </div>
  );
}

export default User;
