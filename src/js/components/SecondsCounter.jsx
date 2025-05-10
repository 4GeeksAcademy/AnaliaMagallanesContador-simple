
import React from "react";
import { FaClock } from "react-icons/fa"; 
function SecondsCounter(props) {
  const segundos = props.seconds;

  const digits = String(segundos).padStart(6, '0').split('');

  return (
    <div className="counter-container">
      <div className="digit"><FaClock /></div>
      {digits.map((digit, index) => (
        <div key={index} className="digit">{digit}</div>
      ))}
    </div>
  );
}

export default SecondsCounter;





