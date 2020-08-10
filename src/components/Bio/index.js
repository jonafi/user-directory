import React from "react";
import "./style.css";

function Bio(props) {
    
  return (
      <div className="bio">
          {/* <img src="based on prop" alt="PIC  BASED ON PROP PASSED IN" className="bioPic"/> */}

<p className="quote">
    &ldquo;
{props.bio.quote}
    &rdquo;
</p>
    </div>
  );
}

export default Bio;
