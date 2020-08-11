import React from "react";
import "./style.css";

function Bio(props) {
    
  return (
      <div  className="bio">
          <img src={"pics/"+props.bio.pic} alt="Profile" className="bioPic"/>
<p className="quote">

{props.bio.quote}

</p>
    </div>
  );
}

export default Bio;
