import React from "react";
import "./style.css";

function Bio(props) {
  if(props.bio.id){
  return (
      <div  className="bio">
          <img src={"pics/"+props.bio.pic} alt="Profile" className="bioPic"/>
<p className="quote">
&ldquo;
{props.bio.quote}
&rdquo;
</p>
    </div>
  );
}
else{
  return null;
}
}

export default Bio;
