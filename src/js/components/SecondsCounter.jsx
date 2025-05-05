
import React from "react";


function SecondsCounter(props) {
  return (
    <div className="text-center d-flex justify-content-center">
    <p>{Math.floor(props.seconds/3600) % 60}</p>
   
    <p>{Math.floor(props.seconds/60) % 60}</p>
    
    <p>{Math.floor(props.seconds) % 60}</p>
</div>
  );
}

export default SecondsCounter;






