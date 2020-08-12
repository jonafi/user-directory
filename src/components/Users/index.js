import React from "react";
import "./style.css";

function User(props) {
  return (
    <div className="card">
      <div className="content">
        <strong>Name:</strong> {props.name} <br/><strong>Alter Ego:</strong> {props.alterego}
        <p className="biolink" onClick={() => props.displayBio(props.id)}>Bio</p>
      
      </div>
   
    </div>
  );
}

export default User;
