import React from "react";
import "./style.css";

function EmployeeProfile(props) {
  return (
    <div className="card">
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Alter Ego:</strong> {props.alterego}
          </li>

        </ul>
  
      </div>
  <p className="more" onClick={()=>props.displayBio(props.id)}><a href="#">More &rarr; </a></p>
    </div>
  );
}

export default EmployeeProfile;
